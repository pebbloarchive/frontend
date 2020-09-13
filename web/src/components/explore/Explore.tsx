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

                    <div className={styles.title}><strong>Discover</strong> something new</div>
                    <div className={styles.tags}>

                        {/* NOTE:       Make it so it randomly shows only
                                        a random 5 out of the categories
                                        below when you refresh the page. */}

                        <Link href=""><a href="">Art</a></Link>
                        <Link href=""><a href="">Beauty</a></Link>
                        <Link href=""><a href="">DIY</a></Link>
                        <Link href=""><a href="">Decor / Decoration</a></Link>
                        <Link href=""><a href="">Educational</a></Link>
                        {/* <Link href=""><a href="">Entertainment</a></Link>
                        <Link href=""><a href="">Humor</a></Link>
                        <Link href=""><a href="">Inspirational</a></Link>
                        <Link href=""><a href="">Music</a></Link>
                        <Link href=""><a href="">Restaurants / Cafe / Food</a></Link>
                        <Link href=""><a href="">Stream</a></Link>
                        <Link href=""><a href="">Technology</a></Link>
                        <Link href=""><a href="">Travel</a></Link>
                        <Link href=""><a href="">TV &amp; Movies</a></Link> */}
                    </div>

                    <div className={styles.subtitle}><strong>Trending</strong> posts</div>

                </div>

            </div>
        {/* </div> */}
        </>
    )
}

export default Page;