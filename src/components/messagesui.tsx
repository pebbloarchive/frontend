import styles from '../styles/components/messages.module.css';
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
            <div className={styles.msg_nav}>

                <form className={styles.msg_nav_search}>
                    {/* <h1>testing </h1> */}
                    <input type="text" name="" id=""/>
                </form>

                <h1 className={styles.msg_nav_title}>Messages</h1>

                <form className={styles.msg_nav_search}>
                    {/* <h1>testing </h1> */}
                    {/* <input type="text" name="" id=""/> */}
                </form>

            </div>
        )
    }
}

export default Profile;