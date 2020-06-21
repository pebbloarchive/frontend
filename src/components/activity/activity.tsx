import styles from '../../styles/components/activity.module.css';
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
                
                <div className={styles.list}>
                    <a className={styles.activity_time}>
                        <span>Your Activity</span>
                    </a>
                    <a className={styles.activity_likes}>
                        <span>Likes</span>
                    </a>
                    <a className={styles.activity_promo}>
                        <span>Promotions</span>
                    </a>
                </div>

            </div>
        )
    }
}

export default Profile;