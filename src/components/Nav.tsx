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
          <a href="profile" title="Profile" className={styles.navigation_profile}><img src="https://cdn.discordapp.com/avatars/215302985826304010/54c15631503fc334afae01bd91fe6c3a.png?size=1024" draggable={false} alt="" /></a>
          {/* <a href="library" title="Library"><img src="https://quak.ovh/9CTKBHB.png" alt="" /></a> */}
          <a href="explore" title="Explore"><img src="https://cdn.discordapp.com/attachments/596156721928470547/703106144591151215/search.png" draggable={false} alt="" /></a>
          <a href="notifications" title="Notifications"><img src="https://cdn.discordapp.com/attachments/596156721928470547/703106874073022474/melting-heart.png" draggable={false} alt="" /></a>
          <a href="messages" title="Messages"><img src="https://cdn.discordapp.com/attachments/596156721928470547/703107939925491752/speech-bubble.png" draggable={false} alt="" /></a> {/* https://quak.ovh/kGUKdDY.svg */}
        </div>
      </div>

      <a href="" className={styles.navigation_createPost}>
        <div className={styles.navigation_createPost_image}></div>
      </a>
    </div>
  )
}

export default Nav;