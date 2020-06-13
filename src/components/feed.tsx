import styles from '../styles/components/post.module.css';
import { PostInterface } from '../core/interfaces/post.interfaces';

const Post = (props: PostInterface) => {
  return (
    <div className={styles.feed_post}>
      <div className={styles.feed_user}>
        <img src="https://cdn.discordapp.com/avatars/215302985826304010/fbcf44a65980ab1542eaaaf8fe636272.png?size=1024" alt=""/>
          <div className={styles.feed_user_content}>
            <h1>@andre</h1>
            <p>timeStamp</p>
          </div>
      </div>
              <div className={styles.feed_caption}>
                Code Block
                  <code className={styles.feed_codeBlock}>
                    #codeBlock
                  </code>
              </div>
    </div>
  )
}

export default Post;