import { usePulse } from 'pulse-framework';
import core from '@pebblo/core';
import styles from '../styles/navbar.module.css'
import Router from 'next/router';
import { AccountUser } from '@pebblo/core/lib/controllers/accounts/account.interfaces';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Page = () => {
    const [loggedIn, user] = usePulse([core.accounts.state.IS_LOGGED, core.accounts.state.CACHE]);
    const [current]: AccountUser[] = usePulse([core.accounts.collection.selectors.CURRENT]);
    const [active, isActive] = useState(undefined);

    const onRouteChange = (route) => {
        switch(route) {
            case  '/dash/summary':
                return isActive('home');
            case '/dash/accounts':
                return isActive('accounts');
                case '/dash/tickets':
                    return isActive('tickets');
            // case '/messages':
            //     return isActive('messages');
        }
        console.log(active);
    };

    useEffect(() => {
        if(process.browser) onRouteChange(Router.route);
        Router.events.on('onRouterStart', onRouteChange);
    });
    
    return (
        <>
            <div className={styles.dash}>
                <Link href="/dash"><a href="/dash" className={styles.dash_company}>
                    <div className={styles.dash_logo}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <h1>Peb<span>Dash</span></h1>
                </a></Link>
                <div className={styles.dash_pages}>
                    <Link href="/dash/summary">
                        <a className={`${active === 'home' ? styles.dash_active : ''}`}><span>Summary</span></a>
                    </Link>
                    <Link href="/dash/accounts">
                        <a className={`${active === 'accounts' ? styles.dash_active : ''}`}><span>Accounts</span></a>
                    </Link>
                    <Link href="/dash/tickets">
                        <a className={`${active === 'tickets' ? styles.dash_active : ''}`}><span>Tickets</span></a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Page;