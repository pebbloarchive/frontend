import styles from '../styles/components/post.module.css';
import { PostInterface } from '../core/interfaces/post.interfaces';

const Post = (props: PostInterface) => {
  return (
    <div className={styles.feed_post}>
      <div className={styles.feed_profile}>
        <a href="">
          <img src="https://cdn.discordapp.com/avatars/583925649807245322/607c1989337e112fbe73ccee25386865.png?size=1024" alt="" draggable={false} className={styles.feed_avatar} />
          <div className={styles.feed_profile_info}>
            <h1 className={styles.feed_profile_username}> { props.author.username } </h1>
            <span className={styles.feed_profile_timeStamp}>{ props.created_at }</span>
          </div>
        </a>
      </div>
      <p className={styles.feed_caption}>
        { props.content }
      </p>
      {/* you forgot images by the way - Andre */}
            {/* <img className={styles.feed_image} src="https://cdn.discordapp.com/attachments/667293886468718592/701025255573159946/unknown.png" alt=""/> */}
    </div>
  )
}

export default Post;