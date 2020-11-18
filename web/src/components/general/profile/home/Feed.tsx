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

                    <div className={styles.heading}>
                        <Link href=""><a href="" className={styles.heading_author}>
                            <img src={getAvatar('pebblo')} alt="" className={styles.heading_author_avatar}/>
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
                            <p>hello</p>
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
                                    <img src="/icons/image.png" alt=""/>
                                    <input type="file" name="" id=""/>
                                </label>
                            </div>
                        </form>
                    </label>

                    <div className={styles.post_settings}>
                        <hr/>
                        <Link href=""><a href="">
                            <span>test</span>
                        </a></Link>
                        <button type="submit">
                            <span>test</span>
                        </button>
                    </div>
                    
                </div>

            </div>

        </>
    )
}

export default Page;