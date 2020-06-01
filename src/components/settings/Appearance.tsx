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
                <h1 className={styles.settings_title}>Appearance</h1>


                    <div className="appearance"></div>


            </div>
        )
    }
}

export default Profile;