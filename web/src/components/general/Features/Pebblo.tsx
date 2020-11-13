import Link from 'next/link';
import React from 'react';
import styles from '../../styles/landing.module.css'
import { usePulse } from 'pulse-framework';
import core from '@pebblo/core';

const Page = () => {
    const [loggedIn, user] = usePulse([core.accounts.state.IS_LOGGED, core.accounts.state.CACHE]);
    const [current] = usePulse([core.accounts.collection.selectors.CURRENT]);
    return (
        <>
            <div className={styles.features}>
                <div className={styles.about}>

                    <div className={styles.about_landing}>
                        <h1 className={styles.about_title}>
                            <strong>Since October 2019 <br/>
                            we have been creating <br/></strong>
                            <span>Pebblo just for you</span>
                        </h1>
                        <Link href="/explore"><a href="/explore">Explore</a></Link>
                    </div>

                    <div className={styles.about_left}>
                        <img src="/images/svg/man-computer-desk.svg" alt="" className={styles.about_left_image}/>
                        <div className={styles.about_left_title}>
                            <h1>Share your stories with friends</h1>
                            <p>Create a post on your timeline, follow and interact with your friends in a simple way.</p>
                        </div>
                    </div>

                    <div className={styles.about_right}>
                        <img src="/images/svg/man-office.png" alt="" className={styles.about_right_image}/>
                        <div className={styles.about_right_title}>
                            <h1>Help your business grow</h1>
                            <p>Grow your business by using our custom SEO &amp; Marketing to help with your business.</p>
                            <Link href="/features/business"><a href="/features/business">Learn more</a></Link>
                        </div>
                    </div>

                    <div className={styles.about_left}>
                        <img src="/images/svg/man-warehouse.png" alt="" className={styles.about_left_image}/>
                        <div className={styles.about_left_title}>
                            <h1>Coming Soon!</h1>
                            <p>Pebblo is always up to something behind the scenes, watch this space for our new feature!</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Page;