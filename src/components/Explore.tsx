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

            <div className={styles.explore_content}>
                <h1 className={styles.explore_title}>Trending</h1>
                <h1 className={styles.explore_title}>Feed</h1>
            </div>
        </div>
    )
}

export default Explore;