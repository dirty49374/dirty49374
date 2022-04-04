import mongoose from "mongoose";
import { Types, Schema, Model, model } from "mongoose";
import {
  Category,
  ContentType,
  Post,
  ServiceConfig,
  User,
} from "./__generated__/dirty49374.schema";

// -------------------------------------------------------------------

declare module "./__generated__/dirty49374.schema" {
  interface User {
    _id: Types.ObjectId;
    name: string;
    email: string;
    image: string;
  }
}

const UserSchema = new Schema<User>({
  name: { type: String, required: true, index: { unique: true } },
  email: { type: String, required: true },
  image: { type: String, required: true },
  role: { type: String, required: true },
});

export const UserModel: Model<User> =
  mongoose.models.User || model<User>("User", UserSchema);

// -------------------------------------------------------------------

declare module "./__generated__/dirty49374.schema" {
  interface Post {
    _id: Types.ObjectId;
    _authorId: Types.ObjectId;
    title: string;
    content: string;
    postedAt: Date;
  }
}

const PostSchema = new Schema<Post>({
  _authorId: { type: Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  content: { type: String, required: true },
  type: { type: String, required: true },
  postedAt: { type: Date, required: true },
});

export const PostModel: Model<Post> =
  mongoose.models.Post || model<Post>("Post", PostSchema);

// -------------------------------------------------------------------

declare module "./__generated__/dirty49374.schema" {
  interface ServiceConfig {
    _id: Types.ObjectId;
    key: string;
  }
}

const ServiceConfigSchema = new Schema<ServiceConfig>({
  key: { type: String, required: true, index: { unique: true } },
  categories: [
    new Schema<Category>({
      id: { type: String, required: true },
      name: { type: String, required: true },
    }),
  ],
});

export const ServiceConfigModel: Model<ServiceConfig> =
  mongoose.models.ServiceConfig ||
  model<ServiceConfig>("ServiceConfig", ServiceConfigSchema);

// -------------------------------------------------------------------
