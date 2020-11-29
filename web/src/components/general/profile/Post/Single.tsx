import Link from 'next/link';
import React from 'react';
import styles from '../../../styles/profile/profile.module.css';
import { getAvatar } from '../../../utils';

const Single = () => {
    return (
        <>
            <div className={styles.single_content}>

                <div className={styles.single}>
                <div className={styles.single_author}>
                    <img className={styles.single_author_avatar} src={getAvatar('kyle')} alt=""/>
                    <section>
                        <h1 className={styles.single_author_name}>Kyle</h1>
                        <p className={styles.single_author_username}>@kyle</p>
                    </section>
                </div>
                <div className={styles.single_caption}>
                    <p>Like my <a href="">#NewProfile</a> for Pebblo?</p>
                </div>
                <div className={styles.single_media}>
                    <img src="https://i.gifer.com/2pJC.gif" alt=""/>
                </div>
                </div>

                <div className={styles.right}>
                <div className={styles.card}>

                    <div className={styles.card_content}>
                        <div className={styles.single_interaction}>
                        <div className={styles.filter}>
                            <Link href="/kyle/[post]/comments"><a href="/kyle/[post]/comments">
                                <img src="/icons/comment.png" alt=""/>
                                Comments
                                <span>428k</span>
                            </a></Link>
                            <Link href="/kyle/[post]/likes"><a href="/kyle/[post]/likes">
                                <img src="/icons/heart.png" alt=""/>
                                Likes
                                <span>679k</span>
                            </a></Link>
                            <button>
                                <img src="/icons/share.png" alt=""/>
                                Shares <span>98k</span>
                            </button>
                            <br/>
                            <button>
                                <img src="/icons/flag.png" alt=""/>
                                Report Post
                            </button>
                            <br/>
                            <Link href="/[post]/settings"><a href="/[post]/settings">
                                <img src="/icons/cog.png" alt=""/>
                                Post Settings
                            </a></Link>
                        </div>
                        </div>
                    </div>

                </div>
                </div>
            </div>
        </>
    )
}

export default Single;