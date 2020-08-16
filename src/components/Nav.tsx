import styles from '../styles/components/navbar.module.css';

const Topnav = () => {
    return (
        <>
                {/* https://dribbble.com/shots/10034795/attachments/2053017?mode=media */}

            <div className={styles.navigation}>
                <a href="/" className={styles.user}>
                    <a href="" className={styles.notifications}>
                        <span>1</span>
                    </a>
                    <p>Hey, <strong>Pebblo</strong>!</p>
                    <img className={styles.avatar} src="https://cdn.discordapp.com/icons/564373498336903168/856ac7bcc6b43ae17d0c84a000cbb3e2.webp?size=1024" alt=""/>
                </a>

                <div className={styles.search}>
                    <input type="search" name="" id="" placeholder="Search on Pebblo"/>
                </div>

                <div className={styles.links}>
                    <a href="">Profile</a>
                    <a href="">Explore</a>
                    <a href="">Messages</a>
                </div>
            </div>
        </>
    )
}

export default Topnav;