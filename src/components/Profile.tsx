import styles from '../styles/components/profile.module.css';

const profile = () => {
    const profileMenu = () => {

        var x = document.getElementById("profileContent");

        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    return (
        <div className={styles.profile} id={styles.profilefade}>
            <div className={styles.profile_menu} onClick={profileMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className={styles.profile_menuContent}>
                <a href="">Notifications</a>
                <a href="" className={styles.profile_menuContent_block}>Logout</a>
            </div>

                <div className={styles.profile_basic}>
                    <img src="https://cdn.discordapp.com/avatars/583925649807245322/607c1989337e112fbe73ccee25386865.png?size=1024" alt="" className={styles.profile_avatar} />
                    <img src="https://sike.uno/images/icon/verified-account.png" alt="" className={styles.profile_badge}/>
                    <h1 className={styles.profile_fullName}>Kyle</h1>
                    <h1 className={styles.profile_username}>@kyle</h1>
                    <p className={styles.profile_bio}>if you can't have midnight snacks why is there a light in the fridge?</p>
                    <ul className={styles.profile_list}>
                        {/* <li><i className="far fa-clock">joined on <span>December, 2019</span></i></li> */}
                    </ul>
                    <div className={styles.profile_interaction}>
                        <a className={styles.profile_interaction_follow}>Edit</a>
                        <a className={styles.profile_interaction_message}>Create Post</a>
                        {/* <a href="settings" className={styles.profile_interaction_follow}>Edit Account</a> */}
                        {/* <a className={styles.profile_interaction_message}>Message</a> */}
                    </div>
                </div>

                {/* <div className={styles.feed_search}>
                    
                </div> */}
        </div>
    )
}

export default profile;