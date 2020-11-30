import { GetServerSideProps } from "next";
import Nav from '../../components/Nav';
import NotFound from '../404'
import styles from '../../css/profile/profile.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useFollowMutation, useMeQuery, usePostLazyQuery, usePostQuery, usePostsQuery, useUserQuery } from "../../generated/graphql";
import { withApollo } from "../../components/hooks/withApolloHook";
import { useFetchMorePosts } from "../../components/hooks/useFetchMorePosts";
import { useConvertUnixTimestamp } from "../../components/hooks/useConvertUnixTimestamp";
import { Feed } from '../../components/general/profile/home/Feed'
import Loader from "../../components/loader/Post";

const Username = () => {
  // const { data, loading, error } = useUserQuery({
    //   variables: { username: router.query.username?.toString() }
    // });
    
    // if (loading && data?.user) {
  //   return <p>Loading...</p>
  // }
  
  // if (!data || !data.user || data.user.errors) {
    //   return <NotFound />
  // }

  
  // const user = data.user.user;
  // // const { data: self } = useMeQuery();
  
  const router = useRouter();
  const username = router.query.username?.toString() || "";
  const { data: meData } = useMeQuery();
  const { data: userData } = useUserQuery({
    variables: { username: username }
  });
  const [follow] = useFollowMutation();
  const { data, error, loading, fetchMore, variables } = usePostsQuery({
    variables: {
      limit: 14,
      cursor: null
    },
    notifyOnNetworkStatusChange: true
  });
  useFetchMorePosts(data, loading, fetchMore, variables);
  const { date } = useConvertUnixTimestamp(userData?.user?.user?.createdAt);

  if(!loading && !data) {
    return (
      <p>query failed hmmm</p>
    )
  }

  if(userData?.user.user === null) {
    return <NotFound/>
  }

  if(!data && loading) {
    return <Loader/>
  }

  return (
    <>
      <Nav />
      <div className={styles.content}>
        <div className={styles.profile}>
          <div className={styles.information}>
            <div className={styles.avatar}>
              <img src={userData?.user ? userData?.user.user?.avatar : '/icons/default.png'} alt={`${userData?.user.user?.name} || ${userData?.user.user?.username}`} />
            </div>
          </div>
          <div className={styles.about}>
            <h1 className={styles.name}>{userData?.user.user?.name} {userData?.user.user?.verified ? <img className={styles.badge} src="icons/verified.png" alt="" /> : ''}</h1>
            <h1 className={styles.username}>@{userData?.user.user?.username}</h1>
            <p className={styles.description}>{userData?.user.user?.description}</p>
          </div>
          <div className={styles.left}>
            <div className={styles.card}>

              <div className={styles.card_content}>
                <div className={styles.statistics}>
                  <Link href=""><a href="">
                    <span>{userData?.user.user?.followers.length}</span>
                    <h3>Followers</h3>
                  </a></Link>
                  <Link href=""><a href="">
                    <span>{userData?.user.user?.following.length}</span>
                    <h3>Following</h3>
                  </a></Link>
                </div>
              </div>


            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.card}>
              <div className={styles.card_content}>
                { meData?.me?.username === username ?
                  <div className={styles.filter}>
                    <a href="">
                      <img src="/icons/gallery.png" alt="" />
                      Gallery
                    </a>
                      <a href="">
                      <img src="/icons/share.png" alt="" />
                      Shared Posts
                    </a>                    
                    <Link href="/settings"><a href="/settings">
                      <img src="/icons/cog.png" alt="" />
                    Edit Profile
                  </a></Link>
                    <Link href="/logout"><a href="/logout">
                      <img src="/icons/exit.png" alt="" />
                    Logout
                  </a></Link>
                  </div>
                  :
                  <div className={styles.filter}>
                  <a href="">
                    <img src="/icons/gallery.png" alt="" />
                    Gallery
                  </a>
                    <a href="">
                    <img src="/icons/share.png" alt="" />
                    Shared Posts
                  </a>
                  <Link href={`/message/${userData?.user.user?.username}`}><a href={`/message/${userData?.user.user?.username}`}>
                    <img src="/icons/envelope.png" alt="" />
                          Message
                      </a></Link>
                  <button>
                    <img src="/icons/invisible.png" alt="" />
                        Block
                      </button>
                  <button>
                    <img src="/icons/flag.png" alt="" />
                        Report @{userData?.user.user?.username}
                  </button>
                </div>                  
                }
              </div>
            </div>
          </div>
        </div>
        {data?.posts.posts.map(
              (post) => post.creator.username === username && (
                  <Feed key={post.id} post={post} />
                )
        )}
        <div>
          {data && data.posts.hasMore ? (
                <Loader/>
              ) : (
                <p></p>
          )}
        </div>
      </div>

      {/* MOBILE STUFF */}

      <div className={styles.mobile}>
        <div className={styles.mobile_profile}>
          <div className={styles.mobile_profile_navigation}>
            <Link href="/home">
              <a href="/home" className={styles.mobile_page_explore}>
              </a></Link>
            <h1 className={styles.mobile_profile_username}>@{userData?.user.user?.username}</h1>
            <button className={styles.mobile_page_settings}></button>
          </div>
          <div className={styles.mobile_information}>
            <div className={styles.mobile_images}>
              <img className={styles.mobile_avatar} src={userData?.user ? userData?.user.user?.avatar : ''} alt={`${userData?.user.user?.name} || ${userData?.user.user?.username}`} />
              <section className={styles.mobile_statistics}>
                <a href="">
                  <span>0</span>
                  <h3>Followers</h3>
                </a>
                <a href="">
                  <span>0</span>
                  <h3>Following</h3>
                </a>
              </section>
            </div>
            <div className={styles.mobile_profile_information}>
              <h1 className={styles.profile_name}>{userData?.user.user?.name}</h1>
              <p className={styles.profile_description}>{userData?.user.user?.description}</p>
            </div>
            <div className={styles.mobile_interactions}>
              { meData?.me?.username === username ? '' : <p>Button</p> }
              <Link href={`/message/${userData?.user.user?.username}`}><a href={`/message/${userData?.user.user?.username}`} className={styles.mobile_messageUser}>Message</a></Link>
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
    </>
  )
}

export default withApollo({ ssr: true})(Username);
