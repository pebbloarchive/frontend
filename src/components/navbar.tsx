import styles from '../styles/components/topnav.module.css';

const Topnav = () => {
    return (
        <div className={styles.nav}>

            <div className={styles.nav_profile}>
                <img src="https://cdn.discordapp.com/avatars/215302985826304010/fbcf44a65980ab1542eaaaf8fe636272.png?size=1024" alt=""
                className={styles.nav_avatar}
                />
                    <div className={styles.nav_info}>
                        <h1 className={styles.nav_displayName}>Andre
                            <img src="https://cdn.discordapp.com/attachments/596156721928470547/716563875352543282/verified.png" alt=""/>
                        </h1>
                        <h1 className={styles.nav_username}>andre</h1>
                            <div className={styles.nav_stats}>
                                <a href="/profile/followers">
                                    <span>0</span>
                                    Followers
                                </a>
                                <a href="/profile/following">
                                    <span>0</span>
                                    Following
                                </a>
                            </div>
                    </div>
                
            </div>

                <div className={styles.nav_pages}>
                    <a href="/profile">
                        <img src="https://cdn.discordapp.com/attachments/596156721928470547/716529638209355826/gallery.png" alt=""/>
                        <span>Feed</span></a>
                    <a href="/explore">
                        <img src="https://cdn.discordapp.com/attachments/596156721928470547/716529353046884362/search.png" alt=""/>
                        <span>Explore</span></a>
                    <a href="/message">
                        <img src="https://cdn.discordapp.com/attachments/596156721928470547/716530868629536808/messages.png" alt=""/>
                        <span>Messages</span></a>
                    <a href="/acitivity">
                        <img src="https://cdn.discordapp.com/attachments/596156721928470547/716528087973757008/melting-heart.png" alt=""/>
                        <span>Activity</span></a>
                    <a href="/settings">
                        <img src="https://cdn.discordapp.com/attachments/596156721928470547/716530147167305738/settings.png" alt=""/>
                        <span>Settings</span></a>
                    <a href="/app">
                        <img src="https://cdn.discordapp.com/attachments/596156721928470547/716577640273805312/infinate.png" alt=""/>
                        Browse Pebblo
                    </a>
                </div>

                <div className={styles.topbar_right}>
                    <a href="/upload" className={styles.topbar_create}>
                        <img src="https://cdn.discordapp.com/attachments/596156721928470547/716567464246509598/plus.png" alt=""/>
                        <span>Create post</span></a>
                </div>

        </div>
    )
}

export default Topnav;