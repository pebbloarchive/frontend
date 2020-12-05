import { usePulse } from 'pulse-framework';
import core from '@pebblo/core';
import styles from '../styles/navbar.module.css'
import Router from 'next/router';
import { AccountUser } from '@pebblo/core/lib/controllers/accounts/account.interfaces';
import Link from 'next/link';
import { useState } from 'react';

const Topnav = () => {
    const [loggedIn, user] = usePulse([core.accounts.state.IS_LOGGED, core.accounts.state.CACHE]);
    // const [current]: AccountUser[] = usePulse([core.accounts.collection.selectors.CURRENT]);
    const [current] = usePulse([core.accounts.collection.selectors.CURRENT]);
    const [clicked, wasClicked] = useState<boolean>(false);

    const onClick = () => {
        if(!clicked) {
            wasClicked(true);
        } else {
            wasClicked(false);
        }
        console.log("peepee")
    };

    const Context = () => {
        return (
            <div className={styles.menu_links_mobile}>
                <Link href="/"><a href="/">Home</a></Link>
                <Link href="/about"><a href="/about">Features</a></Link>
                <Link href="/explore"><a href="/explore">Explore</a></Link>
                <Link href="/resources"><a href="/resources">Resources</a></Link>
            </div>
        )
    }

    return (
        <>
            <div className={styles.menu}>
                <div className={styles.menu_content}>
                    <div className={styles.menu_links}>
                        <Link href=""><a href="">
                            
                        </a></Link>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Topnav;