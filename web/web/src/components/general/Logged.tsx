import styles from '@pebblo/css/auth.module.css'
import Router from 'next/router';
import Link from 'next/link';
import { useMeQuery } from '~/generated/graphql';

const Topnav = () => {
    const { data } = useMeQuery();
    return (
        <>
            { !data?.me ? <div className={styles.logged}>
                <section className={styles.logged_text}>
                    <h1 className={styles.logged_title}>You're not logged in.</h1>
                    <p className={styles.logged_message}>Don't miss an update from your favourite people!</p>
                </section>
                <section className={styles.logged_links}>
                    <Link href="/login"><a href="/login" className={styles.logged_login}>Log in</a></Link>
                    <Link href="/create"><a href="/create" className={styles.logged_create}>New to Pebblo?</a></Link>
                    {/* <strong>or</strong> */}
                </section>
            </div> : '' }
        </>
    )
}

export default Topnav;