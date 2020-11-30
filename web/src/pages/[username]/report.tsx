import Head from 'next/head';
import { GetServerSideProps } from 'next';
import core from '@pebblo/core';
import { usePulse } from 'pulse-framework';
import { AccountUser as UserProps } from '@pebblo/core/lib/controllers/accounts/account.interfaces'
import { useState } from 'react';
import Router from 'next/router';
import { getAvatar, Log } from '../../components/utils';
import Link from 'next/link';

// Components
import NotFound from '../404';
import Nav from '../../components/general/Nav';
import Suspended from '../../components/general/Suspended';
import Content from '../../components/general/profile/Post/Single';
import Overlay from '../../components/general/profile/home/Report';
import styles from '../../components/styles/profile/profile.module.css';

export default ({ user }: {
  user: UserProps,
}) => {
  const [loggedIn] = usePulse([core.accounts.state.IS_LOGGED])
  const [current] = usePulse([core.accounts.collection.selectors.CURRENT]);
  if (!user || !user.username) return <NotFound />
  if (user.suspended) return <Suspended {...user} />

  return (
    <>
      <Head>
        <title>{user.name} (@{user.username}) {user.followersCount} Followers</title>
        <meta property="og:type" content="website" />
        <meta name="description" content={user.description} />
        <meta property="og:title" content={`${user.name} - @${user.username}`} />
        <meta property="og:url" content={`https://pebblo.org/${user.username}`} />
        <meta property="og:description" content={`${user.description}\n\n&copy; pebblo.org`} />
        <meta property="og:image" content={user.avatar} />
        <meta name="theme-color" content="#FF274E" />
      </Head>
      <Nav/>
      <Overlay/>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const username = context.params.username as string;
  const user = await core.accounts.routes.getUser(username);
  return {
    props: {
      user
    }
  }
}