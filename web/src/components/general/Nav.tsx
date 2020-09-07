import { usePulse } from 'pulse-framework';
import core from '@pebblo/core';
import styles from '../styles/navbar.module.css'
import Router from 'next/router';
import { AccountUser } from '@pebblo/core/lib/controllers/accounts/account.interfaces';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Topnav = () => {
    const [loggedIn, user] = usePulse([core.accounts.state.IS_LOGGED, core.accounts.state.CACHE]);
    const [current]: AccountUser[] = usePulse([core.accounts.collection.selectors.CURRENT]);
    const [active, isActive] = useState(undefined);

    const onRouteChange = (route) => {
        // if(route === '/') isActive('home');
        // if(route === '/explore') isActive('explore');
        // if(route === '/notifications') isActive('notifications');
        // if(route === '/message') isActive('message');
        switch(route) {
            case  '/profile':
                return isActive('home');
            case '/explore':
                return isActive('explore');
            case '/notifications':
                return isActive('notifications');
            case '/messages':
                return isActive('messages');
        }
        console.log(active);
    };

    useEffect(() => {
        if(process.browser) onRouteChange(Router.route);
        Router.events.on('onRouterStart', onRouteChange);
    });

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
                {loggedIn ? 
                <div className={styles.links}>
                    <Link href="/profile">
                        <a className={`${active === 'home' ? styles.active : ''}`}><img src="https://cdn.discordapp.com/attachments/596156721928470547/745850922525261844/unknown.png" alt=""/></a>
                    </Link>
                    <Link href="/explore">
                        <a className={`${active === 'explore' ? styles.active : ''}`}><img src="https://cdn.discordapp.com/attachments/667293886468718592/734609486307786862/search.png" alt=""/></a>
                    </Link>
                    <Link href="/notifications">
                    <a className={`${active === 'notifications' ? styles.active : ''}`}><img src="https://cdn.discordapp.com/attachments/596156721928470547/745859897656344586/bell2.png" alt=""/></a>
                    </Link>
                    <Link href="/messages">
                        <a className={`${active === 'messages' ? styles.active : ''}`}><img src="https://cdn.discordapp.com/attachments/596156721928470547/745835287300800522/envelope.png" alt=""/></a>
                    </Link>
                </div> : '' }

                {loggedIn ? 
                <Link href={`/${current.username}`}><a href={`/${current.username}`} className={styles.avatar}>
                     <img src={current.avatar} alt=""/>
                        <section className={styles.profile_dropup}>
                            <Link href="/"><a href="/">Accounts</a></Link>
                            <Link href="/rewards"><a href="/rewards">Rewards</a></Link>
                            <Link href="/settings"><a href="/settings">Settings</a></Link>
                            <br/>
                            <Link href="/logout"><a href="/logout">Logout</a></Link>
                        </section>
                </a></Link> : '' }

            </div>
        </>
    )
}

export default Topnav;