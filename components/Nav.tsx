import styles from '@pebblo/styles/navbar.module.css';
import Router from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { me } from '@pebblo/frontend/graphql/queries/me';
import { useQuery } from '@apollo/client';
import { useAuth } from './hooks/useAuth';

const Topnav = () => {
    const loggedIn = useAuth();
    const { data } = useQuery(me);
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
                <Link href={`/${data?.me.username}`}><a href={`/${data?.me.username}`}>Your Profile</a></Link>
                {/* <Link href="/resources"><a href="/resources">Achievements</a></Link>
                <Link href="/resources"><a href="/resources">Insights</a></Link>
                <hr/>
                <Link href="/features/business"><a href="/features/business">Business</a></Link>
                <Link href="/features/content-creators"><a href="/features/content-creators">Content Creators</a></Link> */}
                <hr/>
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
                {loggedIn.me ? 
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

                {loggedIn.me ? 
                <button className={styles.avatar} onClick={onClick}>
                     <img src={data?.me.avatar} alt=""/>
                     <span>Click Me!</span>
                     { clicked ? <Context /> : '' }
                </button> : '' }
            </div>

            {/* {loggedIn ?  */}
                {/* <div className={styles.mobile}>
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
                    <Link href={`/${data?.me.username}`}>
                        <a className={`${active === `/${data?.me.username}`} ? styles.mobile_active : ''}`}><img src={data?.me.avatar} alt={data?.me.name} className={styles.mobile_avatar}/> <span>Profile</span></a>
                    </Link>
                </div> */}
        </>
    )
}

export default Topnav;