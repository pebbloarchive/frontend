import styles from '../../styles/components/settings.module.css';
import React from 'react';

interface Profile {
    profile: any;
}
class Profile extends React.Component {
    constructor(props: any) {
        super(props);
            this.profile = React.createRef();
    }

    render() {
        return (
            <div className={styles.content}>
                <h1 className={styles.settings_title}>My Account</h1>


                        <form>
                            <div className={styles.account_inputs}>


                                <label>
                                    <h1>Display Name</h1>
                                    <input
                                        type="text"
                                        name="displayName"
                                        id="displayName"
                                        autoComplete="off"
                                        value="Andrea Lewis"
                                    />
                                </label>


                                <label>
                                    <h1>Email Address</h1>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="off"
                                        value="andrea@example.com"
                                    />
                                </label>


                                <label>
                                    <h1>Username</h1>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        autoComplete="off"
                                        placeholder="Required"
                                        value="andrea"
                                    />
                                </label>


                                <label>
                                    <h1>Password</h1>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Required"
                                        value="thisisanexample"
                                    />
                                </label>


                            </div>
                        </form>


            </div>
        )
    }
}

export default Profile;