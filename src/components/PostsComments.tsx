import styles from '../styles/components/userpost.module.css';

const Postscomments = () => {
    return (
        <div className={styles.userpost_comments}>

            <h1 className={styles.userpost_comments_title}>
                <span className={styles.userpost_comments_title_text}>Comments</span>
                <span className={styles.userpost_comments_title_counter}>[counter]</span>
            </h1>

            <div className={styles.post_comment}>
                <a href="" className={styles.post_comment_profile}>
                    <img src="https://cdn.discordapp.com/avatars/215302985826304010/54c15631503fc334afae01bd91fe6c3a.png?size=1024" alt=""/>
                    <h1>
                        Andre
                        <span>timeStamp</span>
                    </h1>  
                </a>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium quo vero vel, aperiam blanditiis qui a eius rerum in ut aut doloribus quae perspiciatis quas repellat dignissimos fugit reprehenderit pariatur!
                </p>
            </div>

        </div>
    )
}

export default Postscomments;