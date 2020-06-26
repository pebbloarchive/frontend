import styles from '../styles/components/topnav.module.css';
// import styles from '../styles/main.css'

const Topnav = () => {
    return (
        <div className={styles.navigation}>
            <h1 className={styles.logo}>
                <a href="/"><img src="https://cdn.discordapp.com/attachments/596156721928470547/725214265069535252/infinate.png" alt=""/></a>
                <span>pebblo</span></h1>

                    <div className={styles.content}>

                        <div className={styles.bars}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <div className={styles.links}>
                            <a href="/">Home</a>
                            <a href="/app">Features</a>
                        </div>
                    </div>
        </div>
    )
}

export default Topnav;