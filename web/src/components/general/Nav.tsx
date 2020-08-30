import { usePulse } from 'pulse-framework';
import core from '../../core';
import styles from '../styles/navbar.module.css'
import Router from 'next/router';
import { loginUserIn } from '@pebblo/core/dist/controllers/accounts/account.helpers';

const Topnav = () => {
    const [loggedIn, user] = usePulse([core.accounts.state.IS_LOGGED, core.accounts.state.CACHE]);
    return (
        <>
            <div className={styles.navigation}>
                <div className={styles.navigation_logo}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={styles.links}>
                    <a href="/andre" className={styles.active}><img src="https://cdn.discordapp.com/attachments/596156721928470547/745850922525261844/unknown.png" alt=""/></a>
                    <a href="/explore"><img src="https://cdn.discordapp.com/attachments/667293886468718592/734609486307786862/search.png" alt=""/></a>
                    <a href="/notifications"><img src="https://cdn.discordapp.com/attachments/596156721928470547/745859897656344586/bell2.png" alt=""/></a>
                    <a href="/message"><img src="https://cdn.discordapp.com/attachments/596156721928470547/745835287300800522/envelope.png" alt=""/></a>
                </div>

                {loggedIn ? 
                <a href={`/${user.username}`} className={styles.avatar}>
                     <img src={user.avatar ? user.avatar : 'https://cdn.discordapp.com/attachments/596156721928470547/746173257866018866/unknown.png'} alt=""/>
                </a>
                : !loggedIn ? '' : false }
            </div>
        </>
    )
}

export default Topnav;