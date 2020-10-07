import { usePulse } from 'pulse-framework';
import core from '@pebblo/core';
import styles from '../styles/profile/upload.module.css'
import Router from 'next/router';
import { AccountUser } from '@pebblo/core/lib/controllers/accounts/account.interfaces';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Page = () => {
    const [loggedIn, user] = usePulse([core.accounts.state.IS_LOGGED, core.accounts.state.CACHE]);
    const [current]: AccountUser[] = usePulse([core.accounts.collection.selectors.CURRENT]);
    const [active, isActive] = useState(undefined);
    const [clicked, wasClicked] = useState<boolean>(false);

    const onClick = () => {
        if(!clicked) {
            wasClicked(true);
        } else {
            wasClicked(false);
        }
    };

    return (
        <>
            <div className={styles.content}>
                <form className={styles.upload}>
                    <input
                        className={styles.title_post}
                        type="text"
                        name=""
                        id=""
                        placeholder="Title your post [optional]"
                    />
                    <textarea
                        name=""
                        id=""
                        cols={0}
                        rows={7}
                        placeholder="Write a caption..."
                    ></textarea>
                    <label className={styles.upload_media}>
                        <input
                            type="file"
                            name=""
                            id=""
                        />
                        <span>Add Image/Video</span>
                    </label>
                    <input
                        type="submit"
                        value="Post"
                    />
                </form>
            </div>
        </>
    )
}

export default Page;