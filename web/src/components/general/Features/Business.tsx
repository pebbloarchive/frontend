import Link from 'next/link';
import React from 'react';
import styles from '../../styles/landing.module.css'
import { usePulse } from 'pulse-framework';
import core from '@pebblo/core';

const Page = () => {
    const [loggedIn, user] = usePulse([core.accounts.state.IS_LOGGED, core.accounts.state.CACHE]);
    const [current] = usePulse([core.accounts.collection.selectors.CURRENT]);
    return (
        <>
            <div className={styles.features}>
                <div className={styles.about}>

                    <div className={styles.about_landing}>
                        <h1 className={styles.about_title}>
                            <strong>Help grow your <br/></strong>
                            <span>business using Pebblo</span>
                        </h1>
                        <Link href={`/${current.username}`}><a href={`/${current.username}`}>Purchase Now!</a></Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Page;