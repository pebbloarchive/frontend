import Head from 'next/head';
import { GetServerSideProps } from 'next';
import core from '@pebblo/core';
import { usePulse } from 'pulse-framework';
import { AccountUser as UserProps } from '@pebblo/core/lib/controllers/accounts/account.interfaces'
import { useState } from 'react';
import Router from 'next/router';
import { Log } from '../components/utils';

// Components
import NotFound from './404';
import Nav from '../components/general/Nav'
import Posts from '../components/general/Posts';
import Suspended from '../components/general/Suspended';
import styles from '../components/styles/profile.module.css';

export default ({ user }: {
  user: UserProps,
}) => {
  const [loggedIn] = usePulse([core.accounts.state.IS_LOGGED])
  const [current] = usePulse([core.accounts.collection.selectors.CURRENT]);
  if(!user || !user.username) return <NotFound />
  if(user.suspended) return <Suspended {...user}/>
  const Button = () => {
    const [set, isSet] = useState(false);
    const [hovering, hovered] = useState(false);
    const [followed, following] = useState(false);

    const buttonClick = async () => {
      if(!loggedIn) return Router.push('/login');
      // if(current.id === user.id) return;
      let isFollowing = await core.accounts.routes.getRelationships();
      if(isFollowing.following.includes(user.id)) {
        await core.accounts.routes.unfollowUser(user.id);
        following(false);
      } else {
        await core.accounts.routes.followUser(user.id);
        following(true);
      }
      console.log(followed);
    }

    return (
      <button className={styles.follow_account} onClick={buttonClick} 
      onMouseEnter={() => (hovered(true))}
      onMouseLeave={() => (hovered(false))}><strong>
        {/* { hovering && followed ? <>Unfollow</> : <>Follow{followed ? 'ing' : ''}</> } */}
        { hovering && followed ? <>Unfollow</> : <>Follow{followed ? 'ing' : ''}</> }
      </strong></button>
    )
  }

  return (
    <>
      <Head>
      <title>{user.name} (@{user.username}) / Pebblo</title>
        <meta property="og:type" content="website"/>
        <meta name="description" content={user.description}/>
        <meta property="og:title" content={`${user.name} - @${user.username}`}/>
        <meta property="og:url" content={`https://pebblo.org/${user.username}`}/>
        <meta property="og:description" content={`${user.description}\n\n&copy; pebblo.org`}/>
        <meta property="og:image" content={user.avatar}/>
        <meta name="theme-color" content="#FF274E"/>
        {/* <meta name="og:site_name" content={`Followers             Posts\n${user.followersCount}             0`}/> */}
      </Head>
      <Nav />
      <div className={styles.content}>
        <div className={styles.profile}>
              <div className={styles.profile_images}>
                  <img className={styles.avatar} src={user.avatar ? user.avatar : 'https://cdn.discordapp.com/attachments/596156721928470547/746173257866018866/unknown.png'} alt=""/>
                  { user.permissions.includes('verified') ? (<img className={styles.badge} src="icons/verified.png" alt=""/>) : '' }
              </div>
              <div className={styles.names}>
                  <div className={user.permissions.includes('admin') ? styles.names_content_staff : styles.names_content }>
                      <h1>
                        { user.permissions.includes('admin') ? <img src="icons/developer.png" alt=""/> : '' }
                        {user.name}</h1>
                      <p>@{user.username}</p>
                  </div>
              </div>
              <div className={styles.bio}>
                  <p>{user.description}</p>
              </div>
          </div>
      </div>

      <div className={styles.additional_information}>
          <div className={styles.statistics}>
              <a href="">
                  <span>{user.followersCount}</span>
                  <h3>Followers</h3>
              </a>
              <a href="">
                  {/* BY DEFAULT >> CHANGE TO FOLLOWING */}
                  <span>{user.followingCount}</span>
                  {/* <h3>Subscribers</h3> */}
                  <h3>Following</h3>
              </a>
          </div>
          <div className={styles.interaction}>
              <Button />
              <a href="" className={styles.rewards_account}><strong>
                Rewards
              </strong></a>
          </div>
      </div>

      {
        
      }
      
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async(context) => {
  const username = context.params.username as string;
  const user = await core.accounts.routes.getUser(username);
  return {
    props: {
      user
    }
  }
}