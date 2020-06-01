import styles from '../styles/components/profile.module.css';
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
            <h1></h1>
        )
    }
}

export default Profile;