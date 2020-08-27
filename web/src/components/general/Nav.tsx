import { usePulse } from 'pulse-framework';
import core from '@pebblo/core';
import styles from '../styles/navbar.module.css'

const Topnav = () => {
    const [loggedIn] = usePulse([core.accounts.state.IS_LOGGED]);
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
                <a href="/andre" className={styles.avatar}>
                     <img src="https://cdn.discordapp.com/avatars/215302985826304010/5e65d38cf852733f000359a5713231a2.png?size=1024" alt=""/>
                </a>
                : <p>no u</p> }
            </div>
        </>
    )
}

export default Topnav;