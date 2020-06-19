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
                <h1 className={styles.settings_title}>Connections</h1>
                <h1 className={styles.content_note}>Learn more about <a href="">connections</a>.</h1>


                    <button className={styles.add_connection}>
                        <img src="https://cdn.discordapp.com/attachments/596156721928470547/716567464246509598/plus.png" alt=""/>
                        <span>Add Connection</span>
                    </button>


                    <div className={styles.connections}>
                        <a className={styles.connection_twitter}>
                            <div className={styles.connections_left}>
                                <img src="https://cdn.discordapp.com/attachments/596156721928470547/723028890099908648/twitter.png" alt=""/>
                                <h1>
                                    Twitter
                                    <span>@andrea</span>
                                </h1>
                            </div>
                            <button className={styles.connections_right}>
                                <span></span>
                            </button>
                        </a>
                    </div>


            </div>
        )
    }
}

export default Profile;