import Link from 'next/link';
import React from 'react';
import styles from '../../../styles/profile/home/feed.module.css';

const Page = () => {
    return (
        <>
            <div className={styles.feed}>

                <div className={styles.post}>

                    <div className={styles.heading}>
                        <div className={styles.heading_author}>
                            <img src="https://cdn.discordapp.com/avatars/583925649807245322/b710ec9a69fefe569b4f856af0d93941.png?size=1024" alt="" className={styles.heading_author_avatar}/>
                                <section>
                                    <h1 className={styles.heading_author_name}>Kyle</h1>
                                    <p className={styles.heading_author_username}>@Kyle</p>
                                </section>
                        </div>
                        <button className={styles.heading_more}>
                            <span className={styles.heading_ellipsis}></span>
                        </button>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.caption}>
                            <p>Howdy, this is my first post!</p>
                        </div>
                        {/* <div className={styles.media}>
                            <img src="https://cdn.discordapp.com/avatars/583925649807245322/b710ec9a69fefe569b4f856af0d93941.png?size=1024" alt=""/>
                        </div> */}
                    </div>

                    <div className={styles.interaction}>
                        <Link href=""><a href="">
                            <img src="/icons/comment.png" alt=""/>
                            <span>25 Comments</span>
                        </a></Link>
                        <button>
                            <img src="/icons/heart.png" alt=""/>
                            <span>120k Likes</span>
                        </button>
                        <button>
                            <img src="/icons/share.png" alt=""/>
                            <span>231 Shares</span>
                        </button>
                    </div>
                    
                </div>

                <div className={styles.post}>

                    <div className={styles.heading}>
                        <div className={styles.heading_author}>
                            <img src="https://cdn.discordapp.com/icons/564373498336903168/eaca6d5ba992b22f378c00104f6ced66.webp?size=1024" alt="" className={styles.heading_author_avatar}/>
                                <section>
                                    <h1 className={styles.heading_author_name}>Pebblo</h1>
                                    <p className={styles.heading_author_username}>@Pebblo</p>
                                </section>
                        </div>
                        <button className={styles.heading_more}>
                            <span className={styles.heading_ellipsis}></span>
                        </button>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.caption}>
                            <p>Why’s it so dusty here... oh that’s why, we’ve not been posting in a while!</p>
                            <p>We have a progress update 🎉 Our robotic helpers are working extremely hard on Pebblo and ensuring that when we’re live by our deadline to ensure everyone can get a bit of the Pebblo action!</p>
                        </div>
                        {/* <div className={styles.media}>
                            <img src="https://cdn.discordapp.com/avatars/583925649807245322/b710ec9a69fefe569b4f856af0d93941.png?size=1024" alt=""/>
                        </div> */}
                    </div>

                    <div className={styles.interaction}>
                        <Link href=""><a href="">
                            <img src="/icons/comment.png" alt=""/>
                            <span>58k Comments</span>
                        </a></Link>
                        <button>
                            <img src="/icons/heart.png" alt=""/>
                            <span>429k Likes</span>
                        </button>
                        <button>
                            <img src="/icons/share.png" alt=""/>
                            <span>723 Shares</span>
                        </button>
                    </div>
                    
                </div>

            </div>

        </>
    )
}

export default Page;