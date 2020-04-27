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
            <div className={styles.profile} id={styles.profilefade}>
            <div className={styles.profile_menu} onClick={() => {
                const wrapper = this.profile.current;
                if(wrapper.style.display === "none") {
                    wrapper.style.display = "block";
                } else {
                    wrapper.style.display = "none";
                }
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className={styles.profile_menuContent} ref={this.profile}>
                <a href="">Activity</a>
                <a href="">Notifications</a>
                <a href="logout" className={styles.profile_menuContent_block}>Logout</a>
            </div>

                <div className={styles.profile_basic}>
                    <img src="https://cdn.discordapp.com/attachments/596156721928470547/703021929300492318/images.jpeg" alt="" draggable={false} className={styles.profile_avatar} />
                    <img src="https://sike.uno/images/icon/verified-account.png" alt="" className={styles.profile_badge}/>
                    <h1 className={styles.profile_fullName}>Kyle</h1>
                    <h1 className={styles.profile_username}>@kyle</h1>
                    <p className={styles.profile_bio}>if you can't have midnight snacks why is there a light in the fridge?</p>
                    <ul className={styles.profile_list}>
                        {/* <li><i className="far fa-clock">joined on <span>December, 2019</span></i></li> */}
                    </ul>
                    <div className={styles.profile_interaction}>
                        <a href="/settings" className={styles.profile_interaction_follow}>Settings</a> {/* somehow make it remove the link? idk */}
                        <a className={styles.profile_interaction_message} onClick={async () => console.log(await Account.getUser('hrFDUhcch3s8ruwe98forc'))}>Messages</a>
                        {/* <a href="settings" className={styles.profile_interaction_follow}>Edit Account</a> */}
                        {/* <a className={styles.profile_interaction_message}>Message</a> */}
                    </div>
                </div>

                {/* <div className={styles.feed_search}>
                    
                </div> */}
            </div>
        )
    }
}

export default Profile;