import { withApollo } from "~/hooks/withApolloHook";

export async function Settings() {
  return (
    <p>Omg becky</p>
  )
}

export default withApollo({ ssr: true })(Settings);