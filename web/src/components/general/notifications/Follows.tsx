import styles from '@pebblo/css/notifications.module.css'

const Page = () => {
    return (
        <>
            <div className={styles.notifications}>
                <div className={styles.content}>
                    <div className={styles.new}>
                        <h1 className={styles.notifications_unread}><span>Today</span></h1>
                            <div className={styles.notifications_item}>
                                <img src="https://th.bing.com/th/id/OIP.EYdWIm7GoYTQSGiaqXrOqQHaHa?w=164&h=175&c=7&o=5&pid=1.7" alt="" className={styles.notifications_item_avatar}/>
                                <div className={styles.notifications_item_names}>
                                    <h1>Kye</h1>
                                    <p>@UponAnonymous</p>
                                </div>
                                <div className={styles.notifications_item_action}>
                                    <p>
                                        <span>&lt; 1 min ago</span>
                                        Followed you
                                    </p>
                                </div>
                            </div>
                            <div className={styles.notifications_item}>
                                <img src="https://th.bing.com/th/id/OIP.EYdWIm7GoYTQSGiaqXrOqQHaHa?w=164&h=175&c=7&o=5&pid=1.7" alt="" className={styles.notifications_item_avatar}/>
                                <div className={styles.notifications_item_names}>
                                    <h1>Kye</h1>
                                    <p>@UponAnonymous</p>
                                </div>
                                <div className={styles.notifications_item_action}>
                                    <p>
                                        <span>1 min ago</span>
                                        Liked <a href="">your post</a>
                                    </p>
                                </div>
                            </div>
                            <div className={styles.notifications_item}>
                                <img src="https://th.bing.com/th/id/OIP.EYdWIm7GoYTQSGiaqXrOqQHaHa?w=164&h=175&c=7&o=5&pid=1.7" alt="" className={styles.notifications_item_avatar}/>
                                <div className={styles.notifications_item_names}>
                                    <h1>Kye</h1>
                                    <p>@UponAnonymous</p>
                                </div>
                                <div className={styles.notifications_item_action}>
                                    <p>
                                        <span>5 min ago</span>
                                        <a href="">Mentioned</a> you in a post
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h1 className={styles.notifications_date}>Older</h1>
                            <div className={styles.notifications_item}>
                                <img src="https://th.bing.com/th/id/OIP.-rpUmLMWcHHck-IvPOHiKgAAAA?w=166&h=175&c=7&o=5&pid=1.7" alt="" className={styles.notifications_item_avatar}/>
                                <div className={styles.notifications_item_names}>
                                    <h1>Kyle</h1>
                                    <p>@Kyle</p>
                                </div>
                                <div className={styles.notifications_item_action}>
                                    <p>
                                        <span>5 min ago</span>
                                        Followed you
                                    </p>
                                </div>
                            </div>
                </div>
            </div>
        </>
    )
}

export default Page;