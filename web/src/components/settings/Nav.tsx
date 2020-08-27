import styles from '../styles/navbar.module.css'

const Topnav = () => {
    return (
        <>
            <div className={styles.settings}>
                <div className={styles.settings_content}>
                    <a href="/settings" className={styles.settings_active}>
                        <img className={styles.settings_avatar} src="https://cdn.discordapp.com/avatars/215302985826304010/5e65d38cf852733f000359a5713231a2.png?size=1024" alt=""/>
                        <span>Edit Profile</span>
                    </a>
                    <a href="/settings/privacy-safety">
                        <img src="https://cdn.discordapp.com/attachments/596156721928470547/746565258050666516/padlock.png" alt=""/>
                        <span>Privacy &amp; Safety</span>
                    </a>
                    <a href="/settings/password">
                        <img src="https://cdn.discordapp.com/attachments/573688434380636175/746945746259148841/key.png" alt=""/>
                        <span>Change Password</span>
                    </a>
                    <a href="/settings/connections">
                        <img src="https://cdn.discordapp.com/attachments/596156721928470547/746568861314187374/connection.png" alt=""/>
                        <span>Connections</span>
                    </a>
                    <a href="/settings/display">
                        <img src="https://cdn.discordapp.com/attachments/596156721928470547/746571427188178964/display.png" alt=""/>
                        <span>Display</span>
                    </a>
                    <a href="/settings/notifications">
                        <img src="https://cdn.discordapp.com/attachments/596156721928470547/746591289486737488/bell.png" alt=""/>
                        <span>Notifications</span>
                    </a>
                    <button>Logout</button>
                </div>
            </div>
            
            <a href="/profile" className={styles.settings_home}></a>
        </>
    )
}

export default Topnav;