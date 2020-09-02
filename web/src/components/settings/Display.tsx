import styles from '../styles/settings.module.css'

const Page = () => {
    return (
        <>
        <div className={styles.content}>
            <h1 className={styles.title}>Display</h1>
                <div className={styles.setting}>
                    <h1 className={styles.subtitle}>Warnings</h1>
                        <label className={styles.checkbox}>
                            <div className={styles.checkbox_container}>
                                <input type="checkbox" name="" id=""/>
                                <span className={styles.checkbox_box}></span>
                            </div>
                            <h1>Epilepsy warning</h1>
                            {/* <p>People who don't follow you will be able to comment on your posts.
                                <a href="">More Info.</a>
                        </p> */}
                    </label>
                </div>
        </div>
        </>
    )
}

export default Page;