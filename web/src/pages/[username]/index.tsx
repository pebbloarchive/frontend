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
import Posts from '../../components/general/Posts';
import Suspended from '../../components/general/Suspended';
import Feed from '../../components/general/profile/home/Feed';
import styles from '../../components/styles/profile/profile.module.css';

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
      // let isFollowing = await core.accounts.routes.getRelationships();
      // if(user.followers.includes(user.id)) {
      //   await core.accounts.routes.unfollowUser(user.id);
      //   following(false);
      // } else {
      //   await core.accounts.routes.followUser(user.id);
      //   following(true);
      // }
      if(user.followers.includes(user.id)) {
        following(true);
      } else {
        following(false);
      }
      console.log(followed);
    }

    return (
      <button className={styles.follow_account} onClick={buttonClick} 
      onMouseEnter={() => (hovered(true))}
      onMouseLeave={() => (hovered(false))}><strong>
        { followed && hovering ? <>Unfollow</> : <>Follow{followed ? 'ing' : ''}</> }
      </strong></button>
    )
  }

  const Insights = () => {
    const buttonClick = () => {
      Router.push('')
    }
    return (
      // MAKE THIS ONLY SHOW WHEN YOU'RE ON SOMEONE ELSES' ACCOUNT AND REMOVE /INSIGHTS
      <button className={styles.follow_account} onClick={buttonClick}><strong>
        <>Follow</>
      </strong></button>
    )
  }

  return (
    <>
      <Head>
  <title>{user.name} (@{user.username}) {user.followersCount} Followers</title>
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

        <div className={styles.information}>
          <div className={styles.avatar}>
            <img src={user.avatar ? user.avatar : 'https://cdn.discordapp.com/attachments/596156721928470547/746173257866018866/unknown.png'} alt={`${current.name} || ${current.username}`}/>
            
            <div className={styles.badge}>
              <div className={styles.verified}>
                <img src="/icons/verified.png" alt=""/>
                <span>Verified</span>
              </div>
              <div className={styles.support}>
                <img src="/icons/premium.png" alt=""/>
                <span>Support</span>
              </div>
              <div className={styles.developer}>
                <img src="/icons/developer.png" alt=""/>
                <span>Developer</span>
              </div>
            </div>

          </div>
        </div>
        <div className={styles.about}>
          <h1 className={styles.name}>{user.name}</h1>
          <h1 className={styles.username}>@{user.username}</h1>
          <p className={styles.description}>{user.description}</p>
        </div>
        <div className={styles.left}>
          <div className={styles.card}>

              <div className={styles.card_content}>
                <div className={styles.statistics}>
                  <Link href="/kyle/followers"><a href="/kyle/followers">
                    <span>{user.followersCount}</span>
                    <h3>Followers</h3>
                  </a></Link>
                  <Link href="/kyle/following"><a href="/kyle/following">
                    <span>{user.followingCount}</span>
                    <h3>Following</h3>
                  </a></Link>
                </div>
              </div>

          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.card}>

              <div className={styles.card_content}>
                <div className={styles.filter}>
                    { process.browser && Router.route === `/${current.username}` ? '' : <Button /> }
                  <a href="">
                    <img src="/icons/gallery.png" alt=""/>
                    Gallery
                  </a>
                  <a href="">
                    <img src="/icons/share.png" alt=""/>
                    Shared Posts
                  </a>
                  <a href="">
                    <img src="/icons/envelope.png" alt=""/>
                    Message
                  </a>
                  <br/>
                  <button>
                    <img src="/icons/invisible.png" alt=""/>
                    Block
                  </button>
                  <Link href="/kyle/report"><a href="/kyle/report">
                    <img src="/icons/flag.png" alt=""/>
                    Report @{user.username}
                  </a></Link>
                  <Link href="/andre/settings"><a href="/andre/settings">
                    <img src="/icons/cog.png" alt=""/>
                    Edit Profile
                  </a></Link>
                  <Link href={`/${current.username}/logout`}><a href={`/${current.username}/logout`}>
                    <img src="/icons/exit.png" alt=""/>
                    Logout
                  </a></Link>
                </div>
              </div>

          </div>
        </div>

      </div>
    </div>




{/* MOBILE FRIENDLY TO FIX THE STUPID THING I MADE */}
      <div className={styles.mobile}>
        <div className={styles.mobile_profile}>

          <div className={styles.mobile_profile_navigation}>
            <Link href="/home"><a href="/home" className={styles.mobile_page_explore}></a></Link>
              <h1 className={styles.mobile_profile_username}>@{user.username}</h1>
              {/* REMOVE MOBILE_PAGE_SETTINGS WHEN YOU'RE ON YOUR OWN ACCOUNT*/}
            <button className={styles.mobile_page_settings}></button>
          </div>
          <div className={styles.mobile_information}>
            <div className={styles.mobile_images}>
                <img className={styles.mobile_avatar} src={user.avatar ? user.avatar : 'https://cdn.discordapp.com/attachments/596156721928470547/746173257866018866/unknown.png'} alt={`${current.name} || ${current.username}`}/>
                  <section className={styles.mobile_statistics}>
                    <a href="">
                        <span>{user.followersCount}</span>
                        <h3>Followers</h3>
                    </a>
                    <a href="">
                        <span>{user.followingCount}</span>
                        <h3>Following</h3>
                    </a>
                  </section>
            </div>
            <div className={styles.mobile_profile_information}>
              <h1 className={styles.profile_name}>{user.name}</h1>
                <div className={styles.profile_description}>
                  <p>{user.description}</p>
                </div>
            </div>
            <div className={styles.mobile_interactions}>
              { process.browser && Router.route === `/${current.username}` ? '' : <Button /> }
              <Link href={`/message/${user.username}`}><a href={`/message/${user.username}`} className={styles.mobile_messageUser}>Message</a></Link>
            </div>
          </div>

          <div className={styles.mobile_filter}>
            <a href="" className={styles.mobile_filter_profile}></a>
            <a href="" className={styles.mobile_filter_shares}></a>
            {/* <a href="" className={styles.mobile_filter_connections}></a> */}
            <a href="" className={styles.mobile_filter_media}></a>
          </div>

        </div>
      </div>

    <div className={styles.content}>
      <Feed/>
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