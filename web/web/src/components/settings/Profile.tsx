import styles from '../styles/settings/settings.module.css'
import React, { useState } from 'react';
import Link from 'next/link';
import { useMeQuery } from '~/generated/graphql';

const Page = () => {
    const { data } = useMeQuery();
    const [clicked, wasClicked] = useState<boolean>(false);

    const onClick = () => {
        if(!clicked) {
            wasClicked(true);
        } else {
            wasClicked(false);
        }
    };

    const Context = () => {
        return (
            <section className={styles.settings_lightshot}>
            </section>
        )
    }

    return (
        <>
        <title>@{data?.me?.username} | Edit Profile</title>

                <div className={styles.content}>
                    <h1 className={styles.title}>Account Details</h1>
                        <form className={styles.edit_account}>
                            <label className={styles.edit_avatar}>
                                {/* <button className={styles.settings_lightshot_trigger} onClick={onClick}> */}
                                    {data?.me ? <img src={data?.me?.avatar} draggable={false} alt={`${data?.me?.username}`}/> : '' }
                                    { clicked ? <Context /> : '' }
                                {/* </button> */}
                                <input type="file" name="" id=""/>
                                {/* <span>Upload Profile</span> */}
                            </label>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Full Name"
                                defaultValue={data?.me?.name}
                                spellCheck="false"
                                required
                            />
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Username"
                                defaultValue={data?.me?.username}
                                spellCheck="false"
                                required
                            />
                            <input
                                type="email"
                                name=""
                                id=""
                                placeholder="Email Address"
                                defaultValue={data?.me?.email}
                                spellCheck="false"
                                required
                            />

                            <hr/>
                            <h1 className={styles.subtitle}>Biography <code>description</code></h1>
                            <textarea
                                name=""
                                id=""
                                cols={0}
                                rows={3}
                                placeholder="Tell us about yourself!"
                                defaultValue={data?.me?.description}
                            />

                            {/* <hr/>

                            <h1 className={styles.title}>Search Engine Optimization</h1>
                            <h1 className={styles.subtitle}>Keywords <code>og:keywords</code></h1>
                            <p className={styles.note}>Type in keywords to get your account found on the internet.</p>
                            <textarea
                                className={styles.height}
                                name=""
                                id=""
                                cols={0}
                                rows={5}
                                placeholder="You can split each keyword by using a comma."
                                defaultValue={current.description}
                            /> */}

                            {/* </textarea> */}
                            
                                <div className={styles.submit}>
                                    <input type="submit" value="Save Changes"/>
                                </div>
                        </form>
                </div>
        </>
    )
}

export default Page;