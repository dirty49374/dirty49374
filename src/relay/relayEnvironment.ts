import { useMemo } from "react";
import {
  Environment,
  GraphQLResponse,
  Network,
  Observable,
  RecordSource,
  Store,
  SubscribeFunction,
} from "relay-runtime";
import type { FetchFunction } from "relay-runtime";

import fetchGraphQL from "./fetchGraphQL";
import { createClient } from "graphql-sse";
const sseClient = createClient({
  url: "http://localhost:3000/api/graphql-sse",
  headers: {
    "Content-Type": "application/json",
  },
  singleConnection: true,
});

let relayEnvironment: Environment;

const fetchFn: FetchFunction = async (params, variables) => {
  return fetchGraphQL(params.text!, variables);
};

const subscribeFn: SubscribeFunction = (operation, variables) => {
  return Observable.create((sink) => {
    sseClient.subscribe(
      {
        operationName: operation.name,
        query: operation.text!,
        variables,
      },
      sink as any
    );
  });
};

const createEnvironment = () => {
  return new Environment({
    network: Network.create(fetchFn, subscribeFn),
    store: new Store(new RecordSource()),
  });
};

type InitialRecords = ConstructorParameters<typeof RecordSource>[number];
export const initEnvironment = (initialRecords?: InitialRecords) => {
  const environment = relayEnvironment ?? createEnvironment(); // #1

  if (initialRecords) {
    environment.getStore().publish(new RecordSource(initialRecords)); // #2
  }

  if (typeof window === "undefined") return environment; // #3

  if (!relayEnvironment) {
    relayEnvironment = environment; // #4
  }

  return relayEnvironment;
};

export const useEnvironment = (initialRecords: InitialRecords) => {
  const relayEnvironment = useMemo(
    () => initEnvironment(initialRecords),
    [initialRecords]
  );
  return relayEnvironment;
};
