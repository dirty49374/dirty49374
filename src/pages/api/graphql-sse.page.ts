import { execute, subscribe, validate } from "graphql";
import { createHandler } from 'graphql-sse';
import { getEnveloped } from "lib/server/schema";


const sseHandler = createHandler({
  execute,
  subscribe,
  validate,
  onConnecting: (req, res) => {
    res.setHeader('Content-Encoding', 'none'); // <--- needs for NextJS
  },
  onSubscribe: async (req, _res, params) => {
    const { schema, parse, contextFactory } = getEnveloped({ req });
    return {
      schema,
      operationName: params.operationName,
      document: typeof params.query === 'string' ? parse(params.query) : params.query,
      variableValues: params.variables,
      contextValue: await contextFactory(req),
    };
  },
});

export default async function handler(req: any, res: any) {
  return sseHandler(req, res, req.body);
}
