import styles from '../styles/components/settings.module.css';
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
            <div className={styles.settings}>
                <div className={styles.settings_tabs}>
                    <a href="/settings">Account</a>
                    <a href="/settings/privacy-safety">Privacy &amp; Safety</a>
                    <a href="/settings/connections">Connections</a>
                    {/* <a href="/settings/insights">Insights</a> ONLY ACTIVATE ON VERIFIED ACCOUTNS */}
                    <a href="/settings/appearance">Appearance</a>
                    <a href="/settings/security">Security</a>

                    <a href="/logout" className={styles.settings_logout}>Logout</a>
                </div>
            </div>
        )
    }
}

export default Profile;