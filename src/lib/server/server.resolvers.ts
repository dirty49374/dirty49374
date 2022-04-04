import { errors } from "lib/common/errors";
import { parseGlobalId } from "lib/common/idConverter";
import { Types } from "mongoose";
import { adjustRole } from "./auth";
import { MeId, PostId, ServiceConfigId, UserId } from "./ids";
import { MongoosePaginator } from "./mgutils/paginator";
import { PostModel, UserModel } from "./server.models";
import { ServerContext } from "./server.context";
import { loadServiceConfigOrDefault } from "./serviceConfig";
import { Me, Resolvers, Role, User } from "./__generated__/dirty49374.schema";

const guestMe = (): Me => ({
  id: MeId.toGlobal("1"),
  avatar: "/avatar.png",
  loggedIn: false,
});
const loggedInMe = (user: User): Me => ({
  id: MeId.toGlobal("1"),
  userId: UserId.toGlobal(user._id),
  name: user.name,
  avatar: user.image || "/avatar.png",
  email: user.email,
  role: adjustRole(user.name, user.role),
  loggedIn: true,
});

export const resolvers: Resolvers<ServerContext> = {
  Me: {},
  ServiceConfig: {
    id: (sc) => ServiceConfigId.toGlobal("1"),
  },
  User: {
    id: (user) => UserId.toGlobal(user._id),
    avatar: (user) => user.image || "/avatar.png",
  },
  Post: {
    id: (post) => PostId.toGlobal(post._id),
    author: (post, _, ctx) => ctx.userById.load(post._authorId),
  },
  Query: {
    health: () => "Ok",
    me: async (_, {}, ctx) => {
      if (!ctx.user) return guestMe();

      const _id = UserId.toLocal(ctx.user.id);
      const user = await UserModel.findById(_id);
      return user ? loggedInMe(user) : guestMe();
    },
    posts: (_, args) => {
      const filter = args.category ? { category: args.category } : undefined;
      return new MongoosePaginator(PostModel, "Post", filter).paginate(args);
    },
    user: (_, { id }, ctx) => ctx.userById.load(UserId.toLocal(id)),
    post: (_, { id }, ctx) => ctx.postById.load(PostId.toLocal(id)),
    node: (_, { id }, ctx) => {
      const { __typename, _id } = parseGlobalId(id);
      switch (__typename) {
        case UserId.idType:
          return ctx.userById.load(new Types.ObjectId(_id)) as any;
        case PostId.idType:
          return ctx.postById.load(new Types.ObjectId(_id)) as any;
        case ServiceConfigId.idType:
          return loadServiceConfigOrDefault();
      }
      throw new Error("invalid id");
    },
    serviceConfig: async (_, __, ctx) => {
      return await loadServiceConfigOrDefault();
    },
  },
  Mutation: {
    createPost: async (_, { input }, ctx) => {
      if (!ctx.user) throw errors.unauthenticated();
      if (ctx.user.role !== Role.Admin) throw errors.unauthorized();

      if (!input.category) throw new Error("no category");

      const _authorId = UserId.toLocal(ctx.user.id);

      const post = new PostModel({
        _authorId,
        title: input.title,
        category: input.category,
        content: input.content,
        type: input.type,
        postedAt: new Date(),
      });

      await post.save();

      return { post };
    },
    deletePost: async (_, { input }, ctx) => {
      if (!ctx.user) throw errors.unauthenticated();
      if (ctx.user.role !== Role.Admin) throw errors.unauthorized();

      await PostModel.deleteOne({ _id: PostId.toLocal(input.id) });
      return { success: true };
    },
    updatePost: async (_, { modify }, ctx) => {
      if (!ctx.user) throw errors.unauthenticated();
      if (ctx.user.role !== Role.Admin) throw errors.unauthorized();

      if (modify) {
        const post = await PostModel.findById({
          _id: PostId.toLocal(modify?.id),
        });
        if (!post) return { post: null };
        post.title = modify.title;
        post.content = modify.content;
        post.category = modify.category;

        await post.save();
        return { post };
      }
      return { post: null };
    },
    updateServiceConfig: async (_, { category }, ctx) => {
      if (!ctx.user) throw errors.unauthenticated();
      if (ctx.user.role !== Role.Admin) throw errors.unauthorized();

      const serviceConfig = await loadServiceConfigOrDefault();
      if (category) {
        serviceConfig.categories = category.categories || [];
      }

      await serviceConfig.save();
      return { serviceConfig };
    },
  },
};
