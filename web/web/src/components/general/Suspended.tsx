import Nav from '../Nav';
import Link from 'next/link';
import styles from '../../components/styles/profile/profile.module.css';

const Page = (props) => {
  return (
    <>
      <div className={styles.content}>
        {/* @ts-ignore */}
        <center>
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
        {/* @ts-ignore */}
        </div></center>
        </div>
      <Nav/>
    </>
  )
}

export default Page;
