import { IdConverter, Serde } from "../common/idConverter";
import { Types } from "mongoose";

const mongooseIdSerde: Serde<Types.ObjectId, string> = {
  serialize: (id) => id.toString(),
  deserialize: (postId) => new Types.ObjectId(postId),
};

const constIdSerde: Serde<string, string> = {
  serialize: () => '1',
  deserialize: () => '1',
}

export const UserId = new IdConverter("User", mongooseIdSerde);
export const PostId = new IdConverter("Post", mongooseIdSerde);
export const MeId = new IdConverter("Me", constIdSerde);
export const ServiceConfigId = new IdConverter("Sc", constIdSerde);
