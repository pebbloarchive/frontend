import { getUser } from "../../../graphql/queries/user";
import { getApolloClient, withApollo } from "../../components/hooks/withApolloHook"
import { GetServerSideProps } from "next";
import Nav from '../../components/Nav';
import NotFound from '../404'
import styles from '../../css/profile/profile.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from "../../components/hooks/useAuth";
import { meQuery } from "../../../graphql/queries/me";

const username = ({ data: { data, loading } }) => {
    if(!data || !data.user || data.user.errors) {
        return <NotFound />
    }

    if(loading) {
      return <p>Loading...</p>
    }

    const { user } = data.user;
    const router = useRouter();

    return (
        <>
            {/* <Nav /> */}
            <p>{user.username} Media!</p>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const client = getApolloClient();
    const data = await client.query({
      query: getUser,
      variables: { username: context.params.username as string }
    });
    return {
      props: {
        apolloStaticCache: client.cache.extract(),
        data
      }
    };
}

export default withApollo(username);
