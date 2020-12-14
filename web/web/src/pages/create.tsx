import React, { useState } from 'react'
import Head from 'next/head';
import styles from '@pebblo/css/auth.module.css';
import Link from 'next/link';
import { withApollo } from '~/hooks/withApolloHook';
import { useRouter } from 'next/router';
import { MeDocument, MeQuery, useRegisterMutation } from '~/generated/graphql';

export function Create() {
    const router = useRouter();
    const [email, setEmail] = useState(undefined);
    const [username, setUsername] = useState(undefined);
    const [password, setPassword] = useState(undefined);

    const [handleCreate, { data}] = useRegisterMutation({
        variables: { options: { email, username, password } },
        update: (cache, { data }) => {
            cache.writeQuery<MeQuery>({
                query: MeDocument,
                data: {
                    __typename: "Query",
                    me: data?.register.user
                }
            })  
        }
    })

    if(data?.register.errors) return <p>{JSON.stringify(data.register.errors)}</p>

    if(data?.register) {
        router.push("/");
    }

    const onSubmit = (e) => {
        e.preventDefault();
        handleCreate();
    }

    return (
        <>
            <Head>
                <title>Pebblo - Create</title>
            </Head>
            <div className={styles.auth_right}>
                <img src="images/svg/woman-smartphone.svg"/>
            </div>

            <Link href="/"><a href="/" className={styles.auth_go_back}><span></span></a></Link>

            <form className={styles.auth_form} onSubmit={onSubmit}>
                <h1 className={styles.auth_title}>Create an account.</h1>
                <input
                    className={styles.auth_form_username}
                    type="text"
                    name="create_username"
                    placeholder="Username"
                    required
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    className={styles.auth_form_email}
                    type="email"
                    name="create_email"
                    placeholder="Email Address"
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
                <input type="submit" value="Create"/>
            </form>
        </>
    );
}

Create.theme = 'light';
export default withApollo({ ssr: false })(Create);
