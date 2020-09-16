import styles from '../styles/profile/messages.module.css'
import core from '@pebblo/core';
import { usePulse } from 'pulse-framework';
import { AccountUser } from '@pebblo/core/lib/controllers/accounts/account.interfaces';

const Page = () => {
    const [current]: AccountUser[] = usePulse([core.accounts.collection.selectors.CURRENT]);

    return (
        <>
            <div className={styles.messages}>
                <div className={styles.context}>
                    <section>

                        <div className={styles.recipient}>
                            <section>
                            <span>kyle &middot; timeStamp</span>
                                test
                            </section>
                        </div>

                        <div className={styles.sender}>
                            <section>
                            <span>You &middot; timeStamp</span>
                                test
                            </section>
                        </div>

                    </section>
                </div>
            </div>
        </>
    )
}

export default Page;