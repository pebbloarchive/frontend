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

                    {/* <div className={styles.about_services}>
                        <h1 className={styles.about_services_title}>What We Deliver</h1>
                    </div> */}

                </div>
            </div>
        </>
    )
}

export default Page;