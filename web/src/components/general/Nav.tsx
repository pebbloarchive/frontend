import { usePulse } from 'pulse-framework';
import core from '@pebblo/core';
import styles from '../styles/navbar.module.css'
import Router from 'next/router';
import { AccountUser } from '@pebblo/core/lib/controllers/accounts/account.interfaces';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Topnav = () => {
    const [loggedIn, user] = usePulse([core.accounts.state.IS_LOGGED, core.accounts.state.CACHE]);
    const [current] = usePulse([core.accounts.collection.selectors.CURRENT]);
    const [active, isActive] = useState(undefined);

    const onRouteChange = (route) => {
        switch(route) {
            case '/home':
                return isActive('home');
            case '/explore':
                return isActive('explore');
            case '/notifications':
                return isActive('notifications');
            case '/message':
                return isActive('message');
        }
    };

    useEffect(() => {
        if(process.browser) onRouteChange(Router.route);
        Router.events.on('onRouterStart', onRouteChange);
    });

    return (
        <>
            <div className={styles.navigation}> 
                <a href="/home">
                <div className={styles.navigation_logo}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                </a>

                <div className={styles.links}>
                    <Link href="/home">
                        <a className={`${active === 'home' ? styles.active : ''}`}><img src="https://cdn.discordapp.com/attachments/596156721928470547/745850922525261844/unknown.png" alt=""/></a>
                    </Link>
                    <Link href="/explore">
                        <a className={`${active === 'explore' ? styles.active : ''}`}><img src="https://cdn.discordapp.com/attachments/667293886468718592/734609486307786862/search.png" alt=""/></a>
                    </Link>
                    <Link href="/notifications">
                    <a className={`${active === 'notifications' ? styles.active : ''}`}><img src="https://cdn.discordapp.com/attachments/596156721928470547/745859897656344586/bell2.png" alt=""/></a>
                    </Link>
                    <Link href="/message">
                        <a className={`${active === 'message' ? styles.active : ''}`}><img src="https://cdn.discordapp.com/attachments/596156721928470547/745835287300800522/envelope.png" alt=""/></a>
                    </Link>
                </div>

                { loggedIn ? <a href={`/${current.username}`} className={styles.avatar}><img src={current.avatar} alt=""/></a> : ''}

            </div>
        </>
    )
}

export default Topnav;