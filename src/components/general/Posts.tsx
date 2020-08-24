import styles from '../styles/feed.module.css'

const Page = () => {
    return (
        <>
            <div className={styles.single}>
                
                <div className={styles.single_post}>
                    <div className={styles.single_user}>
                        <img src="https://cdn.discordapp.com/avatars/215302985826304010/5e65d38cf852733f000359a5713231a2.png?size=1024" alt=""/>
                            <section>
                                <h1 className={styles.single_author}>Andre Lewis</h1>
                                <p className={styles.single_username}>@andre</p>
                            </section>
                    </div>
                        <div className={styles.single_content}>
                            <p>Working on <a href="">@Pebblo</a> offline</p>
                                <img src="https://pbs.twimg.com/media/EfSj6cfUcAAL8vy?format=jpg&name=small" alt=""/>
                        </div>
                </div>




                <div className={styles.comments}>
                    <h1 className={styles.comments_title}>Comments</h1>
                </div>

            </div>
        </>
    )
}

export default Page;