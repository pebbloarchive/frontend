// import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
// import { NextPageContext } from "next";
// import * as React from 'react'
// import { ApolloProvider } from '@apollo/client'
// import { ThemeProvider } from "next-themes";

// // const CLIENT_URL = process.env.NODE_ENV !== 'production' ? 'https://pebblo.org/api' : 'http://localhost:4000/api';
// const CLIENT_URL = 'http://localhost:4000/api';
// const endpoint = `${CLIENT_URL}/query`;
// const link = new HttpLink({ uri: endpoint, credentials: "include" });
// const isBrowser: boolean = (process as any).browser;

import { createWithApollo } from "./createWithApollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { PaginatedPosts } from "@pebblo/frontend/src/generated/graphql";
import { NextPageContext } from "next";

const CLIENT_URL = 'http://97.84.165.72:4000/api';
const endpoint = `${CLIENT_URL}/graphql`;

const createClient = (ctx: NextPageContext) =>
  new ApolloClient({
    uri: endpoint as string,
    credentials: "include",
    headers: {
      cookie:
        (typeof window === "undefined"
          ? ctx?.req?.headers.cookie
          : undefined) || "",
    },
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            posts: {
              keyArgs: [],
              merge(
                existing: PaginatedPosts | undefined,
                incoming: PaginatedPosts
              ): PaginatedPosts {
                return {
                  ...incoming,
                  posts: [...(existing?.posts || []), ...incoming.posts],
                };
              },
            },
          },
        },
      },
    }),
  });

export const withApollo = createWithApollo(createClient);