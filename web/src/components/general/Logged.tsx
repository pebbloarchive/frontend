import { usePulse } from 'pulse-framework';
import core from '@pebblo/core';
import styles from '../styles/auth.module.css'
import Router from 'next/router';
import { AccountUser } from '@pebblo/core/lib/controllers/accounts/account.interfaces';
import Link from 'next/link';

const Topnav = () => {
    const [loggedIn, user] = usePulse([core.accounts.state.IS_LOGGED, core.accounts.state.CACHE]);
    const [current]: AccountUser[] = usePulse([core.accounts.collection.selectors.CURRENT]);
    return (
        <>
            { !loggedIn ? <div className={styles.logged}>
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