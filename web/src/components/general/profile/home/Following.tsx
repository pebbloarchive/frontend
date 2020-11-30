import Link from 'next/link';
import React from 'react';
import styles from '../../../styles/profile/profile.module.css';
import { getAvatar } from '../../../utils';

const Single = () => {
    return (
        <>
            <Link href="/kyle"><a href="/kyle" className={styles.overlay}></a></Link>
            <div className={styles.overlay_content}>
                <div className={styles.overlay_title}>
                    <h1>Following</h1>
                    <span>0</span>
                </div>

                <div className={styles.overlay_likes}>
                    <div className={styles.overlay_profile_item}>
                        <img className={styles.overlay_profile_avatar} src={getAvatar('andre')} alt=""/>
                        <section className={styles.overlay_profile_user}>
                            <h1 className={styles.overlay_profile_name}>andre</h1>
                            <p className={styles.overlay_profile_username}>@andre</p>
                        </section>
                        <div className={styles.overlay_profile_interaction}>
                            <button className={styles.overlay_profile_interaction_dislike}>
                                <img src="/icons/invisible.png" alt=""/>
                            </button>
                            <Link href=""><a href="" className={styles.overlay_profile_interaction_profile}>
                                <img src="/icons/arrows/chevron-right.png" alt=""/>
                            </a></Link>
                        </div>
                    </div>
                    <div className={styles.overlay_profile_item}>
                        <img className={styles.overlay_profile_avatar} src={getAvatar('pebblo')} alt=""/>
                        <section className={styles.overlay_profile_user}>
                            <h1 className={styles.overlay_profile_name}>Pebblo</h1>
                            <p className={styles.overlay_profile_username}>@Pebblo</p>
                        </section>
                        <div className={styles.overlay_profile_interaction}>
                            <button className={styles.overlay_profile_interaction_dislike}>
                                <img src="/icons/invisible.png" alt=""/>
                            </button>
                            <Link href=""><a href="" className={styles.overlay_profile_interaction_profile}>
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