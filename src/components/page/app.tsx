import styles from '../../styles/components/page/app.module.css';


const App = () => {
    return (
            <div className={styles.content}>

                <div className={styles.why_pebblo}>
                    <div className={styles.why_pebblo_content}>
                        <h1 className={styles.why_pebblo_title}>Share Your Story</h1>
                        <p className={styles.why_pebblo_paragraph}>Bringing people together from around the world.</p>
                    </div>
                        <div className={styles.downloadON}>
                                <a href="" className={styles.downloadON_android}>
                                    <img src="https://cdn.discordapp.com/attachments/596156721928470547/726266227290275901/google-play.png" alt=""/>
                                    <p>
                                        <span>Get it on</span>
                                        Play Store
                                    </p>
                                </a>
                                <a href="" className={styles.downloadON_iOS}>
                                    <img src="https://cdn.discordapp.com/attachments/596156721928470547/726266228938899456/iOS.png" alt=""/>
                                    <p>
                                        <span>Download on</span>
                                        App Store
                                    </p>
                                </a>
                        </div>
                </div>

                <div className={styles.apps}>

                    <a href="" className={styles.app_social}>
                        <p className={styles.apps_title}>Social Media Platform.</p>
                        <h1>
                            connect
                            <span>with friends</span>
                        </h1>
                    </a>

                    <a href="" className={styles.app_community}>
                        <p className={styles.apps_title}>Social Media Platform.</p>
                        <h1>
                            create
                            <span>your community</span>
                        </h1>
                    </a>

                    <a href="" className={styles.app_share}>
                        <p className={styles.apps_title}>Social Media Platform.</p>
                        <h1>
                            share
                            <span>stories</span>
                        </h1>
                    </a>

                </div>

            </div>
    )
}

export default App;