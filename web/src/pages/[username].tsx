import Head from 'next/head';
import { GetServerSideProps } from 'next';
import core from '@pebblo/core';
import { AccountUser as UserProps } from '@pebblo/core/lib/controllers/accounts/account.interfaces'

// Components
import NotFound from './404';
import Nav from '../components/general/Nav'
import styles from '../components/styles/profile.module.css';
import { useState } from 'react';

export default ({ user }: {
  user: UserProps,
}) => {
  if(!user || !user.username || user.suspended) return <NotFound />
  const followUser = async () => {
    await core.accounts.routes.followUser(user.id);
  };

  const unfollowUser = async () => {
    await core.accounts.routes.unfollowUser(user.id);
  };

  const Button = () => {
    const [set, isSet] = useState(false);
    const [hovering, hovered] = useState(false);
    const [follow, following] = useState(false);

    const buttonClick = async () => {
      let isFollowing = await core.accounts.routes.getRelationships();
      if(isFollowing.following.includes(user.id)) {
        await core.accounts.routes.unfollowUser(user.id);
        following(false)
      } else {
        await core.accounts.routes.followUser(user.id);
        following(true);
      }
    }

    return (
      <a className={styles.follow_account} onClick={buttonClick}>
        { following ? <>Unfollow</> : <>Follow</> }
      </a>
    )
  }

  return (
    <>
      <Head>
      <title>{user.name} (@{user.username}) / Pebblo</title>
        <meta property="og:type" content="website"/>
        <meta name="description" content={user.description}/>
        <meta property="og:title" content={`${user.name} - @${user.username}`}/>
        <meta name="description" content={user.description}/>
        <meta property="og:url" content={`https://pebblo.org/${user.username}`}/>
        <meta property="og:description" content={user.description}/>
        <meta property="og:image" content={user.avatar}/>
      </Head>
      <Nav />
      <div className={styles.content}>

              <div className={styles.profile}>
                  <div className={styles.profile_images}>
                      <img className={styles.avatar} src={user.avatar ? user.avatar : 'https://cdn.discordapp.com/attachments/596156721928470547/746173257866018866/unknown.png'} alt=""/>
                      {/* { user.permissions.includes('admin') ? (<img className={styles.badge} src="https://cdn.discordapp.com/attachments/704179636879228949/749738812917153933/unknown.png" alt=""/>) 
                      : user.permissions.includes('verified') ? (<img className={styles.badge} src="https://cdn.discordapp.com/attachments/596156721928470547/745873552384983050/unknown.png" alt=""/>) : '' } */}
                      { user.permissions.includes('verified') ? (<img className={styles.badge} src="https://cdn.discordapp.com/attachments/596156721928470547/745873552384983050/unknown.png" alt=""/>) : '' }
                  </div>
                  <div className={styles.names}>
                      <div className={styles.names_content}>
                          <h1>{user.name}</h1>
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
              {/* <a className={styles.follow_account} onClick={followUser}>
                  Follow
              </a> */}
              <Button />
              <a href="" className={styles.rewards_account}>
                  Rewards
              </a>
          </div>
      </div>
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