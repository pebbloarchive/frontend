import { usePulse } from 'pulse-framework';
import core from '@pebblo/core';
import styles from '../styles/navbar.module.css'
import Router from 'next/router';
import { AccountUser } from '@pebblo/core/lib/controllers/accounts/account.interfaces';

const Topnav = () => {
    const [loggedIn, user] = usePulse([core.accounts.state.IS_LOGGED, core.accounts.state.CACHE]);
    const [current]: AccountUser[] = usePulse([core.accounts.collection.selectors.CURRENT]);
    return (
        <>
            <div className={styles.menu}>
                <button className={styles.menu_button}>
                <span></span>
                <span></span>
                </button>

                <h1 className={styles.menu_company}>pebblo</h1>

            </div>
        </>
    )
}

export default Topnav;