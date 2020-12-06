import { useQuery } from "@apollo/client"
import { useRouter } from "next/router";
import { Component, useEffect } from "react";
import { useMeQuery } from "@pebblo/frontend/src/generated/graphql";
import { withApollo } from "./withApolloHook";
import { ServerResponse } from "http";

export function useIsAuthed(server?: ServerResponse) {
  const { data, loading } = useMeQuery();
  useEffect(() => {
    if (!loading && !data?.me) {
      if (server) {
        server.writeHead(302, {
          Location: "/login"
        })
        server.end()
      }
    }
  }, [loading, data]);
}

export default withApollo({ ssr: true })(useIsAuthed);