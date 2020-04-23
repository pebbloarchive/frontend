import styles from '../styles/components/userpost.module.css';

const Userpost = () => {
    return (
        <div className={styles.userpost}>
            <div className={styles.userpost_profile}>
                <a href="">
                    <img
                    src="https://cdn.discordapp.com/avatars/215302985826304010/54c15631503fc334afae01bd91fe6c3a.png?size=1024"
                    alt=""
                    className={styles.userpost_avatar} />
                    <div className={styles.userpost_profile_info}>
                        <h1 className={styles.userpost_profile_username}>@user</h1>
                        <span className={styles.userpost_profile_timeStamp}>date &amp; time</span>
                    </div>
                </a>
            </div>
            <p className={styles.userpost_caption}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo ad ullam repudiandae cumque ratione facere fugiat sapiente aliquam animi minima modi reprehenderit sed repellat dolor, nam voluptate, quisquam earum neque!
            </p>
            <div className={styles.userpost_interaction}>
                <button>
                    <img src="https://cdn.discordapp.com/attachments/637859135970607131/702393487378874398/heart-filled.png" alt=""/>
                    <span>[count]</span>
                </button>
                <button>
                    <img src="https://cdn.discordapp.com/attachments/637859135970607131/702394541419790338/speech-bubble.png" alt=""/>
                    <span>[count]</span>
                </button>
            </div>
        </div>
    )
}

export default Userpost;