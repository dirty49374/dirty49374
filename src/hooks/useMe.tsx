import graphql from "babel-plugin-relay/macro";
import Router from "next/router";
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useLazyLoadQuery } from "react-relay";
import {
  useMe_Query,
  useMe_Query$data,
} from "./__generated__/useMe_Query.graphql";

export type MeContextValue = {
  me: useMe_Query$data["me"] | null;
  serviceConfig: useMe_Query$data["serviceConfig"] | null;
  invalidate: () => void;
};

const MeContext = createContext<MeContextValue>({
  me: null,
  serviceConfig: null,
  invalidate: () => {
    throw new Error("no provider");
  },
});

type MeProviderProps = {
  children?: ReactNode;
};

export const MeProvider: FC<MeProviderProps> = ({ children }) => {
  const [fetchKey, setFetchKey] = useState(0);
  const invalidate = () => setFetchKey((key) => key + 1);
  const [data, setData] = useState<MeContextValue>(() => ({
    me: null,
    serviceConfig: null,
    invalidate,
  }));

  const result = useLazyLoadQuery<useMe_Query>(
    graphql`
      query useMe_Query {
        me {
          id
          userId
          name
          role
          avatar
          loggedIn
        }
        serviceConfig {
          id
          categories {
            id
            name
          }
        }
      }
    `,
    {},
    { fetchKey, fetchPolicy: "store-and-network" }
  );

  useEffect(() => {
    setData({
      me: result.me,
      serviceConfig: result.serviceConfig,
      invalidate,
    });
  }, [result]);

  return <MeContext.Provider value={data}>{children}</MeContext.Provider>;
};

const useMe = ({ redirectTo = "", redirectIfFound = false } = {}) => {
  const data = useContext(MeContext);

  useEffect(() => {
    if (!data.me || !redirectTo) return;
    if (redirectIfFound) {
      if (data.me.loggedIn) {
        Router.push(redirectTo);
      }
    } else {
      if (!data.me.loggedIn) {
        Router.push(redirectTo);
      }
    }
  }, [data.me, redirectTo, redirectIfFound]);

  return data;
};

export default useMe;

export function afterMe<T>(Comp: FC<T>): FC<T> {
  return (props: T) => {
    const { me } = useMe();
    return me ? <Comp {...props} /> : <></>;
  };
}
