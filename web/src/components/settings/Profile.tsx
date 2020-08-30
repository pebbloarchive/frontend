import styles from '../styles/settings.module.css'
import core from '@pebblo/core';
import { usePulse } from 'pulse-framework';

const Page = () => {
    const [loggedIn, cache] = usePulse([core.accounts.state.IS_LOGGED, core.accounts.state.CACHE]);
    return (
        <>
        <title>Settings &gt; Edit Profile</title>

                <div className={styles.content}>
                    <h1 className={styles.title}>Account Details</h1>
                        <form className={styles.edit_account}>
                            <label>{loggedIn ? <img src={cache.avatar} alt=""/> : <img src="https://cdn.discordapp.com/avatars/215302985826304010/5e65d38cf852733f000359a5713231a2.png?size=1024" alt=""/> 
                            ? !loggedIn : '' }
                                <input type="file" name="" id=""/>
                            </label>
                            <input type="text" name="" id="" placeholder="Full Name" required/>
                            <input type="text" name="" id="" placeholder="Username" required/>
                            <input type="email" name="" id="" placeholder="Email Address" required/>

                            <hr/>
                            <h1 className={styles.title}>Biography</h1>
                            <textarea name="" id="" cols={0} rows={1} placeholder="Tell us about yourself!"></textarea>
                            
                                <div className={styles.submit}>
                                    <input type="submit" value="Save Changes"/>
                                </div>
                        </form>
                </div>
        </>
    )
}

export default Page;