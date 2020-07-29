import styles from '../../styles/components/explore.module.css';

const Page = () => {
    return (
    <>
        <div className={styles.explore}>
            <div className={styles.explore_nav}>
                <div className={styles.explore_logo}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={styles.explore_links}>
                    <a href="/me">Profile</a>
                    <a href="/settings/account">Settings</a>
                    <a href="/me" className={styles.explore_avatar}>
                        <img src="https://cdn.discordapp.com/icons/564373498336903168/e2065cba225bafd7e0cf0922de9538f0.webp?size=1024" alt=""/>
                    </a>
                </div>
            </div>

                <div className={styles.feed}>
                    <h1 className={styles.feed_title}>People You Follow</h1>
                </div>

        </div>

        <div className={styles.left}></div>
    </>
    )
}

export default Page;