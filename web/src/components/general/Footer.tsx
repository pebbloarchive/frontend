
import { usePulse } from 'pulse-framework';
import core from '@pebblo/core';
import styles from '../styles/landing.module.css'
import Router from 'next/router';
import { AccountUser } from '@pebblo/core/lib/controllers/accounts/account.interfaces';
import Link from 'next/link';

const Topnav = () => {
    const [loggedIn, user] = usePulse([core.accounts.state.IS_LOGGED, core.accounts.state.CACHE]);
    const [current]: AccountUser[] = usePulse([core.accounts.collection.selectors.CURRENT]);
    return (
        <>


            <footer className={styles.footer}>

                

            </footer>
        </>
    )
}

export default Topnav;