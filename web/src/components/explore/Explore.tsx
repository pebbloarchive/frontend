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

                    <div className={styles.title}><strong>Trending</strong> businesses</div>
                        <div className={styles.business}>

                            <div className={styles.business_card}>
                                <div className={styles.business_profile}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVqHLLR_VAsdxrR8-StfvNhtIbVxC8PEgMXA&usqp=CAU" alt=""/></div>
                                <h1 className={styles.business_name}>
                                  <img src="https://cdn.discordapp.com/emojis/747011360524599318.png?v=1" alt=""/>
                                  Nike
                                </h1>
                                <p className={styles.business_message}>
                                American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services.
                                </p>

                                <Link href="/business/[business]"><a href="/business/[business]" className={styles.business_goto}><span>Visit <hr/> @Nike</span></a></Link>
                            </div>

                        <Link href="/business"><a href="/business" className={styles.business_creators_more}>
                            <span><img src="/icons/arrows/chevron-left.png" alt=""/></span>
                        </a></Link>
                        </div>
                    

                    <div className={styles.title}><strong>Popular</strong> Creators</div>
                        <div className={styles.creators}>

                            <a href="" className={styles.creator_card}>
                                <div className={styles.creator_profile}>
                                    <img src="https://pbs.twimg.com/profile_images/1206625339419615238/K9tXC96U_400x400.jpg" alt="" className={styles.creator_avatar}/>
                                    <img src="https://cdn.discordapp.com/emojis/747011360524599318.png?v=1" alt="" className={styles.creator_verified}/>
                                    <section>
                                      <h1>0 <span>Followers</span></h1>
                                    </section>
                                </div>
                                <h1 className={styles.creator_name}>
                                  pewdiepie
                                </h1>
                                <p className={styles.creator_message}>
                                    ok boomer
                                </p>
                            </a>

                        <Link href="/creators"><a href="/creators" className={styles.business_creators_more}>
                            <span><img src="/icons/arrows/chevron-left.png" alt=""/></span>
                        </a></Link>
                        </div>
                    

                    <div className={styles.title}><strong>Recent</strong> posts</div>

                </div>

            </div>
        </>
    )
}

export default Page;