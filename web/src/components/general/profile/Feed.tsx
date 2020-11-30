import { PostSnippetFragment } from '../../../generated/graphql';
import { useConvertUnixTimestamp } from '../../hooks/useConvertUnixTimestamp';
import React from "react";
import styles from '../../../css/profile/home/feed.module.css';

interface PostProps {
    post: PostSnippetFragment;
}

const Feed: React.FC<PostProps> = ({ post }) => {
    const { minutes, hours, date } = useConvertUnixTimestamp(post.created_at);
    return (
        <>
            <div className={styles.feed}>

                <a href="/p/POSTID" className={styles.post}>
                    <a href="/andre" className={styles.user}>
                        <img src="https://cdn.discordapp.com/avatars/215302985826304010/5e65d38cf852733f000359a5713231a2.png?size=1024" alt=""/>
                        <div className={styles.names}>
                            <h1><img src="https://cdn.discordapp.com/attachments/596156721928470547/745873552384983050/unknown.png" alt=""/> Name</h1>
                            <p>@name</p>
                        </div>
                    </a>
                    <div className={styles.caption}>
                        <div className={styles.content}>
                            <p>{post.content}</p>
                            <img src={post.media[0]} alt=""/>
                        </div>
                    </div>
                    <div className={styles.interactions}>
                        <a href="/p/POSTID#comments"><img src="https://cdn.discordapp.com/attachments/596156721928470547/746527468898484344/comment.png" alt=""/>
                        <span>{post.subs}</span></a>
                        <a href=""><img src="https://cdn.discordapp.com/attachments/596156721928470547/746527493787353148/heart.png" alt=""/>
                        <span>{post.likes.length}</span></a>
                        <a href=""><img src="https://cdn.discordapp.com/attachments/596156721928470547/746527492461822093/share.png" alt=""/>
                        <span>{post.shares.length}</span></a>

                        <div className={styles.timeStamp}>
                            <p>
                            {minutes > 60
                        ? `${hours} hour${hours !== 1 ? "s" : ""}`
                        : `${minutes} minute${minutes !== 1 ? "s" : ""}`}
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}

export default Feed;
