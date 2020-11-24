import Link from 'next/link';
import styles from '../styles/auth.module.css';
import { AccountUser } from '@pebblo/core/lib/controllers/accounts/account.interfaces';

const Loader = (props: AccountUser) => {
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