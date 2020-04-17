import Head from 'next/head';
import Nav from '../components/Nav';
import Post from '../components/Post';
import Router from 'next/router'
import { Account } from '../core';
import { AccountData } from '../core/controllers/account/account.state';
import { Log } from '..//utils';
import { usePulse } from 'pulse-framework';
import { PostCollection } from '../core/controllers/posts/posts.state';
import styles from '../styles/components/post.module.css';

const Page = () => {
    const [followList] = usePulse([PostCollection.getGroup('followed')]);
    const [logged] = usePulse(Account.isUserLoggedIn);
    // if(!logged && process.browser) Router.replace('/login');

    return (
        <div>
            <Head>
                <title>Pebblo Profile</title>
            </Head>
            {/* <Nav /> */}
            <div>
                {
                    followList.map((follower: any) => {
                        return (
                            <div className={styles.feed_post}>
                            <div className={styles.feed_profile}>
                              <a href="">
                                <img src="https://avatars2.githubusercontent.com/u/31027460?s=460&u=cb7f86d451d19653a07d490606e418f1e515fa05&v=4" alt="" className={styles.feed_avatar} />
                                <div className={styles.feed_profile_info}>
                                  <h1 className={styles.feed_profile_username}> { follower.author.username } </h1>
                                  <span className={styles.feed_profile_timeStamp}> date </span>
                                </div>
                              </a>
                            </div>
                            <p className={styles.feed_caption}>
                              { follower.content }
                            </p>
                          </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Page;