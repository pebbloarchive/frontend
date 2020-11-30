import React, { useState } from 'react'
import Head from 'next/head';
import styles from '../css/auth.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import { useAuth } from '../components/hooks/useAuth';
import { withApollo } from '../components/hooks/withApolloHook';
import { onError } from "apollo-link-error";
import { MeDocument, MeQuery, useLoginMutation } from '../generated/graphql';

const Login = () => {
        const router = useRouter();
        const [usernameOrEmail, setEmail] = useState(undefined);
        const [password, setPassword] = useState(undefined);
        const { me } = useAuth();
        if(me && process.browser) router.push('/'); 

        // const [handleLogin] = useMutation(login, {
        //     variables: { usernameOrEmail, password },
        //     onCompleted: (data) => data.login && router.push('/explore')
        // });

        // const [handleLogin, { data }] = useLoginMutation(login, {
        //     variables: { usernameOrEmail, password },
        //     update: (cache, { data }) => {
        //         // console.log(cache)
        //         cache.writeQuery({
        //             query: meQuery,
        //             data: {
        //                 me: data?.login.user
        //             }
        //         })
        //     }
        // });

        const [handleLogin, { data }] = useLoginMutation({
            variables: { usernameOrEmail, password },
            update: (cache, { data }) => {
                cache.writeQuery<MeQuery>({
                    query: MeDocument,
                    data: {
                        __typename: "Query",
                        me: data?.login.user,
                    }
                })
            }
        })
        
        if(data?.login.errors) return <p>{JSON.stringify(data.login.errors)}</p>
        
        if(data?.login) {
            if(typeof router.query.next === "string") {
                router.push(router.query.next)
            } else {
                router.push('/')
            }
        }
        
        const onSubmit = (e) => {
            e.preventDefault();
            handleLogin();
        }

    return (
        <>
            <Head>
                <title>Pebblo - Login</title>
            </Head>
            <div className={styles.auth_right}>
                <img src="images/svg/woman-bench.svg"/>
            </div>

            <Link href="/"><a href="/" className={styles.auth_go_back}><span></span></a></Link>

            <form className={styles.auth_form} onSubmit={onSubmit}>
                <h1 className={styles.auth_title}>Welcome back :)</h1>
                <input
                    className={styles.auth_form_username}
                    type="text"
                    name="create_username"
                    placeholder="Username or email"
                    required
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    className={styles.auth_form_password}
                    type="password"
                    name="create_password"
                    placeholder="Password"
                    required
                    onChange={e => setPassword(e.target.value)}
                />
                <input type="submit" value="Login"/>
            </form>
        </>
    );
}

Login.theme = 'light';
export default withApollo({ ssr: false })(Login)
