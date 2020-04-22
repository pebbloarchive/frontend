import styles from '../styles/components/nav.module.css';

const Nav = () => {
  return (
    <div className={styles.navigation}>
      <a className={styles.navigation_icon}>
        <span style={{ width: '100%' }}></span>
        <span style={{ width: '70%' }}></span>
        <span style={{ width: '50%' }}></span>
      </a>
      <div className={styles.navigation_content}>
        <div className={styles.navigation_links}>
          <a href="profile" title="Profile"><img src="https://quak.ovh/44fw8G1.png" draggable={false} alt="" /></a>
          {/* <a href="library" title="Library"><img src="https://quak.ovh/9CTKBHB.png" alt="" /></a> */}
          <a href="explore" title="Explore"><img src="https://cdn.discordapp.com/attachments/596156721928470547/701294239463637002/compass.png" draggable={false} alt="" /></a>
          <a href="notifications" title="Notifications"><img src="https://cdn.discordapp.com/attachments/637859135970607131/702396304046817390/notifications.png" draggable={false} alt="" /></a>
          <a href="messages" title="Messages"><img src="https://cdn.discordapp.com/attachments/596156721928470547/701295179297980466/chat-bubble.png" draggable={false} alt="" /></a> {/* https://quak.ovh/kGUKdDY.svg */}
        </div>
      </div>

      <a href="" className={styles.navigation_createPost}>
        <div className={styles.navigation_createPost_image}></div>
      </a>
    </div>
  )
}

export default Nav;