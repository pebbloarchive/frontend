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


                        <div className={styles.avatar}>
                            <img src="https://cdn.discordapp.com/avatars/215302985826304010/fbcf44a65980ab1542eaaaf8fe636272.png?size=1024" alt=""/>
                            <button></button>
                        </div>

                        <form className={styles.account}>
                            <h1>Name</h1>
                            <input
                                type="text"
                                name="displayName"
                                id=""
                                placeholder="Display name"
                                autoComplete="off"
                                // value="Andrea Lewis"
                            />
                            <h1>Username</h1>
                            <input
                                type="text"
                                name="username"
                                id=""
                                placeholder="Required"
                                autoComplete="off"
                                // value="Andrea Lewis"
                            />
                            <h1>Email Address</h1>
                            <input
                                type="email"
                                name="email"
                                id=""
                                placeholder="Required"
                                autoComplete="off"
                                // value="Andrea Lewis"
                            />
                        </form>


            </div>
        )
    }
}

export default Profile;