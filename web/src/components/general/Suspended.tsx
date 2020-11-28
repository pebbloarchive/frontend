import Nav from '../general/Nav';
import Link from 'next/link';
import styles from '../../components/styles/profile/profile.module.css';
import { AccountUser } from '@pebblo/core/lib/controllers/accounts/account.interfaces';

const Page = (props: AccountUser) => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.profile}>
            <div className={styles.avatar}>
            <img src='https://cdn.discordapp.com/attachments/596156721928470547/746173257866018866/unknown.png' alt=""/>
            </div>
            <br/>
            <div className={styles.names}>
                <div className={styles.names_content}>
                  <h1 className={styles.name}>Suspended account</h1>
                  <p className={styles.username}>@{props.username}</p>
                </div>
            </div>
            <div className={styles.description}>
                This account has been suspended due to multiple violations of our <a href="/terms">Terms of Service</a>.
            </div>
        </div>
        </div>
      <Nav/>
    </>
  )
}

export default Page;
