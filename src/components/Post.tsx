import styles from '../styles/components/post.module.css';
import { PostInterface } from '../core/interfaces/post.interfaces';

const Post = (props: PostInterface) => {
  return (
    <div className={styles.feed_post}>
      <div className={styles.feed_profile}>
        <a href="">
          <img src={props.author.avatar} alt="" draggable={false} className={styles.feed_avatar} />
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
      <div className={styles.feed_interaction}>
        <button>
          <img src="https://cdn.discordapp.com/attachments/637859135970607131/702393487378874398/heart-filled.png" alt=""/>
          <span>[count]</span>
        </button>
        <button>
          <img src="https://cdn.discordapp.com/attachments/637859135970607131/702394541419790338/speech-bubble.png" alt=""/>
          <span>[count]</span>
        </button>
      </div>
    </div>
  )
}

export default Post;