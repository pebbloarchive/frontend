import core from '@pebblo/core';
import { usePulse } from 'pulse-framework';
import { AccountBody } from '@pebblo/core/lib/controllers/accounts/account.interfaces';
import Link from 'next/link';
import styles from '../styles/settings/settings.module.css'

const Page = () => {
    const [loggedIn] = usePulse([core.accounts.state.IS_LOGGED, core.accounts.state.CACHE]);
    const [current] = usePulse([core.accounts.collection.selectors.CURRENT]);
    return (
        <>
        <title>@{current.username} | Staff Tools</title>

            <form className={styles.content}>
                <h1 className={styles.title}>Staff Tools</h1>
                <p className={styles.note}>These are only basic staff features. <a href="">Visit Dashboard</a>.</p>


                <h1 className={styles.title}>Surprises!</h1>
                    <label className={styles.checkbox}>
                        <div className={styles.checkbox_container}>
                            <input type="checkbox" name="" id=""/>
                            <span className={styles.checkbox_box}></span>
                        </div>
                        <h1>Colorful</h1>
                        <p>What could this be? Guess you'll never know...</p>
                    </label>                
                    <div className={styles.submit}>
                        <input type="submit" value="Save Changes"/>
                    </div>
            </form>
        </>
    )
}

export default Page;