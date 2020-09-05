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
            case '/messages/user':
                return isActive('messages');
            case '/messages/favourite':
                return isActive('favourite');
            case '/messages/bot':
                return isActive('bot');
        }
        console.log(active);
    };

    useEffect(() => {
        if(process.browser) onRouteChange(Router.route);
        Router.events.on('onRouterStart', onRouteChange);
    });

    return (
        <>
        <title>Messages</title>

        <div className={styles.contacts}>
            <div className={styles.contacts_content}>
                <form className={styles.contacts_filter}>
                    <input
                        type="search"
                        name=""
                        id=""
                        placeholder="Search user..."
                    />
                </form>

                    <div className={styles.contact_item}>
                    <section>
                        <img className={styles.contact_avatar} src="https://cdn.discordapp.com/attachments/706304868805115934/750287819754176542/giphy-downsized-large.gif" alt=""/>
                            <h1 className={styles.contact_names}>
                                <img src="../icons/verified.png" alt=""/>
                                <span>@kyle</span>
                            </h1>
                        <span className={styles.contact_timeStamp}>5 mins</span>
                        </section>

                        <div className={styles.contact_status}>
                            <span className={styles.contact_status_online}></span>
                        </div>
                    </div>

            </div>
        </div>
        
            <div className={styles.message}>
                <Link href={`/${current.username}`}>
                    <img className={styles.message_avatar} src={current.avatar} alt={current.name} />
                </Link>

                    <div className={styles.messages_pages}>
                            <Link href="/messages">
                                <a className={`${active === `messages` ? styles.message_active : ''}`}><img src="../icons/chat-bubble.png" alt=""/></a>
                            </Link>
                            <Link href="/messages/favourite">
                                <a className={`${active === `favourite` ? styles.message_active : ''}`}><img src="../icons/chat-heart.png" alt=""/></a>
                            </Link>
                            <Link href="/messages/bot">
                                <a className={`${active === `bot` ? styles.message_active : ''}`}><img src="../icons/chat-bot.png" alt=""/></a>
                            </Link>
                    </div>
            </div>
        </>
    )
}

export default Topnav;