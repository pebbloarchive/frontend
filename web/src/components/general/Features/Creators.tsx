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
                            <strong>This feature is currently <br/></strong>
                            <span>undergoing maintenance... sorry!</span>
                            {/* <strong>Help grow your <br/></strong>
                            <span>business using Pebblo</span> */}
                        </h1>
                        <Link href="/"><a href="/">Back home</a></Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Page;