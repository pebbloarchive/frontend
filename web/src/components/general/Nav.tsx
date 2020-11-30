import { usePulse } from 'pulse-framework';
import core from '@pebblo/core';
import styles from '../styles/navbar.module.css'
import Router from 'next/router';
import { AccountUser } from '@pebblo/core/lib/controllers/accounts/account.interfaces';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getAvatar } from '../utils';

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
            <div className={styles.profile_dropup}>
                <Link href={`/${current.username}`}><a href={`/${current.username}`}>Your Profile</a></Link>
                <Link href="/settings"><a href="/settings">Settings</a></Link>
                <Link href="/logout"><a href="/logout" className={styles.profile_dropup_logout}>Logout</a></Link>
            </div>
        )
    }

    const onRouteChange = (route) => {
        switch(route) {
            case '/home':
                return isActive('home');
            case '/explore':
                return isActive('explore');
            case '/notifications':
                return isActive('notifications');
            case '/messages':
                return isActive('messages');
            case '/business':
                return isActive('business');
            case '/creators':
                return isActive('creators');
        }
        // if(route === '/') isActive('home');
        // if(route === '/explore') isActive('explore');
        // if(route === '/notifications') isActive('notifications');
        // if(route === '/message') isActive('message');
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

                    <Link href="/upload"><a href="/upload" className={styles.upload}><img src="/icons/plus.png" alt=""/></a></Link> 
                {loggedIn ? 
                <div className={styles.links}>
                    <Link href="/home">
                        <a className={`${active === 'home' ? styles.active : ''}`}><img src="/icons/home.png" alt=""/> <span>Home</span></a>
                    </Link>
                    <Link href="/explore">
                        <a className={`${active === 'explore' ? styles.active : ''}`}><img src="https://cdn.discordapp.com/attachments/667293886468718592/734609486307786862/search.png" alt=""/> <span>Explore</span></a>
                    </Link>
                    <Link href="/notifications">
                        <a className={`${active === 'notifications' ? styles.active : ''}`}><img src="https://cdn.discordapp.com/attachments/596156721928470547/755728469312274479/notification.png" alt=""/> <span>Notifications</span></a>
                    </Link>
                    <Link href="/messages">
                        <a className={`${active === 'messages' ? styles.active : ''}`}><img src="/icons/envelope.png" alt=""/> <span>Messages</span></a>
                    </Link>
                </div> : '' }

                {loggedIn ? 
                <button className={styles.avatar} onClick={onClick}>
                     <img src={getAvatar('andre')} alt=""/>
                     <span>Click Me!</span>
                     { clicked ? <Context /> : '' }
                </button> : '' }
            </div>
            
                <div className={styles.mobile}>
                <Link href="/upload"><a href="/upload" className={styles.mobile_upload}><img src="/icons/plus.png" alt=""/></a></Link>

                    <Link href="/home">
                    <a className={`${active === 'home' ? styles.mobileActive : ''}`}><img src="icons/home.png" alt=""/> <span>Home</span></a>
                    </Link>
                    <Link href="/explore">
                        <a className={`${active === 'explore' ? styles.mobileActive : ''}`}><img src="https://cdn.discordapp.com/attachments/667293886468718592/734609486307786862/search.png" alt=""/> <span>Explore</span></a>
                    </Link>

                    <hr/>
                    
                    <Link href="/notifications">
                        <a className={`${active === 'notifications' ? styles.mobileActive : ''}`}><img src="https://cdn.discordapp.com/attachments/596156721928470547/755728469312274479/notification.png" alt=""/> <span>Notifications</span></a>
                    </Link>
                    <Link href={`/${current.username}`}>
                        <a className={`${active === `/${current.username}`} ? styles.mobile_active : ''}`}><img src={getAvatar('andre')} alt={current.name} className={styles.mobile_avatar}/> <span>Profile</span></a>
                    </Link>
                </div>
        </>
    )
}

export default Topnav;