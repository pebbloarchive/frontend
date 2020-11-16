import styles from '../styles/profile/old/feed.module.css'

const Page = () => {
    return (
        <>
            <div className={styles.feed}>

                <a href="/p/POSTID" className={styles.post}>
                    <a href="/andre" className={styles.user}>
                        <img src="https://cdn.discordapp.com/avatars/215302985826304010/5e65d38cf852733f000359a5713231a2.png?size=1024" alt=""/>
                        <div className={styles.names}>
                            <h1><img src="https://cdn.discordapp.com/attachments/596156721928470547/745873552384983050/unknown.png" alt=""/> Andre</h1>
                            <p>@Andre</p>
                        </div>
                    </a>
                    <div className={styles.caption}>
                        <div className={styles.content}>
                            <p>Working on <a href="">@Pebblo</a> offline</p>
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

                        <div className={styles.timeStamp}>
                            <p>Just now</p>
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