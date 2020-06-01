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
                    <a href="/settings/appearance">Appearance</a>
                </div>
            </div>
        )
    }
}

export default Profile;