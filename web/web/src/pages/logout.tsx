import { useApolloClient } from "@apollo/client";
import { useLogoutMutation, useMeQuery } from "~/generated/graphql";
import { withApollo } from "~/hooks/withApolloHook";
import { useRouter } from "next/router";

export function Logout() {
  const router = useRouter();
  const { data } = useMeQuery();
  const [logoutMutation] = useLogoutMutation()
  if(data?.me) {
    logoutMutation();
    router.push("/");
  } else if(process.browser) {
    router.push("/home")
  }
  return (
    <p></p>
  )
}

export default withApollo({ ssr: true })(Logout);