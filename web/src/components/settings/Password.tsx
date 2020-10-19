import styles from '../styles/settings/settings.module.css'
import { useState } from 'react';
import core from '@pebblo/core';
import { usePulse } from 'pulse-framework';
import { AccountBody } from '@pebblo/core/lib/controllers/accounts/account.interfaces';
import Link from 'next/link';

const Page = () => {
    const [loggedIn] = usePulse([core.accounts.state.IS_LOGGED, core.accounts.state.CACHE]);
    const [current] = usePulse([core.accounts.collection.selectors.CURRENT]);
    const [password, setPassword] = useState(undefined);
    const [newPassword, setNewPass] = useState(undefined);
    const [confirmPassword, setConfPass] = useState(undefined);
    const sendRequest = async (ev) => {
        ev.preventDefault();
        return core.accounts.changePassword(password, newPassword, confirmPassword);
    }

    return (
        <>
        <title>@{current.username} | Change Password</title>
            <div className={styles.content}>
                <form className={styles.change_password} onSubmit={sendRequest}>
                <h1 className={styles.title}>Change Password</h1>
                    <input
                        className={styles.change_pasword}
                        type="password"
                        name="password"
                        placeholder="Current password"
                        required={true}
                        onChange={(change) => { setPassword(change.target.value) }}
                    />
                    <hr/>
                    <h1 className={styles.title}>New password</h1>
                    <input 
                        className={styles.change_pasword}
                        type="password"
                        name="password"
                        placeholder="New password"
                        required={true}
                        onChange={(change) => { setNewPass(change.target.value) }}
                    />
                    <input 
                        className={styles.change_pasword}
                        type="password"
                        name="password"
                        placeholder="Confirm new password"
                        required={true}
                        onChange={(change) => { setConfPass(change.target.value) }}
                    />
                    <div className={styles.submit}>
                        <input type="submit" value="Save Changes"/>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Page;
