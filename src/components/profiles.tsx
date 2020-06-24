import styles from '../styles/components/profile.module.css';
import React from 'react';
import { Account } from '../core';

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
            <div className={styles.profile}>
                <img className={styles.profile_avatar} src="https://cdn.discordapp.com/avatars/215302985826304010/fbcf44a65980ab1542eaaaf8fe636272.png?size=1024" alt=""/>
                    <div className={styles.profile_info}>
                        <h1 className={styles.profile_username}>andre</h1>
                            <h1 className={styles.profile_displayName}>
                                andre
                                <img src="https://cdn.discordapp.com/attachments/596156721928470547/716563875352543282/verified.png" alt=""/>
                            </h1>
                            <p className={styles.profile_bio}>If you can't have midnight snacks why is there a light in the fridge? lorem</p>
                    </div>
                <div className={styles.profile_interation}>
                    <a href="" className={styles.profile_toggleFollow}>Follow</a> {/* change this to "Insights" when you're on https://pebblo.org/@me */}
                    <a href="" className={styles.profile_message}>Message</a> {/* change this to "Apps" when you're on https://pebblo.org/@me */}
                </div>

                <div className={styles.profile_stats}>
                    <a href="" className={styles.profile_followers}><span>293</span>
                    Followers</a>
                    <a href="" className={styles.profile_posts}><span>0</span>
                    Posts</a>
                </div>

                    <div className={styles.profile_gallery}>
                        
                    </div>

            </div>
        )
    }
}

export default Profile;