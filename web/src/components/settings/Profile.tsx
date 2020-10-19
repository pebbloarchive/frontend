import styles from '../styles/settings/settings.module.css'
import core from '@pebblo/core';
import { usePulse } from 'pulse-framework';
import { AccountBody } from '@pebblo/core/lib/controllers/accounts/account.interfaces';
import React, { useState } from 'react';
import Link from 'next/link';

const Page = () => {
    const [loggedIn] = usePulse([core.accounts.state.IS_LOGGED, core.accounts.state.CACHE]);
    const [current]: AccountBody[] = usePulse([core.accounts.collection.selectors.CURRENT]);
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
        <title>@{current.username} | Edit Profile</title>

                <div className={styles.content}>
                    <h1 className={styles.title}>Account Details</h1>
                        <form className={styles.edit_account}>
                            <label>
                                <button className={styles.settings_lightshot_trigger} onClick={onClick}>
                                    {loggedIn ? <img src={current.avatar} draggable={false} alt={`${current.username}`}/> : '' ? !loggedIn : '' }
                                    { clicked ? <Context /> : '' }
                                </button>
                            </label>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Full Name"
                                defaultValue={current.name}
                                spellCheck="false"
                                required
                            />
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Username"
                                defaultValue={current.username}
                                spellCheck="false"
                                required
                            />
                            <input
                                type="email"
                                name=""
                                id=""
                                placeholder="Email Address"
                                defaultValue={current.email}
                                spellCheck="false"
                                required
                            />

                            <hr/>
                            <h1 className={styles.title}>Public Messages</h1>
                            <h1 className={styles.subtitle}>Biography</h1>
                            <textarea
                                name=""
                                id=""
                                cols={0}
                                rows={3}
                                placeholder="Tell us about yourself!"
                                defaultValue={current.description}
                            />

                            <h1 className={styles.subtitle}>Signature</h1>
                            <p className={styles.note}>Signatures will be automatic messages you've written under the recent posts you have made.</p>
                            <textarea
                                className={styles.height}
                                name=""
                                id=""
                                cols={0}
                                rows={5}
                                placeholder="#put #some #hashtags #or #tell #people #about #yourself"
                                // defaultValue={current.description}
                            />

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