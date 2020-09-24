import { usePulse } from 'pulse-framework';
import core from '@pebblo/core';
import styles from '../styles/messages/navbar.module.css'
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
        <div className={styles.empty}>
            <div className={styles.empty_center}>
                <section>
                    <span></span>
                    <h1>You're all alone</h1>
                    <p>Message a user on your contact list.</p>
                </section>
            </div>
        </div>

            <div className={styles.navbar}>
                <div className={styles.content}>

                    <form action="" className={styles.search}>
                        <input
                            type="search"
                            // value=""
                            placeholder="Search for user"
                        />
                        <input
                            type="submit"
                            value="GO"
                        />
                    </form>
                    <div className={styles.list}>
                        <Link href="/messages/user"><a href="" className={styles.item}>
                            <a href="/"><img className={styles.item_avatar} src="https://cdn.discordapp.com/avatars/583925649807245322/a_9c3215b6241e826bc16cfd48a02d9f21.gif?size=1024" alt="Name(fix later)"/></a>
                            <section className={styles.item_content}>
                                <h1 className={styles.item_username}>
                                    @kyle
                                    {/* <span className={styles.item_newMSG}>1</span> */}
                                </h1>
                                <p className={styles.item_lastMSG}>
                                    {/* if you were the last to message include <span className={styles.item_lastMSG_me}>You: </span> */}
                                    <span className={styles.item_lastMSG_me}>You: </span>
                                    Hey
                                </p>
                            </section>
                        </a></Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Topnav;