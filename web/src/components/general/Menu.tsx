import { usePulse } from 'pulse-framework';
import core from '@pebblo/core';
import styles from '../styles/navbar.module.css'
import Router from 'next/router';
import { AccountUser } from '@pebblo/core/lib/controllers/accounts/account.interfaces';
import Link from 'next/link';

const Topnav = () => {
    const [loggedIn, user] = usePulse([core.accounts.state.IS_LOGGED, core.accounts.state.CACHE]);
    const [current]: AccountUser[] = usePulse([core.accounts.collection.selectors.CURRENT]);
    return (
        <>
            <div className={styles.menu}>
                <button className={styles.menu_button}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={styles.menu_company}>
                    <Link href="/">
                        <h1>Pebblo</h1>
                    </Link>
                </div>
                {loggedIn ? 
                <div className={styles.menu_user}>
                    <Link href={`${current.username}`}>
                        {/* <p>Hey, ${current.username}!</p> */}
                        <img src={current.avatar} alt=""/>
                    </Link>
                </div> : '' }
            </div>

            <div className={styles.menu_links}>
                <Link href="">Explore</Link>
                <Link href="">News</Link>
                <Link href="">Developers</Link>
            </div>
        </>
    )
}

export default Topnav;