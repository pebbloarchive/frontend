import { useIsAuth } from "~/hooks/useIsAuth";
import { useIsAuthed } from "~/hooks/useIsAuthed"
import { withApollo } from "~/hooks/withApolloHook";

export function Page() {
  useIsAuthed();
  // useIsAuth()
  return (
    <p>Hello earthling</p>
  )
}

export default withApollo({ ssr: true })(Page);