import Link from "next/link";
import Nav from "@pebblo/frontend/src/components/general/Menu";
import Footer from "@pebblo/frontend/src/components/general/Footer";
import styles from "@pebblo/css/landing.module.css";
import { useAuth } from "../hooks/useAuth";
import { withApollo } from "../hooks/withApolloHook";
import { useQuery } from "@apollo/client";
import { useMeQuery } from "../generated/graphql";
import Button from "~/components/ui/Button";

const Index = () => {
  return (
    <>
      <title>Pebblo</title>
      <Nav />
    </>
  );
};

Index.theme = "light";

// HOC example

/*Index.getInitialProps = (ctx) => {
  if (ctx.res) {
    ctx.res.writeHead(302, { Location: "/login" });
    ctx.res.end();
  }
  return {};
};
*/

export default withApollo({ ssr: true })(Index);
