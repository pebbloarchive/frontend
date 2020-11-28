import Link from 'next/link';
import React from 'react';
import styles from '../../components/styles/profile/home/feed.module.css';
import { getAvatar } from '../utils';
import Loader from '../loader/Post';

const Page = (): JSX.Element => {
    return (
        <>
            <div className={styles.feed}>

                <div className={styles.post}>
                    <div className={styles.heading}>
                        <Link href=""><a href="" className={styles.heading_author}>
                            <img src="https://cdn.discordapp.com/avatars/583925649807245322/a_16cd3afea657534ec9ad356789d1152c.gif?size=1024" alt="" className={styles.heading_author_avatar}/>
                                <section>
                                    <h1 className={styles.heading_author_name}><img src="https://cdn.discordapp.com/emojis/747011360524599318.png?v=1" alt="" className={styles.heading_author_badge}/>Kyle</h1>
                                    <p className={styles.heading_author_username}>@Kyle</p>
                                </section>
                        </a></Link>
                        <button className={styles.heading_more}>
                            <span className={styles.heading_ellipsis}></span>
                        </button>
                    </div>
                    <span className={styles.timeStamp}>Just Now</span>

                    <div className={styles.content}>
                        <div className={styles.caption}>
                            <p>Sometimes I like to go in the garden and pretend that I'm a carrot.</p>
                        </div>
                        {/* <div className={styles.media}>
                            <img src="https://cdn.discordapp.com/attachments/596156721928470547/778419422738120715/apps.17555.14449609212792458.454eef9f-a0a5-4522-b519-e81aa7b40d6e.jpg" alt=""/>
                        </div> */}
                    </div>

                    <div className={styles.interaction}>
                        <Link href=""><a href="">
                            <img src="/icons/comment.png" alt=""/>
                            <span>0</span>
                        </a></Link>
                        <button>
                            <img src="/icons/heart.png" alt=""/>
                            <span>0</span>
                        </button>
                        <button>
                            <img src="/icons/share.png" alt=""/>
                            <span>0</span>
                        </button>
                    </div>

                    <label className={styles.post_add_comment}>
                        <img src={getAvatar('andre')} alt="" className={styles.post_add_comment_avatar}/>
                        <form className={styles.post_add_comment_form}>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Write a comment..."
                            />
                            <div className={styles.post_add_comment_interaction}>
                                <label>
                                    <img src="/icons/blushing.png" alt=""/>
                                </label>
                                <label>
                                    <img src="/icons/gallery.png" alt=""/>
                                    <input type="file" name="" id=""/>
                                </label>
                            </div>
                        </form>
                    </label>
                    <div className={styles.post_buttons}>
                        
                        <Link href=""><a href="" className={styles.singlePost_link}>
                            <img src="/icons/menus/ellipsis.png" alt=""/>
                        </a></Link>

                    </div>
                </div>

                <div className={styles.left}>

                    <div className={styles.card}>
                        <h1 className={styles.card_title}>Trending</h1>
                        <div className={styles.card_content}>

                            <Link href=""><a href="" className={styles.card_profile}>
                                <img src={getAvatar('andre')} className={styles.card_avatar}/>
                                <section className={styles.card_user}>
                                    <h1 className={styles.card_name}>
                                        <img src="https://cdn.discordapp.com/emojis/747011360524599318.png?v=1" alt="" className={styles.card_badge}/>
                                        Andre</h1>
                                    <h1 className={styles.card_username}>@Andre</h1>
                                </section>
                            </a></Link>

                            <Link href=""><a href="" className={styles.card_profile}>
                                <img src={getAvatar('andre')} className={styles.card_avatar}/>
                                <section className={styles.card_user}>
                                    <h1 className={styles.card_name}>
                                        <img src="https://cdn.discordapp.com/emojis/747011360524599318.png?v=1" alt="" className={styles.card_badge}/>
                                        Andre</h1>
                                    <h1 className={styles.card_username}>@Andre</h1>
                                </section>
                            </a></Link>

                            <Link href=""><a href="" className={styles.card_profile}>
                                <img src={getAvatar('andre')} className={styles.card_avatar}/>
                                <section className={styles.card_user}>
                                    <h1 className={styles.card_name}>
                                        <img src="https://cdn.discordapp.com/emojis/747011360524599318.png?v=1" alt="" className={styles.card_badge}/>
                                        Andre</h1>
                                    <h1 className={styles.card_username}>@Andre</h1>
                                </section>
                            </a></Link>

                            <Link href=""><a href="" className={styles.card_profile}>
                                <img src={getAvatar('andre')} className={styles.card_avatar}/>
                                <section className={styles.card_user}>
                                    <h1 className={styles.card_name}>
                                        <img src="https://cdn.discordapp.com/emojis/747011360524599318.png?v=1" alt="" className={styles.card_badge}/>
                                        Andre</h1>
                                    <h1 className={styles.card_username}>@Andre</h1>
                                </section>
                            </a></Link>

                            <Link href=""><a href="" className={styles.card_profile}>
                                <img src={getAvatar('andre')} className={styles.card_avatar}/>
                                <section className={styles.card_user}>
                                    <h1 className={styles.card_name}>
                                        <img src="https://cdn.discordapp.com/emojis/747011360524599318.png?v=1" alt="" className={styles.card_badge}/>
                                        Andre</h1>
                                    <h1 className={styles.card_username}>@Andre</h1>
                                </section>
                            </a></Link>

                        </div>
                    </div>

                    <div className={styles.card}>
                        <h1 className={styles.card_title}>People to follow</h1>
                        <div className={styles.card_content}>

                            <Link href=""><a href="" className={styles.card_profile}>
                                <img src={getAvatar('andre')} className={styles.card_avatar}/>
                                <section className={styles.card_user}>
                                    <h1 className={styles.card_name}>
                                        <img src="https://cdn.discordapp.com/emojis/747011360524599318.png?v=1" alt="" className={styles.card_badge}/>
                                        Andre</h1>
                                    <h1 className={styles.card_username}>@Andre</h1>
                                </section>
                            </a></Link>

                            <Link href=""><a href="" className={styles.card_profile}>
                                <img src={getAvatar('andre')} className={styles.card_avatar}/>
                                <section className={styles.card_user}>
                                    <h1 className={styles.card_name}>
                                        <img src="https://cdn.discordapp.com/emojis/747011360524599318.png?v=1" alt="" className={styles.card_badge}/>
                                        Andre</h1>
                                    <h1 className={styles.card_username}>@Andre</h1>
                                </section>
                            </a></Link>

                            <Link href=""><a href="" className={styles.card_profile}>
                                <img src={getAvatar('andre')} className={styles.card_avatar}/>
                                <section className={styles.card_user}>
                                    <h1 className={styles.card_name}>
                                        <img src="https://cdn.discordapp.com/emojis/747011360524599318.png?v=1" alt="" className={styles.card_badge}/>
                                        Andre</h1>
                                    <h1 className={styles.card_username}>@Andre</h1>
                                </section>
                            </a></Link>

                        </div>
                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.card}>
                        <div className={styles.card_title}>Latest News</div>
                        <div className={styles.card_content}>

                            <Link href=""><a href="" className={styles.card_news}>
                                <h1 className={styles.card_news_title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                            </a></Link>

                            <Link href=""><a href="" className={styles.card_news}>
                                <h1 className={styles.card_news_title}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi culpa cumque consequuntur reiciendis!</h1>
                            </a></Link>

                        </div>
                    </div>
                    
                    <div className={styles.card}>
                        <h1 className={styles.card_title}>Trending</h1>
                        <div className={styles.card_content}>
                            
                            <Link href=""><a href="" className={styles.card_tag}>
                                <p className={styles.card_tag_count}>
                                    <span>[count]</span>
                                    &middot;
                                    Posts
                                </p>
                                <h1 className={styles.card_tag_item}>object[Object]</h1>
                            </a></Link>
                            
                            <Link href=""><a href="" className={styles.card_tag}>
                                <p className={styles.card_tag_count}>
                                    <span>[count]</span>
                                    &middot;
                                    Posts
                                </p>
                                <h1 className={styles.card_tag_item}>object[Object]</h1>
                            </a></Link>
                            
                            <Link href=""><a href="" className={styles.card_tag}>
                                <p className={styles.card_tag_count}>
                                    <span>[count]</span>
                                    &middot;
                                    Posts
                                </p>
                                <h1 className={styles.card_tag_item}>object[Object]</h1>
                            </a></Link>
                            
                            <Link href=""><a href="" className={styles.card_tag}>
                                <p className={styles.card_tag_count}>
                                    <span>[count]</span>
                                    &middot;
                                    Posts
                                </p>
                                <h1 className={styles.card_tag_item}>object[Object]</h1>
                            </a></Link>
                            
                            <Link href=""><a href="" className={styles.card_tag}>
                                <p className={styles.card_tag_count}>
                                    <span>[count]</span>
                                    &middot;
                                    Posts
                                </p>
                                <h1 className={styles.card_tag_item}>object[Object]</h1>
                            </a></Link>

                        </div>
                    </div>
                    
                    <div className={styles.card}>
                        <h1 className={styles.card_title}>Popular Today</h1>
                        <div className={styles.card_content}>
                            
                            <Link href=""><a href="" className={styles.card_tag}>
                                <p className={styles.card_tag_count}>
                                    <span>[count]</span>
                                    &middot;
                                    Posts
                                </p>
                                <h1 className={styles.card_tag_item}>object[Object]</h1>
                            </a></Link>
                            
                            <Link href=""><a href="" className={styles.card_tag}>
                                <p className={styles.card_tag_count}>
                                    <span>[count]</span>
                                    &middot;
                                    Posts
                                </p>
                                <h1 className={styles.card_tag_item}>object[Object]</h1>
                            </a></Link>
                            
                            <Link href=""><a href="" className={styles.card_tag}>
                                <p className={styles.card_tag_count}>
                                    <span>[count]</span>
                                    &middot;
                                    Posts
                                </p>
                                <h1 className={styles.card_tag_item}>object[Object]</h1>
                            </a></Link>

                        </div>
                    </div>
                </div>


                {/* <Loader/> */}

            </div>

        </>
    )
}

export default Page;