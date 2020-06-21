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
                    <div className={styles.profile_content}>
                        <div className={styles.profile_info}>
                            <h1 className={styles.profile_displayName}>Andrea Lewis</h1>
                            <h1 className={styles.profile_username}>@andre</h1>
                        </div>
                    </div>

                    <p className={styles.profile_bio}>
                        Founder of <a href="/profile/@Pebblo">@Pebblo</a> - use <a href="">#PBLO2020</a> to get featured!
                    </p>
                <div className={styles.profile_filter}>
                    <a href=""></a>
                </div>
            </div>
        )
    }
}

export default Profile;