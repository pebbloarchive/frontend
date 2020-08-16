import styles from '../styles/components/profile.module.css';

const Topnav = () => {
    return (
        <>
            <div className={styles.wallpaper}>
                <a href="" className={styles.createThread}>
                    <img src="https://cdn.discordapp.com/attachments/667293886468718592/736049316078288967/plus.png" alt=""/>
                    <span>Create</span>
                </a>
            </div>
                <div className={styles.columns}>

                    <div className={styles.profile}>
                        <div className={styles.profile_box}>
                            <img className={styles.profile_avatar} src="https://cdn.discordapp.com/icons/564373498336903168/856ac7bcc6b43ae17d0c84a000cbb3e2.webp?size=1024" alt=""/>
                            <h1 className={styles.profile_fullName}>Pebblo</h1>
                            <h1 className={styles.profile_username}>@Pebblo</h1>
                            <a href="" className={styles.profile_website}>pebblo.org</a>

                                    <div className={styles.profile_stats}>
                                        <a href="">
                                            <span>0</span>
                                            Supporters
                                        </a>
                                        <a href="">
                                            <span>0</span>
                                            Followers
                                        </a>
                                        <a href="">
                                            <span>0</span>
                                            Posts
                                        </a>
                                    </div>
                        </div>
                    </div>

                    <div className={styles.profile_biography}>
                        <h1>Bio</h1>
                        <p>Attracting people from around the world together to share stories, meet new friends &amp; have a laugh.</p>
                    </div>

                    <div className={styles.feed}>
                        <div className={styles.feed_tabs}>
                            <a href="">Posts</a>
                            <a href="">Following</a>
                            <a href="">Replies &amp; Mentions</a>
                        </div>

                            <a href="/" className={styles.post}>
                                <div className={styles.post_avatar}>
                                    <img src="https://cdn.discordapp.com/avatars/215302985826304010/fbcf44a65980ab1542eaaaf8fe636272.png?size=1024" alt=""/>
                                </div>
                                <div className={styles.post_content}>
                                    <a className={styles.post_interactedWith}>onedigital shared</a>
                                    <h1 className={styles.post_fullName}>Andre Lewis <span className={styles.post_username}>@andre</span></h1>
                                        <p className={styles.post_caption}>
                                            This is awesome! Good job, <a href="">@OneDigital</a>
                                            <img src="https://static.dribbble.com/users/3772523/screenshots/12910844/media/89d5941506a55d9cb0ed544b3d3b77f4.png" alt=""/>
                                        </p>
                                </div>
                            </a>

                            <a href="/" className={styles.post}>
                                <div className={styles.post_avatar}>
                                    <img src="https://static.dribbble.com/users/3772523/screenshots/12910844/media/89d5941506a55d9cb0ed544b3d3b77f4.png" alt=""/>
                                </div>
                                <div className={styles.post_content}>
                                    {/* <a className={styles.post_interactedWith}>Pebblo shared</a> */}
                                    <h1 className={styles.post_fullName}>One Digital <span className={styles.post_username}>@OneDigital</span></h1>
                                        <p className={styles.post_caption}>
                                            Thanks, <a href="">@andre</a> for liking our new page!
                                            {/* <img src="https://static.dribbble.com/users/3772523/screenshots/12910844/media/89d5941506a55d9cb0ed544b3d3b77f4.png" alt=""/> */}
                                        </p>
                                </div>
                            </a>

                    </div>

                </div>
        </>
    )
}

export default Topnav;