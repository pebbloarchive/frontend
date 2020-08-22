import styles from '../styles/feed.module.css'

const Topnav = () => {
    return (
        <>
            <div className={styles.feed}>

                <div className={styles.post}>
                    <div className={styles.user}>
                        <img src="https://cdn.discordapp.com/avatars/641349391210512394/a_91280ea889eed83eb8a4620e5c2e0efe.png?size=1024" alt=""/>
                        <div className={styles.names}>
                            <h1><img src="https://cdn.discordapp.com/attachments/596156721928470547/745873552384983050/unknown.png" alt=""/> kissmemore</h1>
                            <p>@Natasha</p>
                        </div>
                    </div>
                    <div className={styles.caption}>
                        <div className={styles.content}>
                            <p>👀🐽👀</p>
                            <img src="https://pbs.twimg.com/media/Ef8GeZGXkAA7vfs?format=jpg&name=large" alt=""/>
                        </div>
                    </div>
                    <div className={styles.interactions}>
                        <a href=""><img src="https://cdn.discordapp.com/attachments/596156721928470547/746527468898484344/comment.png" alt=""/>
                        <span>248</span></a>
                        <a href=""><img src="https://cdn.discordapp.com/attachments/596156721928470547/746527493787353148/heart.png" alt=""/>
                        <span>4.7k</span></a>
                        <a href=""><img src="https://cdn.discordapp.com/attachments/596156721928470547/746527492461822093/share.png" alt=""/>
                        <span>482</span></a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Topnav;