import styles from '../styles/profile/explore.module.css'
import core from '@pebblo/core';
import { usePulse } from 'pulse-framework';
import { AccountBody } from '@pebblo/core/lib/controllers/accounts/account.interfaces';
import Link from 'next/link';
import { getAvatar } from '../utils';
// import Logged from '../../components/general/Logged';


const Page = () => {
    const [loggedIn] = usePulse([core.accounts.state.IS_LOGGED, core.accounts.state.CACHE]);
    const [current] = usePulse([core.accounts.collection.selectors.CURRENT]);
    return (
        <>
            <div className={styles.explore}>
                <div className={styles.header}>
                    <form className={styles.header_search}>
                        <input
                            type="search"
                            name=""
                            id=""
                            placeholder="Search Pebblo"
                        />
                        <input type="submit" value="GO"/>
                    </form>
                    <img src="/images/cloud.png" alt="" className={styles.header_cloud}/>
                </div>
            </div>
            
            <div className={styles.mobile_explore}>
                <div className={styles.mobile_header}>
                    <form className={styles.mobile_search}>
                        <input type="search" name="" id="" placeholder="Search..."/>
                    </form>
                    <h1>Explore</h1>
                </div>
            </div>
        </>
    )
}

export default Page;