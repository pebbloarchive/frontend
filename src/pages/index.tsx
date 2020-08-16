import React, { useState } from 'react';
import Router from 'next/router'
import { Account } from '../core';
import { Log } from '../utils';
import { usePulse } from 'pulse-framework';
import styles from '../styles/components/landing.module.css';

export default () => {
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
    <>
      <div className={styles.landing}>

        <div className={styles.wallpaper}>
          <div className={styles.wallpaper_bar}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={styles.landing_content}>
          <h1>
            A new way to Share Your Story
          </h1>
          <p>Attracting people from around the world together.</p>
          <a href="/create">Start Your Journey!</a>
        </div>
        <div className={styles.landing_phone}></div>
      </div>

      <div className={styles.content}>
        
        <div className={styles.how}>
          <h1>What can you do?</h1>
          <p>There are a lot of exciting stuff going on that we would love for you to enjoy, here are a few.</p>

            <div className={styles.how_item}>
              <img src="https://cdn.discordapp.com/attachments/596156721928470547/741254218882482227/share-gradient.png" alt=""/>
              <h1><span>1.</span> Share Posts</h1>
              <p>Share your favourite posts on your profile or to your friends.</p>
            </div>
            <div className={styles.how_item}>
              <img src="https://cdn.discordapp.com/attachments/596156721928470547/741254191787278455/gift-gradient.png" alt=""/>
              <h1><span>2.</span> Gain Rewards</h1>
              <p>Earn rewards and unlock special features on your account.</p>
            </div>
            <div className={styles.how_item}>
              <img src="https://cdn.discordapp.com/attachments/596156721928470547/741254236704079912/messages-gradient.png" alt=""/>
              <h1><span>3.</span> Communicate</h1>
              <p>Communicate with your friends and comment on peoples posts.</p>
            </div>
        </div>

        <a href="/login" className={styles.login}>
          <img src="https://cdn.discordapp.com/attachments/596156721928470547/741599640935333939/login.png" alt=""/>
        </a>

      </div>
    </>
  )
}