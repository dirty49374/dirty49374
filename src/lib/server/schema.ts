import { envelop, useSchema, useExtendContext } from "@envelop/core";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { GraphQLTimestamp } from "graphql-scalars";
import { serverContextFactory } from "./server.context";
import { resolvers } from "./server.resolvers";

const typeDefs = require("./dirty49374.graphql").default;

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers: {
    Timestamp: GraphQLTimestamp,
    ...resolvers,
  } as any,
});

export const getEnveloped = envelop({
  plugins: [
    useSchema(schema),
    useExtendContext(serverContextFactory),
    // useD4Auth(),
  ],
});
