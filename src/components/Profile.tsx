import styles from '../styles/components/profile.module.css';

const profile = () => {
    return (
        <div className={styles.profile} id={styles.profilefade}>
            <div className={styles.profile_menu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            
                <div className={styles.profile_basic}>
                    <img src="https://cdn.discordapp.com/avatars/583925649807245322/607c1989337e112fbe73ccee25386865.png?size=1024" alt="" className={styles.profile_avatar} />
                    <h1 className={styles.profile_fullName}>Kyle</h1>
                    <h1 className={styles.profile_username}>@kyle</h1>
                    <p className={styles.profile_bio}>if you can't have midnight snacks why is there a light in the fridge?</p>
                    <ul className={styles.profile_list}>
                        {/* <li><i className="far fa-clock">joined on <span>December, 2019</span></i></li> */}
                    </ul>
                    <div className={styles.profile_interaction}>
                        <button className={styles.profile_interaction_follow}>Follow</button>
                        <a className={styles.profile_interaction_message}>Message</a>
                    </div>
                </div>
        </div>
    )
}

export default profile;