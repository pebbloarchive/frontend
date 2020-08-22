import styles from '../../styles/settings.module.css'

const Page = () => {
    return (
        <>
            <div className={styles.content}>
                <h1 className={styles.title}>Edit Profile</h1>

                    <div className={styles.setting}>
                        <label className={styles.edit_avatar}>
                            <img src="https://cdn.discordapp.com/avatars/215302985826304010/5e65d38cf852733f000359a5713231a2.png?size=1024" alt=""/>
                            <input type="file" name="" id=""/>

                            <button>Update Avatar</button>
                        </label>

                        <form className={styles.edit_profile}>
                            <input type="text" name="" id="" placeholder="Full name" required/>
                            <input type="text" name="" id="" placeholder="Username" required/>
                            <input type="email" name="" id="" placeholder="Email Address" required/>
                            
                            <button type="submit">Save</button>
                        </form>
                    </div>
            </div>
        </>
    )
}

export default Page;