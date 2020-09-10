import styles from '../styles/explore.module.css'
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
                    <h1 className={styles.title}>Following</h1>

                    {/* FOLLOWING -- SHOW USERS WHO HAVE RECENTLY POSTED FIRST
                                     USER WILL ALSO HAVE A BORDER TO INDICATE
                                     THAT THEY HAVE CREATE A POST */}
                    <div className={styles.following}>
                        <Link href=""><a href="">
                            <div className={styles.following_avatar}>
                                <img src="https://cdn.discordapp.com/avatars/583925649807245322/a_bfb17d0ffc35ddd308c458b30bf4212b.gif?size=1024" alt=""/>
                            </div>
                            <span className={styles.following_username}>test</span>
                        </a></Link>
                    </div>
                </div>

            </div>
        {/* </div> */}
        </>
    )
}

export default Page;