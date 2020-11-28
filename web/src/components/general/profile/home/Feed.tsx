import Link from 'next/link';
import React from 'react';
import styles from '../../../styles/profile/home/feed.module.css';
import { getAvatar } from '../../../utils';

const Page = () => {
    return (

        // https://cdn.dribbble.com/users/686119/screenshots/7078221/media/82ce6a365b94f26ba2f3d5174306d4ef.png
        <>
            <div className={styles.feed}>

                <div className={styles.post}>
                <span className={styles.timeStamp}>Just Now</span>
                    <div className={styles.heading}>
                        <Link href=""><a href="" className={styles.heading_author}>
                            <img src={getAvatar('kyle')} alt="" className={styles.heading_author_avatar}/>
                                <section>
                                    <h1 className={styles.heading_author_name}><img src="https://cdn.discordapp.com/emojis/747011360524599318.png?v=1" alt="" className={styles.heading_author_badge}/> kyle</h1>
                                    <p className={styles.heading_author_username}>@kyle</p>
                                </section>
                        </a></Link>
                        <button className={styles.heading_more}>
                            <span className={styles.heading_ellipsis}></span>
                        </button>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.caption}>
                            <p>
                                Like my <a href="">#NewProfile</a> for Pebblo?
                            </p>
                        </div>
                        <div className={styles.media}>
                            <img src="https://i.gifer.com/2pJC.gif" alt=""/>
                        </div>
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
                        <img src={getAvatar('andre')} alt="" className={styles.post_add_comment_avatar}/>
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
                                    <img src="/icons/gallery.png" alt=""/>
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

            </div>

        </>
    )
}

export default Page;