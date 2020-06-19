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
                
                Maintenance

            </div>
        )
    }
}

export default Profile;