import styles from '../../styles/business/navbar.module.css'
import Router from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Topnav = () => {
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
            </div>
        </>
    )
}

export default Topnav;