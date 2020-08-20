import styles from '../styles/feed.module.css'

const Topnav = () => {
    return (
        <>
            <div className={styles.feed}>
                
                <a href="" className={styles.post}>
                    <a href="" className={styles.info}>
                        <img src="https://cdn.discordapp.com/avatars/583925649807245322/ff92aefeb57f1a6ab56d28a23f614b9a.png?size=1024" alt=""/>
                            <div className={styles.info_content}>
                                <h1>Kyle</h1>
                                <p>@kyle</p>
                            </div>
                    </a>

                    <div className={styles.content}>
                        <p>Sometimes I like to go in the garden and pretend that I'm a carrot.</p>
                        <img src="https://www.alimentarium.org/en/system/files/thumbnails/image/AL012-02%20carotte.jpg" alt=""/>
                    </div>
                </a>
                
                <a href="" className={styles.post}>
                    <a href="" className={styles.info}>
                        <img src="https://cdn.discordapp.com/icons/564373498336903168/856ac7bcc6b43ae17d0c84a000cbb3e2.webp?size=1024" alt=""/>
                            <div className={styles.info_content}>
                                <h1>Pebblo</h1>
                                <p>@Pebblo</p>
                            </div>
                    </a>

                    <div className={styles.content}>
                        <p>Not long ago, the Pebblo Servers were under attack by an unknown user.</p>
                        <p>Fortunately, how the security at Pebblo is set-up, we've been able to prevent all user data from being compromised.</p>
                        <img src="https://pbs.twimg.com/media/ERCg_8wWkAAgJN8?format=png&name=small" alt=""/>
                    </div>
                </a>

            </div>
        </>
    )
}

export default Topnav;