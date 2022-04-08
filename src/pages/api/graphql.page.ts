import { envelop, useExtendContext, useSchema } from "@envelop/core";
import {
  getGraphQLParameters,
  processRequest,
  renderGraphiQL,
  sendMultipartResponseResult,
  sendResponseResult,
  shouldRenderGraphiQL,
} from "graphql-helix";
import { initServer } from "lib/server/init";
import { getEnveloped, schema } from "lib/server/schema";
import { serverContextFactory } from "lib/server/server.context";

async function nextSendPushResult(
  pushResult: any,
  rawResponse: any,
  transformResult = (result: any) => result
) {
  /**
   * TypeScript complains because of function call signature mismatches.
   * The signatures, however, are identical, thus we cas this here to suppress warnings,
   */
  const response = rawResponse;
  response.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Content-Encoding": "none", // <--- needs for NextJS
    // prettier-ignore
    "Connection": "keep-alive",
    "Cache-Control": "no-cache",
  });
  response.on("close", () => {
    pushResult.unsubscribe();
  });
  await pushResult.subscribe((result: any) => {
    response.write(`event: next\n`);
    response.write(`data: ${JSON.stringify(transformResult(result))}\n\n`);
  });
  response.end();
}

/* eslint-disable react-hooks/rules-of-hooks */

export default async function handler(req: any, res: any) {
  const { parse, validate, contextFactory, execute, schema } = getEnveloped({
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

    if (result.type === "RESPONSE") {
      sendResponseResult(result, res);
    } else if (result.type === "MULTIPART_RESPONSE") {
      sendMultipartResponseResult(result, res);
    } else if (result.type === "PUSH") {
      nextSendPushResult(result, res);
    }
  }
}
