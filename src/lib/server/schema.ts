import { makeExecutableSchema } from "@graphql-tools/schema";
import { GraphQLTimestamp } from "graphql-scalars";
import { resolvers } from "./server.resolvers";

const typeDefs = require("./dirty49374.graphql").default;

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers: {
    Timestamp: GraphQLTimestamp,
    ...resolvers,
  } as any,
});
