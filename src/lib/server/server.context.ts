import { Types } from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { getToken, JWT } from "next-auth/jwt";
import { createUniqueFieldDataLoader } from "./dataloaders";
import { PostModel, ServiceConfigModel, UserModel } from "./server.models";
import { Post, Role, ServiceConfig, User, Chat } from "./__generated__/dirty49374.schema";
import { PubSub } from "graphql-subscriptions";
import { TypedPubSub } from "typed-graphql-subscriptions";

// 1
export type PubSubChannels = {
  newChat: [string];
};

// 2
export const pubSub = new TypedPubSub<PubSubChannels>(new PubSub());
(pubSub as any)._IX = Math.random();


export type ServerContext = Awaited<ReturnType<typeof serverContextFactory>> & {
  req: NextApiRequest;
  res: NextApiResponse;
  user?: JWT & {
    id: string;
    image: string;
    role: Role;
  } | null;
};

export const serverContextFactory = async (context: any) => {
  const secret = process.env.NEXTAUTH_SECRET;
  const user = await getToken({ req: context.req, secret });

  return {
    // authenticateUser,
    user,
    userById: createUniqueFieldDataLoader<User, Types.ObjectId>(
      UserModel,
      (_ids) => ({ _id: { $in: _ids } }),
      (user) => user._id.toString()
    ),
    userByEmail: createUniqueFieldDataLoader<User, string>(
      UserModel,
      (emails) => ({ email: { $in: emails } }),
      (user) => user.email
    ),
    postById: createUniqueFieldDataLoader<Post, Types.ObjectId>(
      PostModel,
      (_ids) => ({ _id: { $in: _ids } }),
      (user) => user._id.toString()
    ),
    serviceConfigByKey: createUniqueFieldDataLoader<ServiceConfig, string>(
      ServiceConfigModel,
      (keys) => ({ key: { $in: keys } }),
      (config) => config.key,
    ),
    pubSub,
  };
};
