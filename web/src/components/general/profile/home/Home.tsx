import Link from 'next/link';
import React from 'react';
import styles from '../../../../css/profile/home/feed.module.css';

const Page = () => {
    return (

        // https://cdn.dribbble.com/users/686119/screenshots/7078221/media/82ce6a365b94f26ba2f3d5174306d4ef.png
        <>
            <div className={styles.feed}>

                <div className={styles.post}>
                <span className={styles.timeStamp}>Just Now</span>
                    <div className={styles.heading}>
                        <Link href=""><a href="" className={styles.heading_author}>
                            <img src={''} alt="" className={styles.heading_author_avatar}/>
                                <section>
                                    <h1 className={styles.heading_author_name}><img src="https://cdn.discordapp.com/emojis/747011360524599318.png?v=1" alt="" className={styles.heading_author_badge}/>Pebblo</h1>
                                    <p className={styles.heading_author_username}>@Pebblo</p>
                                </section>
                        </a></Link>
                        <button className={styles.heading_more}>
                            <span className={styles.heading_ellipsis}></span>
                        </button>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.caption}>
                            <p>Our Public BETA is now live! Create your first account on Pebblo!</p>
                            <p>Share your story with the world, create a post on your timeline, follow and interact with your friends in a simple way by using Pebblo.</p>
                        </div>
                        {/* <div className={styles.media}>
                            <img src="https://cdn.discordapp.com/attachments/596156721928470547/778419422738120715/apps.17555.14449609212792458.454eef9f-a0a5-4522-b519-e81aa7b40d6e.jpg" alt=""/>
                        </div> */}
                    </div>

                    <div className={styles.interaction}>
                        <Link href=""><a href="">
                            <img src="/icons/comment.png" alt=""/>
                            <span>0</span>
                        </a></Link>
                        <button>
                            <img src="/icons/heart.png" alt=""/>
                            <span>0</span>
                        </button>
                        <button>
                            <img src="/icons/share.png" alt=""/>
                            <span>0</span>
                        </button>
                    </div>

                    <label className={styles.post_add_comment}>
                        <img src={''} alt="" className={styles.post_add_comment_avatar}/>
                        <form className={styles.post_add_comment_form}>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Write a comment..."
                            />
                            <div className={styles.post_add_comment_interaction}>
                                <label>
                                    <img src="/icons/blushing.png" alt=""/>
                                </label>
                                <label>
                                    <img src="/icons/image.png" alt=""/>
                                    <input type="file" name="" id=""/>
                                </label>
                            </div>
                        </form>
                    </label>
                    <div className={styles.post_buttons}>
                        
                        <Link href=""><a href="" className={styles.singlePost_link}>
                            <img src="/icons/menus/ellipsis.png" alt=""/>
                        </a></Link>

                    </div>
                </div>

                <div className={styles.left}>
                    <div className={styles.card}>
                        <div className={styles.card_title}>Potential Friends</div>
                        <div className={styles.card_content}>

                            <Link href=""><a href="" className={styles.card_profile}>
                                <img src="https://i.redd.it/w0lmb8i7odo51.png" className={styles.card_avatar}/>
                                <section className={styles.card_user}>
                                    <h1 className={styles.card_name}>
                                        <img src="https://cdn.discordapp.com/emojis/747011360524599318.png?v=1" alt="" className={styles.card_badge}/>
                                        Among Us</h1>
                                    <h1 className={styles.card_username}>@AmongUs</h1>
                                </section>
                            </a></Link>

                            <Link href=""><a href="" className={styles.card_profile}>
                                <img src="https://i.redd.it/w0lmb8i7odo51.png" className={styles.card_avatar}/>
                                <section className={styles.card_user}>
                                    <h1 className={styles.card_name}>
                                        <img src="https://cdn.discordapp.com/emojis/747011360524599318.png?v=1" alt="" className={styles.card_badge}/>
                                        Among Us</h1>
                                    <h1 className={styles.card_username}>@AmongUs</h1>
                                </section>
                            </a></Link>

                            <Link href=""><a href="" className={styles.card_profile}>
                                <img src="https://i.redd.it/w0lmb8i7odo51.png" className={styles.card_avatar}/>
                                <section className={styles.card_user}>
                                    <h1 className={styles.card_name}>
                                        <img src="https://cdn.discordapp.com/emojis/747011360524599318.png?v=1" alt="" className={styles.card_badge}/>
                                        Among Us</h1>
                                    <h1 className={styles.card_username}>@AmongUs</h1>
                                </section>
                            </a></Link>

                        </div>
                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.card}>
                        <div className={styles.card_title}>Latest News</div>
                        <div className={styles.card_content}>

                            <Link href=""><a href="" className={styles.card_news}>
                                <h1 className={styles.card_news_title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                            </a></Link>

                            <Link href=""><a href="" className={styles.card_news}>
                                <h1 className={styles.card_news_title}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi culpa cumque consequuntur reiciendis!</h1>
                            </a></Link>

                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Page;