import { useRouter } from "next/router";

import { useAuth } from "../hooks/useAuth";
import { withApollo } from "../hooks/withApolloHook";
import Content from "@pebblo/frontend/src/components/general/profile/home/Home";
import Nav from "@pebblo/frontend/src/components/Nav"
import styles from "@pebblo/css/profile/home/content.module.css";
import { useMeQuery } from "../generated/graphql";

export const Home = () => {
    const { data, loading } = useMeQuery()
    
    if(!loading && !data?.me) {
        return <p>lol</p>
    }

    if(loading && data?.me) {
        return <p>Loading...</p>
    }
    // const { loading, data } = useQuery(meQuery);

    
    // if(loading) {
    //     return <p>Loading...</p>
    // }

    // if(!data?.me) {
    //     router.push('/login')
    // }

    return (
        <>
            <title>Explore</title>
            <Nav/>
        </>
    )
}

export default withApollo({ ssr: false })(Home);