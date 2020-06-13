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
                            <div className={styles.account_avatar}>
                                <img src="https://cdn.discordapp.com/avatars/215302985826304010/fbcf44a65980ab1542eaaaf8fe636272.png?size=1024" alt=""/>
                                    <label>
                                        <h1>Upload Photo</h1>
                                        <span>At least 200x200 PNG or JPG file.</span>
                                        <input type="file" name="" id=""/>
                                    </label>
                            </div>
                            <div className={styles.account_inputs}>


                                <label>
                                    <h1>Display Name</h1>
                                    <input type="text" name="displayName" id="displayName" autoComplete="off" placeholder="Optional"/>
                                </label>


                                <label>
                                    <h1>Email Address</h1>
                                    <input type="email" name="email" id="email" autoComplete="off" placeholder="Required" required/>
                                </label>


                                <label>
                                    <h1>Username</h1>
                                    <input type="text" name="username" id="username" autoComplete="off" placeholder="Required" required/>
                                </label>


                                <label>
                                    <h1>Password</h1>
                                    <input type="password" name="password" id="password" autoComplete="off" placeholder="Required" required/>
                                </label>

                                <label>
                                    <h1>Bio</h1>
                                    <textarea placeholder="Tell people about yourself..." maxLength={400}></textarea>
                                </label>


                            </div>

                            <input className={styles.accountUpdate} type="submit" value="Save"/>
                        </form>


            </div>
        )
    }
}

export default Profile;