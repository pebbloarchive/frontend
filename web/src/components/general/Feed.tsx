import styles from '../styles/feed.module.css'
import { AccountUser, AccountPosts } from '@pebblo/core/lib/controllers/accounts/account.interfaces';
import Link from 'next/link';
import { abbreivate } from '../utils';
import moment from 'moment';
import Twemoji from 'react-twemoji';

const Page = (props: AccountPosts) => {
    return (
        <>
            <div className={styles.feed}>
                <a href={`/p/${props.post_id}`} className={styles.post}>
                    <a href={props.username} className={styles.user}>
                        <img src={props.avatar} alt=""/>
                        <div className={styles.names}>
                            <h1>{props.permissions.includes('verified') ? <img src="icons/verified.png" alt=""/> : ''} {props.name}</h1>
                            <p>@{props.username}</p>
                        </div>
                    </a>
                    <div className={styles.caption}>
                        <div className={styles.content}>
                            <Twemoji options={{ className: 'twemoji' }}>
                              <p className={styles.caption_message}>{props.content}</p>
                            </Twemoji>
                            <div className={styles.caption_image}>
                                {/* <img src="https://pbs.twimg.com/media/EfSj6cfUcAAL8vy?format=jpg&name=small" alt=""/> */}
                            </div>
                        </div>
                    </div>
                    <div className={styles.interactions}>
                        <a href="/p/POSTID#comments"><img src="https://cdn.discordapp.com/attachments/596156721928470547/746527468898484344/comment.png" alt=""/>
                        <span>0</span></a>
                        <a href=""><img src="https://cdn.discordapp.com/attachments/596156721928470547/746527493787353148/heart.png" alt=""/>
                        <span>{abbreivate(props.likes.length ? props.likes.length : 0)}</span></a>
                        <a href=""><img src="https://cdn.discordapp.com/attachments/596156721928470547/746527492461822093/share.png" alt=""/>
                        <span>{abbreivate(props.shares.length ? props.shares.length : 0)}</span></a>

                        <div className={styles.timeStamp}>
                            <p>{moment(props.created_at).fromNow()}</p>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}

export default Page;

/*
import styles from '../styles/feed.module.css'
import { AccountUser } from '@pebblo/core/lib/controllers/accounts/account.interfaces';

const Page = (props: AccountUser) => {
    return (
        <>
            <div className={styles.feed}>

                <a href="/p/POSTID" className={styles.post}>
                    <a href="/andre" className={styles.user}>
                        <img src={props.avatar} alt=""/>
                        <div className={styles.names}>
                            <h1><img src={props.avatar} alt=""/> {props.name}</h1>
                            <p>@{props.username}</p>
                        </div>
                    </a>
                    <div className={styles.caption}>
                        <div className={styles.content}>
                            <p>{props.posts.content}</p>
                            <img src="https://pbs.twimg.com/media/EfSj6cfUcAAL8vy?format=jpg&name=small" alt=""/>
                        </div>
                    </div>
                    <div className={styles.interactions}>
                        <a href="/p/POSTID#comments"><img src="https://cdn.discordapp.com/attachments/596156721928470547/746527468898484344/comment.png" alt=""/>
                        <span>582</span></a>
                        <a href=""><img src="https://cdn.discordapp.com/attachments/596156721928470547/746527493787353148/heart.png" alt=""/>
                        <span>12.3k</span></a>
                        <a href=""><img src="https://cdn.discordapp.com/attachments/596156721928470547/746527492461822093/share.png" alt=""/>
                        <span>2.3k</span></a>
                    </div>
                </a>

            </div>
        </>
    )
}

export default Page;
*/