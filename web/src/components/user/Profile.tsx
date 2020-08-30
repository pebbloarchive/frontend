import styles from '../styles/profile.module.css'
import { usePulse } from 'pulse-framework';
import core from '@pebblo/core';

const Topnav = () => {
    const [loggedIn, cache] = usePulse([core.accounts.state.IS_LOGGED, core.accounts.state.CACHE]);

    return (
        <>
            <div className={styles.content}>

                    <div className={styles.profile}>
                        <div className={styles.profile_images}>
                            <img className={styles.avatar} src="https://cdn.discordapp.com/avatars/215302985826304010/5e65d38cf852733f000359a5713231a2.png?size=1024" alt=""/>
                            {/* <img className={styles.badge} src="https://cdn.discordapp.com/attachments/596156721928470547/745873552384983050/unknown.png" alt=""/> */}                            
                        </div>
                        <div className={styles.names}>
                            <div className={styles.names_content}>
                                <h1>Andre Lewis</h1>
                                <p>@andre</p>
                            </div>
                        </div>
                        <div className={styles.bio}>
                            <p>If we can't have midnight snacks why is there a light in the fridge? <a href="">#MindBoggled</a></p>
                        </div>
                    </div>
            </div>

            <div className={styles.additional_information}>
                <div className={styles.statistics}>
                    <a href="">
                        <span>28K</span>
                        <h3>Followers</h3>
                    </a>
                    <a href="">
                        {/* BY DEFAULT >> CHANGE TO FOLLOWING */}
                        <span>482</span>
                        {/* <h3>Subscribers</h3> */}
                        <h3>Following</h3>
                    </a>
                </div>
                <div className={styles.interaction}>
                    <a className={styles.follow_account} href="">
                        Follow
                    </a>
                    <a href="" className={styles.rewards_account}>
                        Rewards
                    </a>
                    {/* <a href="" className={styles.insights_account}>
                        Dashboard
                    </a> */}
                </div>
            </div>
        </>
    )
}

export default Topnav;