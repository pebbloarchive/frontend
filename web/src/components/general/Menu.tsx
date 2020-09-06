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
                        <a href="/"><h1>Pebblo</h1></a>
                    </Link>
                </div>
                {loggedIn ? 
                <div className={styles.menu_user}>
                    <Link href={`${current.username}`}>
                        {/* <p>Hey, ${current.username}!</p> */}
                        <img src={current.avatar} alt=""/>
                    </Link>
                <section className={styles.menu_user_dropdown}>
                    <Link href={`/${current.username}`}><a href={`/${current.username}`}>Profile</a></Link>
                    <Link href="/"><a href="/settings">Settings</a></Link>
                    <hr/>
                    <Link href="/logout"><a href="/logout">Logout</a></Link>
                </section>
                </div> : '' }
            </div>

            <div className={styles.menu_links}>
                <Link href="/explore"><a href="/explore">Explore</a></Link>
                <Link href="/blog"><a href="/blog">Blog</a></Link>
                <Link href="/developers"><a href="/developers">Developers</a></Link>
                <Link href="/help-desk"><a href="/help-desk">Help Desk</a></Link>
            </div>
        </>
    )
}

export default Topnav;