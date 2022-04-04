import {
  envelop,
  useExtendContext,
  useSchema,
} from "@envelop/core";
import {
  getGraphQLParameters,
  processRequest,
  renderGraphiQL,
  sendResult,
  shouldRenderGraphiQL,
} from "graphql-helix";
import { initServer } from "lib/server/init";
import { schema } from "lib/server/schema";
import { serverContextFactory } from "lib/server/server.context";

/* eslint-disable react-hooks/rules-of-hooks */
const getEnveloped = envelop({
  plugins: [
    useSchema(schema),
    useExtendContext(serverContextFactory),
    // useD4Auth(),
  ],
});

export default async function handler(req: any, res: any) {
  const {
    parse,
    validate,
    contextFactory,
    execute,
    schema,
  } = getEnveloped({
    req,
    res,
  });

  const request = {
    body: req.body,
    headers: req.headers,
    method: req.method,
    query: req.query,
  };

  if (shouldRenderGraphiQL(request as any)) {
    res.send(renderGraphiQL({ endpoint: "/api/graphql" }));
  } else {
    await initServer();

    const { operationName, query, variables } = getGraphQLParameters(request);

    const result = await processRequest({
      operationName,
      query,
      variables,
      request,
      schema,
      parse,
      validate,
      execute,
      contextFactory,
    });

    sendResult(result, res);
  }
}
