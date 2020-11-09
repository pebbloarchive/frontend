import Link from 'next/link';
import React from 'react';
import styles from '../../../styles/profile/home/content.module.css'

const Page = () => {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.box}>

                    <div className={styles.title}>
                        <h1 className={styles.title_text}>Recently Posted</h1>
                    </div>

                    <div className={styles.following_list}>
                        <Link href=""><a href="" className={styles.following_item}>
                            <img src="https://th.bing.com/th/id/OIP.EYdWIm7GoYTQSGiaqXrOqQHaHa?w=164&h=175&c=7&o=5&pid=1.7" alt="" className={styles.following_item_avatar}/>
                                <section className={styles.following_item_tooltip}>
                                    <span>
                                        <i>@UponAnonymous</i>
                                    </span>
                                </section>
                        </a></Link>
                        <Link href=""><a href="" className={styles.following_item}>
                            <img src="https://th.bing.com/th/id/OIP.-rpUmLMWcHHck-IvPOHiKgAAAA?w=166&h=175&c=7&o=5&pid=1.7" alt="" className={styles.following_item_avatar}/>
                                <section className={styles.following_item_tooltip}>
                                    <span>
                                        <i>@Kyle</i>
                                    </span>
                                </section>
                        </a></Link>
                    </div>



                    <div className={styles.title}>
                        <h1 className={styles.title_text}>Feed</h1>
                            <div className={styles.title_options}>
                                <Link href=""><a href="" className={styles.title_options_active}>Latest</a></Link>
                                <Link href=""><a href="">Popular</a></Link>
                            </div>
                    </div>

                    <div className={styles.kyle}>
                        <span>REPLACE THIS <strong>DIVIDER <code>(styles.kyle)</code></strong> AND REPLACE IT WITH CONTENT OH WHAT <strong>LOGGED ACCOUNT FOLLOWS</strong></span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Page;