import styles from '../styles/profile/explore.module.css'
import core from '@pebblo/core';
import { usePulse } from 'pulse-framework';
import { AccountBody } from '@pebblo/core/lib/controllers/accounts/account.interfaces';
import Link from 'next/link';


const Page = () => {
    const [loggedIn] = usePulse([core.accounts.state.IS_LOGGED, core.accounts.state.CACHE]);
    const [current] = usePulse([core.accounts.collection.selectors.CURRENT]);
    return (
        <>
        {/* <div className={styles.explore}> */}
            <div className={styles.explore}>
                
                <div className={styles.header}>
                    <form className={styles.header_search}>
                        <input
                            type="search"
                            name=""
                            id=""
                            placeholder="Search for..."
                        />
                        <input type="submit" value="GO"/>
                    </form>
                </div>

                <div className={styles.content}>

                    <div className={styles.title}><strong>Trending</strong> posts</div>
                    

                </div>

            </div>
        {/* </div> */}
        </>
    )
}

export default Page;