import React from 'react'
import Head from 'next/head';
import styles from '../css/auth.module.css';
import Link from 'next/link';

export const Register = () => {
    return (
        <>
            <Head>
                <title>Pebblo - Create</title>
            </Head>
            <div className={styles.auth_right}>
                <img src="images/svg/woman-smartphone.svg"/>
            </div>

            <Link href="/"><a href="/" className={styles.auth_go_back}><span></span></a></Link>

            <form className={styles.auth_form}>
                <h1 className={styles.auth_title}>Create an account.</h1>
                <input
                    className={styles.auth_form_username}
                    type="text"
                    name="create_username"
                    placeholder="Username"
                    required
                />
                <input
                    className={styles.auth_form_email}
                    type="email"
                    name="create_email"
                    placeholder="Email Address"
                    required
                />
                <input
                    className={styles.auth_form_password}
                    type="passworc"
                    name="create_password"
                    placeholder="Password"
                    required
                />
                <input type="submit" value="Create"/>
            </form>
        </>
    );
}

Register.theme = 'light';
export default Register;
