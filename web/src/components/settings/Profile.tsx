import styles from '../styles/settings.module.css'
import core from '@pebblo/core';
import { usePulse } from 'pulse-framework';
import { AccountUser } from '@pebblo/core/lib/controllers/accounts/account.interfaces';

const Page = () => {
    const [loggedIn] = usePulse([core.accounts.state.IS_LOGGED, core.accounts.state.CACHE]);
    const [current]: AccountUser[] = usePulse([core.accounts.collection.selectors.CURRENT]);
    return (
        <>
        <title>Settings &gt; Edit Profile</title>

                <div className={styles.content}>
                    <h1 className={styles.title}>Account Details</h1>
                        <form className={styles.edit_account}>
                            <label>{loggedIn ? <img src={current.avatar} draggable={false} alt="Your Avatar"/> : '' ? !loggedIn : '' }
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