import styles from '../styles/feed.module.css'

const Page = () => {
    return (
        <>
                <div className={styles.comments}>
                    <h1 className={styles.comments_title}>Comments</h1>
                        <div className={styles.comment}>
                            <a href="" className={styles.comment_author}>
                                <img src="https://cdn.discordapp.com/avatars/583925649807245322/a_16205383e4e17804d4beef8bebe9d2ea.gif?size=1024" alt=""/>
                                <section>
                                    <h1>Kyle</h1>
                                    <p>@kyle</p>
                                </section>
                            </a>
                            <div className={styles.comment_caption}>
                                <p>I want to become a carrot so I can sit in the garden.</p>
                            </div>
                        </div>
                </div>

                <div className={styles.box}>
                    <div className={styles.box_content}>

                        <a href="" className={styles.author}>
                                <img src="https://cdn.discordapp.com/avatars/215302985826304010/5e65d38cf852733f000359a5713231a2.png?size=1024" alt=""/>
                                <section>
                                    <h1>Andre</h1>
                                    <p>@andre</p>
                                </section>
                        </a>

                        <div className={styles.single_caption}>
                            <p>Working on <a href="">@Pebblo</a> offline</p>
                            <img src="https://pbs.twimg.com/media/EfSj6cfUcAAL8vy?format=jpg&name=small" alt=""/>
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
