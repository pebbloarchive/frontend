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
    const [clicked, wasClicked] = useState<boolean>(false);

    const onClick = () => {
        if(!clicked) {
            wasClicked(true);
        } else {
            wasClicked(false);
        }
    };

    const Context = () => {
        return (
            <section className={styles.profile_dropup}>
                <Link href={`/${current.username}`}><a href={`/${current.username}`}>My Profile</a></Link>
                <Link href="/rewards"><a href="/rewards">Rewards</a></Link>
                <Link href="/insights"><a href="/insights">Insights</a></Link>
                <Link href="/settings"><a href="/settings">Settings</a></Link>
                <br/>
                <Link href="/logout"><a href="/logout">Logout</a></Link>
            </section>
        )
    }

    const onRouteChange = (route) => {
        // if(route === '/') isActive('home');
        // if(route === '/explore') isActive('explore');
        // if(route === '/notifications') isActive('notifications');
        // if(route === '/message') isActive('message');
        switch(route) {
            case  '/rewards':
                return isActive('rewards');
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
                    {/* <Link href="/rewards">
                        <a className={`${active === 'rewards' ? styles.active : ''}`}><img src="https://cdn.discordapp.com/attachments/596156721928470547/755728010367205386/piggy-bank.png" alt=""/></a>
                    </Link> */}
                    <Link href="/explore">
                        <a className={`${active === 'explore' ? styles.active : ''}`}><img src="https://cdn.discordapp.com/attachments/667293886468718592/734609486307786862/search.png" alt=""/></a>
                    </Link>
                    <Link href="/notifications">
                    <a className={`${active === 'notifications' ? styles.active : ''}`}><img src="https://cdn.discordapp.com/attachments/596156721928470547/755728469312274479/notification.png" alt=""/></a>
                    </Link>
                    <Link href="/messages">
                        <a className={`${active === 'messages' ? styles.active : ''}`}><img src="https://cdn.discordapp.com/attachments/596156721928470547/755729094720880640/envelope.png" alt=""/></a>
                    </Link>
                </div> : '' }

                {loggedIn ? 
                <button className={styles.avatar} onClick={onClick}>
                     <img src={current.avatar} alt=""/>
                     { clicked ? <Context /> : '' }
                </button> : '' }

            </div>
        </>
    )
}

export default Topnav;