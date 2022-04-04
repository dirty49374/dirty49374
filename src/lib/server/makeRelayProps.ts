import { fetchQuery } from "react-relay";
import { GraphQLTaggedNode, OperationType } from "relay-runtime";
import { initEnvironment } from "relay/relayEnvironment";

type ResultType<T extends OperationType> = {
  props: T["response"] & {
    initialRecords: string;
  };
};

export const makeRelayProps =
  <T extends OperationType>(
    query: GraphQLTaggedNode,
    variables: T["variables"]
  ) =>
  async (): Promise<ResultType<T>> => {
    const environment = initEnvironment();
    try {
      const queryProps: any = await fetchQuery<T>(
        environment,
        query,
        variables
      ).toPromise();
      const initialRecords = environment.getStore().getSource().toJSON();

      return {
        props: {
          ...queryProps,
          initialRecords,
        },
      };
    } catch (e) {
      console.error(e);
      throw e;
    }
  };
