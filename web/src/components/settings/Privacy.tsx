import styles from '../styles/settings/settings.module.css'

const Page = () => {
    return (
        <>
        <title>Settings &gt; Privacy &amp; Safety</title>


            <div className={styles.content}>
                <h1 className={styles.title}>Privacy</h1>

                    <label className={styles.checkbox}>
                        <div className={styles.checkbox_container}>
                            <input type="checkbox" name="" id=""/>
                            <span className={styles.checkbox_box}></span>
                        </div>
                        <h1>Private</h1>
                        <p>Set your account so only people you approve can see your posts.
                            <a href="">More Info.</a>
                        </p>
                    </label>

                <h1 className={styles.subtitle}>Parent Email</h1>
                <p className={styles.note}>Parents can connect their email address to get updates on your activity. Learn more about <a href="">child safety</a> on Pebblo.</p>
                    <label className={styles.guardian_email}>
                        <input type="email" name="" id="" placeholder="Email Address"/>
                    </label>

                    <hr/>
                <h1 className={styles.title}>Messaging</h1>
                    <label className={styles.checkbox}>
                        <div className={styles.checkbox_container}>
                            <input type="checkbox" name="" id=""/>
                            <span className={styles.checkbox_box}></span>
                        </div>
                        <h1>Allow comments by anyone</h1>
                        <p>People who don't follow you will be able to comment on your posts.
                            <a href="">More Info.</a>
                        </p>
                    </label>
                <h1 className={styles.subtitle}>Who can message me?</h1>
                    
                    <label className={styles.checkbox}>
                        <div className={styles.checkbox_container}>
                            <input type="checkbox" name="" id=""/>
                            <span className={styles.checkbox_box}></span>
                        </div>
                        <h1>Followers</h1>
                        <p>Only people who you follow and follow you can send you messages.</p>
                    </label>
                    <label className={styles.checkbox}>
                        <div className={styles.checkbox_container}>
                            <input type="checkbox" name="" id=""/>
                            <span className={styles.checkbox_box}></span>
                        </div>
                        <h1>Outside Messages</h1>
                        <p>Allow messages from people who you don't follow.
                            <a href="">More Info.</a>
                        </p>
                    </label>
                <h1 className={styles.subtitle}>Comments &amp; Direct Messages</h1>

                    <label className={styles.checkbox}>
                        <div className={styles.checkbox_container}>
                            <input type="checkbox" name="" id="" defaultChecked/>
                            <span className={styles.checkbox_box}></span>
                        </div>
                        <h1>Scan Messages</h1>
                        <p>Scan and delete messages that may be offensive or explicit.
                            <a href="">More Info.</a>
                        </p>
                    </label>
                    <label className={styles.checkbox}>
                        <div className={styles.checkbox_container}>
                            <input type="checkbox" name="" id="" defaultChecked/>
                            <span className={styles.checkbox_box}></span>
                        </div>
                        <h1>Scan Media</h1>
                        <p>Scan and delete media that may be offensive or explicit.
                            <a href="">More Info.</a>
                        </p>
                    </label>
                    <div className={styles.submit}>
                        <input type="submit" value="Save Changes"/>
                    </div>
            </div>
        </>
    )
}

export default Page;