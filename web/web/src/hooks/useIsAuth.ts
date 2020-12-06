import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMeQuery } from "@pebblo/frontend/src/generated/graphql";
import { withApollo } from "./withApolloHook";

export const useIsAuth = () => {
    const { data, loading } = useMeQuery();
    const router = useRouter();
    useEffect(() => {
			if(!loading && !data?.me) {
        router.replace(`/login?next=${router.asPath}`);
      }
    }, [loading, data, router]);
  }
  
export default withApollo({ ssr: true })(useIsAuth);