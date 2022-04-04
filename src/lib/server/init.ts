import { MongoClient } from "mongodb";
import mongoose from "mongoose";

let promise: Promise<MongoClient> | null = null;

const init = async (): Promise<MongoClient> => {
  await mongoose.connect(process.env.MONGODB_URI!);
  return mongoose.connection.getClient();
};

export const initServer = () => (promise ? promise : (promise = init()));
