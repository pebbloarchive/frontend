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
          <a href="profile" title="Profile"><img src="https://quak.ovh/44fw8G1.png" alt="" /></a>
          <a href="library" title="Library"><img src="https://quak.ovh/9CTKBHB.png" alt="" /></a>
          <a href="explore" title="Explore"><img src="https://quak.ovh/3Pe8otm.png" alt="" /></a>
          <a href="settings" title="Settings"><img src="https://quak.ovh/kGUKdDY.svg" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Nav;