import Link from 'next/link';
import React from 'react';
import styles from '../../../styles/profile/profile.module.css';
import { getAvatar } from '../../../utils';

const Single = () => {
    return (
        <>
            <Link href="/kyle/[post]"><a href="/kyle/[post]" className={styles.overlay}></a></Link>
            <div className={styles.overlay_content}>
                <div className={styles.overlay_title}>
                    <h1>Likes</h1>
                    <span>1</span>
                </div>

                <div className={styles.overlay_likes}>
                    <div className={styles.overlay_likes_item}>
                        <img className={styles.overlay_likes_avatar} src={getAvatar('andre')} alt=""/>
                        <section className={styles.overlay_likes_user}>
                            <h1 className={styles.overlay_likes_name}>andre</h1>
                            <p className={styles.overlay_likes_username}>@andre</p>
                        </section>
                        <div className={styles.overlay_likes_interaction}>
                            <button className={styles.overlay_likes_interaction_dislike}>
                                <img src="/icons/heart-dislike.png" alt=""/>
                            </button>
                            <Link href=""><a href="" className={styles.overlay_likes_interaction_profile}>
                                <img src="/icons/arrows/chevron-right.png" alt=""/>
                            </a></Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Single;