import styles from '../styles/components/topnav.module.css';

const Topnav = () => {
    return (
        <div className={styles.topNav}>
            <div className={styles.topNav_left}>
                <h1>pebblo<span>.org</span></h1>
            </div>
            <div className={styles.topNav_right}>
                <a href="/" className={styles.topNav_home}><span>Home</span>
                <img src="https://cdn.discordapp.com/attachments/596156721928470547/702355353437732904/home.png" alt=""/></a>
                <a href="/why-pebblo">Why Pebblo?</a>
                {/* <a href="/login" className={styles.topNav_signIN}>Sign in</a> */}
                <a href="/profile" className={styles.topNav_account}>
                    <img src="https://cdn.discordapp.com/avatars/215302985826304010/54c15631503fc334afae01bd91fe6c3a.png?size=256" alt=""/>
                </a>
            </div>
        </div>
    )
}

export default Topnav;