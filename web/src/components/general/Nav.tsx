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
            <div className={styles.navigation}>
                <a href="/">
                <div className={styles.navigation_logo}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                </a>

                <div className={styles.links}>
                    <a href={`/${current.username}`} className={styles.active}><img src="https://cdn.discordapp.com/attachments/596156721928470547/745850922525261844/unknown.png" alt=""/></a>
                    <a href="/explore"><img src="https://cdn.discordapp.com/attachments/667293886468718592/734609486307786862/search.png" alt=""/></a>
                    <a href="/notifications"><img src="https://cdn.discordapp.com/attachments/596156721928470547/745859897656344586/bell2.png" alt=""/></a>
                    <a href="/message"><img src="https://cdn.discordapp.com/attachments/596156721928470547/745835287300800522/envelope.png" alt=""/></a>
                </div>

                {loggedIn ? 
                <a href={`/${current.username}`} className={styles.avatar}>
                     <img src={current.avatar} alt=""/>
                </a> : '' }
            </div>
        </>
    )
}

export default Topnav;