import Link from 'next/link';
// import styles from '../auth.module.css';
import styles from '@pebblo/css/auth.module.css';

const Loader = () => {
  return (
    <>
        <div className={styles.post_loader}>
            <div className={styles.post_loader_author}>
                <span className={styles.post_loader_avatar}></span>
                <section>
                    <span className={styles.post_loader_name}></span>
                    <span className={styles.post_loader_username}></span>
                </section>
            </div>
            <div className={styles.post_loader_description}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </>
  )
}

export default Loader;