import Layout from "components/Layout";
import { MeProvider } from "hooks/useMe";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Suspense } from "react";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { useEnvironment } from "../relay/relayEnvironment";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  const environment = useEnvironment(pageProps.initialRecords);
  return (
    <RelayEnvironmentProvider environment={environment}>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <Suspense fallback={"loading..."}>
          <MeProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </MeProvider>
        </Suspense>
      </SessionProvider>
    </RelayEnvironmentProvider>
  );
}

export default App;
