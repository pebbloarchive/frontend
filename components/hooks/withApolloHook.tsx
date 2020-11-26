import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import { NextPageContext } from "next";
import * as React from 'react'
import { ApolloProvider } from '@apollo/client'

// const CLIENT_URL = process.env.NODE_ENV !== 'production' ? 'https://pebblo.org/api' : 'http://localhost:4000/api';
const CLIENT_URL = 'http://localhost:4000/api';
const endpoint = `${CLIENT_URL}/query`;
const link = new HttpLink({ uri: endpoint, credentials: "include" });
const isBrowser: boolean = (process as any).browser;

export const getApolloClient = (ctx?: NextPageContext) => {
    return new ApolloClient({
        headers: {
            cookie:
              (typeof window === "undefined"
                ? ctx?.req?.headers.cookie
                : undefined) || "",
        },
        credentials: 'include',
        link, 
        cache: new InMemoryCache(), 
    });
}

export function withApollo(PageComponent) {
  // eslint-disable-next-line
  const WithApollo = ({ apolloStaticCache, ...pageProps }) => {
    // apolloStaticCache prop gets set in getStaticProps on page views
    const client = getApolloClient(apolloStaticCache)
    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    )
  }

  // Set the correct displayName in development
  if (process.env.NODE_ENV !== 'production') {
    const displayName =
      PageComponent.displayName || PageComponent.name || 'Component'

    WithApollo.displayName = `withApollo(${displayName})`
  }

  return WithApollo
}
