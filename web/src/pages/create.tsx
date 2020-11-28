import { usePulse } from 'pulse-framework'
import core from '@pebblo/core'
import Router from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from '../components/styles/auth.module.css'
import Nav from '../components/general/Menu'

const Create = () => {
  const [username, setUsername] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [loggedIn] = usePulse([core.accounts.state.IS_LOGGED]);

  if(loggedIn && process.browser) Router.push('/explore');

  const userCreate = async (ev) => {
    ev.preventDefault();
    return core.accounts.routes.Create({ username, email, password });
  }

  return (
    <>
    <Head>
      <title>Pebblo - Create</title>
    </Head>
      <div className={styles.auth_right}>
        <img src="images/svg/woman-smartphone.svg"/>
      </div>

      <Link href="/"><a href="/" className={styles.auth_go_back}><span></span></a></Link>

      <form className={styles.auth_form} onSubmit={userCreate}>
        <h1 className={styles.auth_title}>Create an account.</h1>
          <input
            className={styles.auth_form_username}
            type="text"
            name="create_username"
            placeholder="Username"
            required
            onChange={(change) => { setUsername(change.target.value) }}
          />
          <input
            className={styles.auth_form_email}
            type="email"
            name="create_email"
            placeholder="Email Address"
            required
            onChange={(change) => { setEmail(change.target.value) }}
          />
          <input
            className={styles.auth_form_password}
            type="password"
            name="create_password"
            placeholder="Password"
            required
            onChange={(change) => { setPassword(change.target.value) }}
          />

          <input type="submit" value="Create"/>
      </form>
    </>
  )
}

Create.theme = 'light';
export default Create;