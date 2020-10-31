import styles from '../../../styles/profile/home/following.module.css'

const Page = () => {
    return (
        <>
            <div className={styles.content}>
                <h1 className={styles.title}>People to follow</h1>

                    <a href="" className={styles.item}>
                        <img src="https://cdn.discordapp.com/avatars/583925649807245322/a_de1756eb9ca1041aefa9f4554ac91c77.gif?size=1024" alt="" className={styles.avatar}/>
                            <section>
                                <h1 className={styles.name}>Kyle</h1>
                                <h1 className={styles.username}>@Kyle</h1>
                            </section>
                                <div className={styles.lightshot}>
                                    <button><img src="icons/plus.png" alt=""/></button>
                                </div>
                    </a>

                    <a href="" className={styles.item}>
                        <img src="https://cdn.discordapp.com/avatars/583925649807245322/a_de1756eb9ca1041aefa9f4554ac91c77.gif?size=1024" alt="" className={styles.avatar}/>
                            <section>
                                <h1 className={styles.name}>Kyle</h1>
                                <h1 className={styles.username}>@Kyle</h1>
                            </section>
                                <div className={styles.lightshot}>
                                    <button><img src="icons/plus.png" alt=""/></button>
                                </div>
                    </a>

                    <a href="" className={styles.item}>
                        <img src="https://cdn.discordapp.com/avatars/583925649807245322/a_de1756eb9ca1041aefa9f4554ac91c77.gif?size=1024" alt="" className={styles.avatar}/>
                            <section>
                                <h1 className={styles.name}>Kyle</h1>
                                <h1 className={styles.username}>@Kyle</h1>
                            </section>
                                <div className={styles.lightshot}>
                                    <button><img src="icons/plus.png" alt=""/></button>
                                </div>
                    </a>

                    <a href="" className={styles.more}>Show more</a>

            </div>
        </>
    )
}

export default Page;