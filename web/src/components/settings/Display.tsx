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
                            <p>Our AI will warn you if a post may trigger epilepsy.
                                <a href="">More Info.</a>
                        </p>
                    </label>
                </div>
        </div>
        </>
    )
}

export default Page;