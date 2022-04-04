import { fetchQuery } from "react-relay";
import { initEnvironment } from "../relay/relayEnvironment";
import graphql from "babel-plugin-relay/macro";

import type { InferGetServerSidePropsType } from "next";
import { test_health_Query } from "./__generated__/test_health_Query.graphql";
import { makeRelayProps } from "lib/server/makeRelayProps";

export default function Home({
  health,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <ul>{health}</ul>
    </div>
  );
}

const query = graphql`
  query test_health_Query {
    health
  }
`;

export const getServerSideProps = makeRelayProps<test_health_Query>(query, {});

// export const getServerSideProps = async () => {
//   const environment = initEnvironment();
//   try {
//     const queryProps = await fetchQuery<test_health_Query>(
//       environment,
//       query,
//       {}
//     ).toPromise();
//     const initialRecords = environment.getStore().getSource().toJSON();

//     return {
//       props: {
//         ...queryProps,
//         initialRecords,
//       },
//     };
//   } catch (e) {
//     console.error(e);
//     throw e;
//   }
// };
