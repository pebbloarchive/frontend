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
                
            </div>
        )
    }
}

export default Profile;