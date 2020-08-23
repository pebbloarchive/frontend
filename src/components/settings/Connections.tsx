import styles from '../styles/settings.module.css'

const Page = () => {
    return (
        <>
            <div className={styles.content}>
                <h1 className={styles.title}>Connections</h1>

                    <div className={styles.connections_list}>
                        <button>
                            <img src="https://cdn.discordapp.com/attachments/596156721928470547/746995343429730354/discord.png" alt=""/>
                        </button>
                        <button>
                            <img src="https://cdn.discordapp.com/attachments/596156721928470547/746995519515262996/twitch.png" alt=""/>
                        </button>
                        <button>
                            <img src="https://cdn.discordapp.com/attachments/596156721928470547/746995816027389982/spotify.png" alt=""/>
                        </button>
                    </div>

                    <hr/>
                    <div className={styles.connections_items}>
                        <h1 className={styles.title}>Active</h1>
                        <button className={styles.connections_discord}>
                            <input type="text" name="" id="" value="andre#0069"/>
                        </button>
                        <button className={styles.connections_twitch}>
                            <input type="text" name="" id="" value="andre"/>
                        </button>
                        <button className={styles.connections_spotify}>
                            <input type="text" name="" id="" value="rocketlea"/>
                        </button>
                    </div>
            </div>
        </>
    )
}

export default Page;