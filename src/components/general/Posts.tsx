import styles from '../styles/feed.module.css'

const Page = () => {
    return (
        <>
                <div className={styles.comments}>
                    <h1 className={styles.comments_title}>Comments</h1>
                        <div className={styles.comment}>
                            <div className={styles.comment_author}>
                                <img src="https://cdn.discordapp.com/avatars/583925649807245322/a_16205383e4e17804d4beef8bebe9d2ea.gif?size=1024" alt=""/>
                                <section>
                                    <h1>Kyle</h1>
                                    <p>@kyle</p>
                                </section>
                            </div>
                            <div className={styles.comment_caption}>
                                <p>I want to become a carrot so I can sit in the garden.</p>
                            </div>
                        </div>
                </div>
        </>
    )
}

export default Page;