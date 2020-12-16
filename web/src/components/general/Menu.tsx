import { usePulse } from 'pulse-framework';
import core from '@pebblo/core';
import styles from '../styles/landing.module.css'
import Router from 'next/router';
import { AccountUser } from '@pebblo/core/lib/controllers/accounts/account.interfaces';
import Link from 'next/link';
import { useState } from 'react';
import { getAvatar } from '../utils';

const Nav = () => {
    const [loggedIn, user] = usePulse([core.accounts.state.IS_LOGGED, core.accounts.state.CACHE]);
    // const [current]: AccountUser[] = usePulse([core.accounts.collection.selectors.CURRENT]);
    const [current] = usePulse([core.accounts.collection.selectors.CURRENT]);

    return (
        <>
            <nav className={styles.navbar}>
                <Link href="/"><a href="/" className={styles.navbar_name}>
                    <span>pebblo</span>
                </a></Link>
                    <section className={styles.navbar_links}>
                        <li><Link href="/features"><a href="/features">Features</a></Link></li>
                        <li><Link href="/explore"><a href="/explore">Explore</a></Link></li>
                        <li><Link href="/resources"><a href="/resources">Resources</a></Link></li>
                    </section>
                        { loggedIn ?
                            <section className={styles.navbar_right}>
                                <li><Link href="/andre"><a href="/andre" className={styles.navbar_button_one}>Hello, <span>@andre</span>!</a></Link></li>
                            </section>
                        :
                            <section className={styles.navbar_right}>
                                <li><Link href="/login"><a href="/login" className={styles.navbar_button_one}>Login</a></Link></li>
                                <li><Link href="/create"><a href="/create" className={styles.navbar_button_two}>Create</a></Link></li>
                            </section>
                        }
            </nav>
        </>


    )
}

export default Nav;