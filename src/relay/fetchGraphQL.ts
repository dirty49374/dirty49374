// import fetch from "isomorphic-fetch";
import type { Variables } from "relay-runtime";

const endpoint =
  process.env.NEXT_PUBLIC_GRAPHQL_URI || "http://localhost:3000/api/graphql";

let accessToken = global.window && localStorage.getItem("accessToken");
let refreshToken = global.window && localStorage.getItem("refreshToken");

const fetchGraphQL = async (query: string, variables: Variables) => {
  const headers: HeadersInit = accessToken
    ? {
        "Content-Type": "application/json",
        authorization: `bearer ${accessToken}`,
      }
    : { "Content-Type": "application/json" };

  const response = await fetch(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await response.json();

  const accessToken_ = response.headers.get("x-token");
  if (accessToken_) {
    accessToken = accessToken_;
    localStorage.setItem("accessToken", accessToken_);
  }

  const refreshToken_ = response.headers.get("x-token");
  if (refreshToken_) {
    refreshToken = refreshToken_;
    localStorage.setItem("refreshToken", refreshToken_);
  }

  return json;
};

export default fetchGraphQL;

export const logout = () => {
  localStorage.clear();
  accessToken = '';
  refreshToken = '';
}
