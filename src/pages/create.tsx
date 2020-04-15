import React, { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router'
import { Account } from '../core';
import { Log } from '../utils';
import { usePulse } from 'pulse-framework';
import Head from 'next/head';

const Page = () => {
  const [logged] = usePulse(Account.isUserLoggedIn);
  if (logged) Router.replace('/');
  const [email, setEmail] = useState(undefined);
  const [username, setUsername] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [password2, setPassword2] = useState(undefined);
  const doLogin = async (ev) => {
    ev.preventDefault();
    if (!email) return;
    if (!password) return;
    const logged = await Account.register(username, email, password, password2);
    Log('Application', 'Logging in');
    if (logged.success) return Router.push('/explore');
  }
  return (
    <>
      <div className="lr-sidebar">
        <h1 className="lr-sidebar-heading">Create <span>Let's create an account.</span></h1>
      </div>
      <div className="lr">
        <div className="lr-content">
          <form onSubmit={doLogin} className="lr-form">
            <input
              type="username"
              name="login_username"
              placeholder="username"
              required
              value={username}
              onChange={(change) => { setUsername(change.target.value) }}
            />
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
            <input
              type="password"
              name="login_password_confirm"
              placeholder="confirm password"
              required
              value={password2}
              onChange={(change) => { setPassword2(change.target.value) }}
            />
            <div className="lr-signin">
              <input type="submit" value="Create"/>
            </div>
          </form>
        </div>
      </div>
      <a href="/login" className="lr-signup">Already have an account? <span>Login</span></a>
    </>
  );
}

export default Page;