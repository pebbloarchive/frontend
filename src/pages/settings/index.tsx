import Head from 'next/head';
import Nav from '../../components/Nav';
import Router from 'next/router'
import { Account } from '../../core';
import { AccountData } from '../../core/controllers/account/account.state';
import { usePulse } from 'pulse-framework';
import styles from '../../styles/components/settings.module.css';

const Page = () => {
    const [logged] = usePulse(Account.isUserLoggedIn);
    const [username] = usePulse([AccountData.username]);
    const [email] = usePulse([AccountData.email]);
    if(!logged && process.browser) Router.replace('/login');

    return (
        <>
        <Head>
            <title>Pebblo Settings</title>
        </Head>
        <Nav />
        <div className={styles.settings}>
            <div className={styles.settings_content}>
                <h1 className={styles.settings_title}>My Account</h1>

                <div className={`${styles.settings_account} ${styles.settings_medium_box} `}>
                    <div className={styles.settings_account_avatar}>
                        <img src="https://cdn.discordapp.com/avatars/215302985826304010/54c15631503fc334afae01bd91fe6c3a.png?size=1024" draggable={false} alt="" />
                    </div>
                        <div className={styles.settings_account_info}>
                            <form>
                            <h1 className={styles.settings_account_title}>Username</h1>
                            <input
                                maxLength={16}
                                minLength={3}
                                className={styles.settings_account_input}
                                type="text"
                                name="username"
                                id="username"
                                autoComplete="false"
                                autoCapitalize="false"
                                placeholder="Required"
                                value={username}
                            />
                            <h1 className={styles.settings_account_title}>Email</h1>
                            <input
                                className={styles.settings_account_input}
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="false"
                                placeholder="Required"
                            />
                            <h1 className={styles.settings_account_title}>Password</h1>
                            <input
                                className={styles.settings_account_input}
                                minLength={9}
                                type="password"
                                name="password"
                                id="password"
                                autoComplete="false"
                                placeholder="Required"
                                required
                            />
                            <hr/>

                            <h1 className={styles.settings_account_title}>Profile</h1>
                            <input
                            className={styles.settings_account_input}
                            maxLength={26}
                            type="text"
                            name="displayName"
                            id="displayName"
                            placeholder="Name"
                            />
                            <textarea 
                            name=""
                             id="" 
                             cols={0} 
                             rows={15}
                             placeholder="Bio"
                             />
                            <button className={styles.settings_account_button} type="submit">Save</button>
                            <a className={styles.settings_account_logout} href="/logout">Logout</a>
                            </form>
                        </div>
                    </div>

                    <h1 className={styles.settings_subtitle}>Privacy and Settings</h1>

                    <div className={`${styles.settings_grid} ${styles.settings_full_box}`}>

                    <div className={`${styles.settings_item} ${styles.settings_item_1}`}>
                        <div className={styles.settings_item_content}>
                            <h1>Private</h1>
                            <p>Set your account to private</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page;
