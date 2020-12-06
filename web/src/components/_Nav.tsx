import styles from '@pebblo/css/navbar.module.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMeQuery } from '~/generated/graphql';

const Topnav = () => {
    const router = useRouter();
    const [tab, setTab] = useState();
    const query = router.query.query as string | undefined;
    const { data } = useMeQuery();

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

                <Link href="/upload"><a href="/upload" className={styles.upload}><img src="icons/plus.png" alt=""/></a></Link>
            { data?.me ?
                <div className={styles.links}>
                    <Link href="/home">
                        <a className={`${query && tab === 'home' ? styles.active : ''}`}><img src="/icons/home.png" alt=""/><span>Home</span>
                    </a>
                </Link>
                </div>
            : '' 
            }
            </div>
        </>
    )
}

export default Topnav;