import Link from 'next/link';
import React from 'react';
import styles from "../../../../css/profile/home/feed.module.css";
import { PostSnippetFragment } from '../../../../generated/graphql';
import { useConvertUnixTimestamp } from '../../../hooks/useConvertUnixTimestamp';

interface PostProps {
    post: PostSnippetFragment;
}

export const Feed: React.FC<PostProps> = ({ post }) => {
    const { minutes, hours, date } = useConvertUnixTimestamp(post.created_at);
    
    return (

        // https://cdn.dribbble.com/users/686119/screenshots/7078221/media/82ce6a365b94f26ba2f3d5174306d4ef.png
        <>
            <div className={styles.feed}>

                <div className={styles.post}>
                <span className={styles.timeStamp}>{minutes > 60
                ? `${hours} hour${hours !== 1 ? "s" : ""}`
                : `${minutes} minute${minutes !== 1 ? "s" : ""}`}</span>
                    <div className={styles.heading}>
                        <Link href=""><a href="" className={styles.heading_author}>
                            <img src={post.creator.avatar} alt="" className={styles.heading_author_avatar}/>
                                <section>
                                    <h1 className={styles.heading_author_name}>{ post.creator.verified ? (<img src="/icons/verified.png" alt="" className={styles.heading_author_badge}/>) : '' }{post.creator.name}</h1>
                                    <p className={styles.heading_author_username}>@{post.creator.username}</p>
                                </section>
                        </a></Link>
                        <button className={styles.heading_more}>
                            <span className={styles.heading_ellipsis}></span>
                        </button>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.caption}>
                            <p>{post.content}</p>
                        </div>
                        {/* <div className={styles.media}>
                            <img src="https://cdn.discordapp.com/attachments/596156721928470547/778419422738120715/apps.17555.14449609212792458.454eef9f-a0a5-4522-b519-e81aa7b40d6e.jpg" alt=""/>
                        </div> */}
                    </div>

                    <div className={styles.interaction}>
                        <Link href=""><a href="">
                            <img src="/icons/comment.png" alt=""/>
                            <span>{post.subs.length}</span>
                        </a></Link>
                        <button>
                            <img src="/icons/heart.png" alt=""/>
                            <span>{post.likes.length}</span>
                        </button>
                        <button>
                            <img src="/icons/share.png" alt=""/>
                            <span>{post.shares.length}</span>
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

            </div>

        </>
    )
}
