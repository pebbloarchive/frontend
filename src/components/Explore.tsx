import styles from '../styles/components/explore.module.css';

const Explore = () => {
    return (
        <div className={styles.explore}>
            <div className={styles.explore_topBar}>
                <form className={styles.explore_search}>
                        <input
                            type="text"
                            name="explore_search"
                            placeholder="Search"
                        />
                        <button
                            type="submit"
                        >GO</button>
                </form>
            </div>

            <div className={styles.explore_categories}>
                <a href="explore" className={styles.explore_categories_box}>
                    <img className={styles.explore_categories_forYou_image} src="https://cdn.discordapp.com/avatars/215302985826304010/54c15631503fc334afae01bd91fe6c3a.png?size=1024" alt=""/>
                    <span className={styles.explore_categories_forYou_title}>For you</span>
                </a>
                
                <a href="explore" className={styles.explore_categories_box}>
                    <img src="https://cdn.discordapp.com/attachments/596156721928470547/701603716398317658/dining-room.png" alt=""/>
                    <span>Food</span>
                </a>
            </div>
        </div>
    )
}

export default Explore;