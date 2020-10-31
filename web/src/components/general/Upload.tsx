import { usePulse } from 'pulse-framework';
import core from '@pebblo/core';
import styles from '../styles/profile/upload.module.css'
import Router from 'next/router';
import { AccountUser } from '@pebblo/core/lib/controllers/accounts/account.interfaces';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Page = () => {
    const [loggedIn, user] = usePulse([core.accounts.state.IS_LOGGED, core.accounts.state.CACHE]);
    const [current]: AccountUser[] = usePulse([core.accounts.collection.selectors.CURRENT]);
    const [active, isActive] = useState(undefined);

    return (
        <>
            <div className={styles.content}>
                <a href="" className={styles.}></a>
            </div>
        </>
    )
}

export default Page;