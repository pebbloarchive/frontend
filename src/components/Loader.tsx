import styles from '../styles/components/auth.module.css';

const Page = () => {
    return (
    <>
        <div className={styles.loader}>
            <div className={styles.loader_content}>
                <div className={styles.loader_logo}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </>
    )
}

export default Page;