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
            <div className={styles.message}>
                <Link href={`/${current.username}`}>
                    <img className={styles.message_avatar} src={current.avatar} alt={current.name} />
                </Link>

                    <div className={styles.messages_pages}>
                            <Link href="/messages">
                                <a className={`${active === `messages` ? styles.message_active : ''}`}><img src="icons/chat-bubble.png" alt=""/></a>
                            </Link>
                    </div>
            </div>
        </>
    )
}

export default Topnav;