import styles from '../styles/profile/feed.module.css'
import { AccountBody, AccountUser, AccountPosts } from '@pebblo/core/lib/controllers/accounts/account.interfaces';

const Page = ( props: AccountPosts ) => {
    return (
        <>
            <div className={styles.comments}>
                    <h1 className={styles.comments_title}>Comments</h1>
                        <div className={styles.comment}>
                            <a href="" className={styles.comment_author}>
                                <img src="https://cdn.discordapp.com/avatars/583925649807245322/a_16205383e4e17804d4beef8bebe9d2ea.gif?size=1024" alt=""/>
                                <section>
                                    <h1>kyle</h1>
                                    <p>@kyle</p>
                                </section>
                            </a>
                            <div className={styles.comment_caption}>
                                <p>Hello world</p>
                            </div>
                        </div>
                </div>

                <div className={styles.box}>
                    <div className={styles.box_content}>

                        <a href="" className={styles.author}>
                                <img src={props.author_info.avatar} alt=""/>
                                <section>
                                    <h1>{props.author_info.name}</h1>
                                    <p>@{props.author_info.username}</p>
                                </section>
                        </a>

                        <div className={styles.single_caption}>
                            <p>{props.content}</p>
                            {/* <img src={props.attachments} alt=""/> */}
                        </div>



                        <form className={styles.create_comment}>
                            <button className={styles.add_emoji}>
                                <img src="https://cdn.discordapp.com/attachments/596156721928470547/745854061454033076/emoji.png" alt=""/>
                            </button>
                            <input type="text" name="" id="" placeholder="Comment"/>
                            <button type="submit">
                                <img src="https://cdn.discordapp.com/attachments/596156721928470547/746976276216152104/chevron-left.png" alt=""/>
                            </button>
                        </form>
                    </div>
                </div>
        </>
    )
}

export default Page;
