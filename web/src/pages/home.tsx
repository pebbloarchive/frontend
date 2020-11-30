import { useRouter } from "next/router";
import { withApollo } from "../components/hooks/withApolloHook";
import Content from "../components/general/profile/home/Home";
import Nav from "../components/Nav"
import styles from "../css/profile/home/content.module.css";
import { useIsAuth } from "../components/hooks/useIsAuth";
import { useMeQuery } from "../generated/graphql";
import Login from '../pages/login'

export const Home = () => {
    const router = useRouter();
    const { data, loading } = useMeQuery()
    
    if(!loading && !data?.me) {
        if(process.browser) {
            router.replace("/login")
            return <p></p>
        }
    }

    if(loading && !data?.me) {
        return <p>Loading...</p>
    }

    return (
        <>
            <title>Home</title>
            <Nav/>
            <div className={styles.content}>
                <Content/>
            </div>
        </>
    )
}

export default withApollo({ ssr: true })(Home);