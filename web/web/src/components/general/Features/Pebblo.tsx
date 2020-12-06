import Link from 'next/link';
import React from 'react';
import styles from '@pebblo/css/landing.module.css'

const Page = () => {
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
                        <Link href="/create"><a href="/create">Get Started</a></Link>
                    </div>

                    <div className={styles.about_left}>
                        <img src="/images/svg/man-computer-desk.svg" alt="" className={styles.about_left_image}/>
                        <div className={styles.about_left_title}>
                            <h1>Share your stories with friends</h1>
                            <p>Create a post on your timeline, follow and interact with your friends in a simple way.</p>
                            <Link href="/resources"><a href="/resources">How it works</a></Link>
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
                            <h1>Grow your community</h1>
                            <p>We are going to be giving <strong>Content Creators</strong> lots of features to help them grow.</p>
                            <Link href="/features/business"><a href="/features/business">Learn more</a></Link>
                        </div>
                    </div>

                                        <div className={styles.about_create}></div>

                </div>
            </div>
        </>
    )
}

export default Page;