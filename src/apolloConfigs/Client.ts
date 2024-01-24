import { ApolloClient, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { RetryLink } from "@apollo/client/link/retry";
import { onError } from "@apollo/client/link/error";
import fetch from "cross-fetch";
import ApolloCache from "./Cache";

const httpLink = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_APOLLO_CLIENT_HTTP_LINK_URI}`,
  credentials: "include",
  fetch,
});
function clearCookie(name: string) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
const serverHttpLink = createHttpLink({
  uri: `${process.env.APOLLO_CLIENT_HTTP_LINK_URI}`,
  credentials: "include",
  fetch,
});
interface Definintion {
  kind: string;
  operation?: string;
}
const retryLink = new RetryLink({
  delay: {
    initial: 300,
    max: Infinity,
    jitter: true,
  },
  attempts: {
    max: 6,
    retryIf: (error, operation) => {
      const {
        query: {
          definitions: [definition],
        },
      } = operation;
      const { operation: graphQlType }: Definintion = definition;
      return graphQlType === "query";
    },
  },
});

const authLink = setContext(() => {
  // you can manipulate your request headers from here
  const token = localStorage.getItem("authToken");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      authorization: token || "",
    },
  };
});

const errorLink = onError(
  // eslint-disable-next-line consistent-return
  ({ networkError, graphQLErrors }) => {
    let networkErrorMessage = "";
    if (graphQLErrors) {
      // eslint-disable-next-line no-restricted-syntax
      for (const error of graphQLErrors) {
        if (error.message === "Invalid session token.") {
          clearCookie("mission_dashboard");
          // eslint-disable-next-line no-unused-expressions
          window.location.href === "/login";
        }
      }
    }

    if (
      networkError &&
      // @ts-ignore
      networkError.statusCode &&
      // @ts-ignore
      networkError.statusCode !== 200
    ) {
      // @ts-ignore
      networkErrorMessage = ` Error Code: ${networkError.statusCode}`;
    }

    if (networkError && networkError.message) {
      // eslint-disable-next-line no-param-reassign
      networkError.message =
        networkError.message.indexOf("JSON") !== -1
          ? `Sorry, we experienced a technical error. Please refresh this page or try again later.${networkErrorMessage}`
          : networkError.message;
      if (networkError.message === "Failed to fetch") {
        // eslint-disable-next-line no-param-reassign
        networkError.message =
          "Sorry, we encountered a connection error. Please check your internet connection and retry again. If the problem persists, please contact @Safaricom_Care on Twitter.";
      }
    }
  },
);

const Client = new ApolloClient({
  link: retryLink.concat(errorLink).concat(authLink).concat(httpLink),
  cache: ApolloCache,
  resolvers: {},
  connectToDevTools:
    process.env.NEXT_PUBLIC_APOLLO_ENVIRONMENT !== "production",
});

export const ServerClient = new ApolloClient({
  ssrMode: true,
  link: serverHttpLink,
  cache: ApolloCache,
  ssrForceFetchDelay: 100,
  resolvers: {},
  connectToDevTools: false,
});

export default Client;
