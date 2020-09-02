import { usePulse } from 'pulse-framework'
import core from '@pebblo/core'
import Router from 'next/router';
import Head from 'next/head';
import { useState } from 'react';
import styles from '../components/styles/auth.module.css'

export default function Page() {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [loggedIn] = usePulse([core.accounts.state.IS_LOGGED]);

  if(loggedIn && process.browser) Router.push('/');

  const userLogin = async (ev) => {
    ev.preventDefault();
    return core.accounts.Login(email, password);
  }

  return (
    <>
    <Head>
      <title>Pebblo - Login</title>
    </Head>
      {/* <form onSubmit={userLogin}>
        <input
          type="email"
          name="login_email"
          placeholder="Email"
          required
          onChange={(change) => { setEmail(change.target.value) }}
        />
        <input
          type="password"
          name="login_password"
          placeholder="password"
          required
          onChange={(change) => { setPassword(change.target.value) }}
        />
        <input type="submit" value="Login"/>     
      </form> */}


        <div className={styles.auth_login}>
          <form className={styles.auth_login_form} onSubmit={userLogin}>
            <h1>Welcome Back.</h1>
              <input
                type="email"
                name="login_email"
                placeholder="Email Address"
                required
                onChange={(change) => { setEmail(change.target.value) }}
              />
              <input
                type="password"
                name="login_password"
                placeholder="Password"
                required
                onChange={(change) => { setPassword(change.target.value) }}
              />

              <hr/>

              <p>or</p>

              <div className={styles.auth_login_alternative}>
                <button>
                  <img src="https://cdn.discordapp.com/attachments/637859135970607131/750596570176815134/google.png" alt=""/>
                  <span>Log in with <strong>Google</strong></span>
                </button>
              </div>

              <input type="submit" value="Login"/>     

          </form>
        </div>
    </>
  )
}