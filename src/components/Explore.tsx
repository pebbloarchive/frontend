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
                <a href="">
                    <img src="https://cdn.discordapp.com/avatars/583925649807245322/607c1989337e112fbe73ccee25386865.png?size=1024" alt=""/>
                    <span className={styles.explore_categories_forYou}>For you</span>
                </a>
                <a href="">
                    <img src="https://cdn.discordapp.com/attachments/596156721928470547/701605548851986522/trending.png" alt=""/>
                    <span>Trending</span>
                </a>
                <a href="">
                    <img src="https://cdn.discordapp.com/attachments/596156721928470547/701604820787658802/around-the-globe.png" alt=""/>
                    <span>Adventure</span>
                </a>
            </div>
        </div>
    )
}

export default Explore;