import { usePulse } from 'pulse-framework';
import core from '@pebblo/core';
import styles from '../../styles/business/navbar.module.css'
import Router from 'next/router';
import { AccountUser } from '@pebblo/core/lib/controllers/accounts/account.interfaces';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Topnav = () => {
    const [loggedIn, user] = usePulse([core.accounts.state.IS_LOGGED, core.accounts.state.CACHE]);
    const [current]: AccountUser[] = usePulse([core.accounts.collection.selectors.CURRENT]);
    const [active, isActive] = useState(undefined);

    const onRouteChange = (route) => {
        switch(route) {
            case '/business':
                return isActive('business');
            case '/business/jobs':
                return isActive('jobs');
            case '/business/reviews':
                return isActive('reviews');
        }
        console.log(active);
    };

    useEffect(() => {
        if(process.browser) onRouteChange(Router.route);
        Router.events.on('onRouterStart', onRouteChange);
    });

    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.links}>
                    <Link href="/home"><a href="/home" className={styles.links_logo}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a></Link>
                    <Link href="/business"><a href="/business">Business</a></Link>
                    <Link href="/business"><a href="/business/jobs">Search Jobs</a></Link>
                    <Link href="/business/reviews"><a href="/business/reviews">Reviews</a></Link>
                </div>
                <form className={styles.search}>
                    <input
                        type="search"
                        placeholder="Search..."
                    />
                    <input
                        type="submit"
                        value=""
                    />
                </form>
            </div>
        </>
    )
}

export default Topnav;