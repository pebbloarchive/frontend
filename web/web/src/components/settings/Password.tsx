import styles from '../styles/settings/settings.module.css'
import { useState } from 'react';
import Link from 'next/link';
import { useMeQuery } from '~/generated/graphql';

const Page = () => {
    const { data } = useMeQuery();
    const [password, setPassword] = useState(undefined);
    const [newPassword, setNewPass] = useState(undefined);
    const [confirmPassword, setConfPass] = useState(undefined);
    const sendRequest = async (ev) => {
        ev.preventDefault();
        return null;
    }

    return (
        <>
        <title>@{data?.me?.username} | Change Password</title>
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
