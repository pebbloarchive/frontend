import { usePulse } from 'pulse-framework';
import core from '@pebblo/core';
import styles from '../styles/profile/home/upload.module.css'
import Router from 'next/router';
import { AccountUser } from '@pebblo/core/lib/controllers/accounts/account.interfaces';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Page = () => {
    const [loggedIn, user] = usePulse([core.accounts.state.IS_LOGGED, core.accounts.state.CACHE]);
    const [current]: AccountUser[] = usePulse([core.accounts.collection.selectors.CURRENT]);
    const [active, isActive] = useState(undefined);

    return (
        <>
            <div className={styles.content}>

                <form className={styles.upload}>
                    <h1 className={styles.title}>Create Post</h1>
                        <textarea
                            name=""
                            id=""
                            cols={0}
                            rows={0}
                            placeholder="Write something..."
                        ></textarea>
                        <div className={styles.upload_media}>
                            <img src="https://cdn.discordapp.com/attachments/596156721928470547/778419422738120715/apps.17555.14449609212792458.454eef9f-a0a5-4522-b519-e81aa7b40d6e.jpg" alt=""/>
                        </div>
                    <div className={styles.upload_buttons}>
                        <label>
                            <span>Emoji</span>
                            <img src="/icons/blushing.png" alt=""/>
                        </label>
                        <label>
                            <span>File</span>
                            <img src="/icons/image.png" alt=""/>
                            <input type="file" name="" id=""/>
                        </label>
                    </div>
                    <input type="submit" value="Upload"/>
                </form>

            </div>
        </>
    )
}

export default Page;