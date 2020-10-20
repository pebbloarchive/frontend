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
                <Link href={`/${current.username}`}><a href={`/${current.username}`}>Your Profile</a></Link>
                <Link href="/upload"><a href="/upload">Create a Post</a></Link>
                <hr/>
                <Link href="/home"><a href="/home">Achievements</a></Link>
                <Link href="/explore"><a href="/explore">Insights</a></Link>
                <Link href="/business"><a href="/business">Businesses</a></Link>
                <Link href="/creators"><a href="/creators">Content Creators</a></Link>
                <hr/>
                <Link href="/settings"><a href="/settings">Settings</a></Link>
                <Link href="/logout"><a href="/logout" className={styles.profile_dropup_logout}>Logout</a></Link>
            </section>
        )
    }

    const onRouteChange = (route) => {
        switch(route) {
            case '/store':
                return isActive('store');
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
                        <a className={`${active === 'messages' ? styles.active : ''}`}><img src="https://cdn.discordapp.com/attachments/596156721928470547/755729094720880640/envelope.png" alt=""/> <span>Messages</span></a>
                    </Link>

                        {/* <hr/>

                    <Link href="/business">
                        <a className={`${active === 'business' ? styles.active : ''}`}><img src="/icons/briefcase.png" alt=""/></a>
                    </Link>
                    <Link href="/creators">
                        <a className={`${active === 'creators' ? styles.active : ''}`}><img src="/icons/video-gallery.png" alt=""/></a>
                    </Link> */}
                </div> : '' }

                {loggedIn ? 
                <button className={styles.avatar} onClick={onClick}>
                     <img src={current.avatar} alt=""/>
                     <span>Click Me</span>
                     { clicked ? <Context /> : '' }
                </button> : '' }
            </div>

            {/* {loggedIn ?  */}
                <div className={styles.mobile}>
                    <Link href="/home">
                    <a className={`${active === 'home' ? styles.mobileActive : ''}`}><img src="icons/home.png" alt=""/> <span>Home</span></a>
                    </Link>
                    <Link href="/explore">
                        <a className={`${active === 'explore' ? styles.mobileActive : ''}`}><img src="https://cdn.discordapp.com/attachments/667293886468718592/734609486307786862/search.png" alt=""/> <span>Explore</span></a>
                    </Link>
                    <Link href="/notifications">
                        <a className={`${active === 'notifications' ? styles.mobileActive : ''}`}><img src="https://cdn.discordapp.com/attachments/596156721928470547/755728469312274479/notification.png" alt=""/> <span>Notifications</span></a>
                    </Link>
                    <Link href={`/${current.username}`}>
                        <a className={`${active === `/${current.username}`} ? styles.mobile_active : ''}`}><img src={current.avatar} alt={current.name}/> <span>Profile</span></a>
                    </Link>
                </div>

                {/* { loggedIn ? 
                '' :  
                <div className={styles.notLogged}>
                    <Link href="/create"><a href="/create" className={styles.notLogged_signup}>Sign up</a></Link>
                    <span>or</span>
                    <Link href="/login"><a href="/login" className={styles.notLogged_login}>Log in</a></Link>
                </div>
                } */}
        </>
    )
}

export default Topnav;