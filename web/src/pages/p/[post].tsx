import React, { useState } from 'react';
import Router from 'next/router'
import Head from 'next/head';
import { AccountPosts } from '@pebblo/core/lib/controllers/accounts/account.interfaces';
import core from '@pebblo/core';
import { usePulse } from 'pulse-framework';
import { GetServerSideProps } from 'next';

// components
import styles from '../../components/styles/navbar.module.css';
import Nav from '../../components/general/Nav'
import Feed from '../../components/general/Posts'
import NotFound from '../404';

export default ({ post }: {
  post: AccountPosts,
}) => {
  // const [loggedIn] = usePulse([core.accounts.state.IS_LOGGED]);
  if(!post || !post.id) return <NotFound/>
    
  return (
    <>
        <Head>
          <title>{post.name}: "{post.content}" / Pebblo</title>
            <meta property="og:type" content="website"/>
            <meta name="description" content={post.content}/>
            <meta name="subtitle" content={`${post.name} (@${post.username}), ${post.avatar}`}/>
            <meta name="author" content={post.avatar}/>
            <meta property="og:description" content={`${post.content}\n\n&copy; pebblo.org`}/>
            <meta name="theme-color" content="#FF274E"/>
        </Head>
        <Nav/>
      <Feed {...post}/>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async(context) => {
  const postId = context.params.post as string;
  const post = await core.accounts.routes.getPost(postId);
  return {
    props: {
      post
    }
  }
}