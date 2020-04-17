import React, { useState } from 'react';
import Router from 'next/router'
import { Account } from '../core';
import { Log } from '../utils';
import { usePulse } from 'pulse-framework';
import styles from '../styles/components/landing.module.css';

export default () => {
  const landingLogin = () => {
    let x = document.getElementById("landingBtn");
    let y = document.getElementById("loginImage");
    let z = document.getElementById("landingLogin");
    
        if (x.style.borderRadius === "50%", x.style.transform === "rotate(0deg)",
            y.style.transform === "rotate(0deg)",z.style.top === "-100px") {

            x.style.borderRadius = "5px 50% 50%"
            x.style.transform = "rotate(-45deg)"
            y.style.transform = "rotate(45deg)"
            z.style.top = "0px"
        } else {
            x.style.borderRadius = "50%"
            x.style.transform = "rotate(0)"
            y.style.transform = "rotate(0deg)"
            z.style.top = "-100px"
      }
  }
  const [logged] = usePulse(Account.isUserLoggedIn);
  if (logged && process.browser) Router.replace('/explore');
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const doLogin = async (ev) => {
    ev.preventDefault();
    if (!email) return;
    if (!password) return;
    const logged = await Account.login(email, password);
    Log('Application', 'Logging in');
    if (logged.success) return Router.push('/explore');
  }
  return (
    <div className={styles.landing}>
        <div className={styles.landing_border}>
          <img src="images/person.svg" className={styles.landing_image} />
        </div>
        <div className={styles.landing_content}>
          <h1 className={styles.landing_content_title}>Share your story with the world</h1>
          <hr/>
          <p className={styles.landing_content_message}>Attracting people from around the world together to share stories, meet new friends and have a laugh.</p>
          <a href="" className={styles.landing_getStarted}>Get Started</a>
          <a href="" className={styles.landing_whyPebblo}>Why Pebblo?
          <span><img src="images/play.png" alt="" /></span>
          </a>
        </div>
        <button onClick={landingLogin} className={styles.landing_login} id={styles.landingBtn}>
        <img src="images/user.png" alt="" id={styles.loginImage} />
        </button>
        <form className={styles.landing_loginContent} id={styles.landingLogin} onSubmit={doLogin}>
        <input
            type="email"
            name="login_email"
            placeholder="email"
            required
            value={email}
            onChange={(change) => { setEmail(change.target.value) }}
        />
        <input
            type="password"
            name="login_password"
            placeholder="password"
            required
            value={password}
            onChange={(change) => { setPassword(change.target.value) }}
        />
        <input type="submit" value="login"/>
        </form>
      </div>
  )
}