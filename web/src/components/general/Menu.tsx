// @ts-ignore
import styles from '@pebblo/css/navbar.module.css';
import Router from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '@pebblo/frontend/src/hooks/useAuth';
import { useQuery } from '@apollo/client';
import { useMeQuery } from '@pebblo/frontend/src/generated/graphql';

const Topnav = () => {
    const loggedIn = useAuth();
    const { data } = useMeQuery();
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
            <div className={styles.menu_links_mobile}>
                <Link href="/"><a href="/">Home</a></Link>
                <Link href="/about"><a href="/about">Features</a></Link>
                <Link href="/explore"><a href="/explore">Explore</a></Link>
                <Link href="/resources"><a href="/resources">Resources</a></Link>
            </div>
        )
    }

    return (
        <>
            <div className={styles.menu}>
                <button className={styles.menu_button} onClick={onClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                     { clicked ? <Context /> : '' }
                </button>

                <div className={styles.menu_company}>
                    <Link href="/">
                        <a href="/"><h1>pebblo</h1></a>
                    </Link>
                </div>
                { loggedIn.me ? 
                <div className={styles.menu_user}>
                    <Link href={`/${data?.me.username}`}><a href={`/${data?.me.username}`}>
                        <img src={data?.me.avatar} alt={data?.me.username}/>
                    </a></Link>
                </div> : ''
                //  ? loggedIn : 
                //     <div className={styles.menu_buttons}>
                //         <Link href="/login"><a href="/login" className={styles.login}>Login</a></Link>
                //         <Link href="/create"><a href="/create" className={styles.create}>Get Started</a></Link>
                //     </div>
                 }
            </div>

            <div className={styles.menu_links}>
                <Link href="/"><a href="/">Home</a></Link>
                <Link href="/explore"><a href="/explore">Explore</a></Link>
                <Link href="/features/business"><a href="/features/business">Business</a></Link>
                <Link href="/features/content-creators"><a href="/features/content-creators">Content Creators</a></Link>
            </div>
        </>
    )
}

export default Topnav;