import Link from 'next/link';
import React from 'react';
import styles from '@pebblo/css/business/content.module.css'

const Page = () => {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.blog}>

                        <div className={styles.recent}>
                            <div className={styles.recent_wallpaper}></div>
                            <div className={styles.recent_content}>
                            </div>
                        </div>

                </div>
            </div>
        </>
    )
}

export default Page;