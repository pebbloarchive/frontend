import styles from '../styles/components/post.module.css';
import { PostInterface } from '../core/interfaces/post.interfaces';

const Post = (props: PostInterface) => {
  return (
    <div className="feed-post">
      <div className="feed-profile">
        <a href="">
          <img src="hello" alt="" className="feed-avatar" />
          <div className="feed-profile-info">
            <h1 className="feed-profile-username"> { props.author.username } </h1>
            <span className="feed-profile-timeStamp"> date </span>
          </div>
        </a>
      </div>
      <p className="feed-caption">
        { props.content }
      </p>
    </div>
  )
}

export default Post;