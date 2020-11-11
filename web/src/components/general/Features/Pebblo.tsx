import Link from 'next/link';
import React from 'react';
import styles from '../../styles/landing.module.css'

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
                        <Link href="/create"><a href="/create">Create an account</a></Link>
                    </div>

                    <div className={styles.about_social}>
                        <img src="/images/svg/man-computer-desk.svg" alt="" className={styles.about_social_image}/>
                        <div className={styles.about_social_title}>
                            <h1>Share your stories with friends</h1>
                            <p>Create a post on your timeline, follow and interact with your friends in a simple way.</p>
                        </div>
                    </div>

                    <div className={styles.about_business}>
                        <div className={styles.about_business_title}>
                            <h1>We're bringing you simple ways to <span>grow your business</span> and <span>get your business found</span> with SEO</h1>
                            <Link href="/features/business"><a href="/features/business">Learn more</a></Link>
                        </div>
                    </div>

                    <div className={styles.about_creators}>
                        <div className={styles.about_creators_title}>
                            <h1>Helping you grow your community and pump your posts using our content creator system</h1>
                            <Link href="/features/content-creators"><a href="/features/content-creators">Learn more</a></Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Page;