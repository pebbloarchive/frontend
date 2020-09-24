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
                            <a href="/"><img className={styles.recipient_avatar} src="https://cdn.discordapp.com/avatars/583925649807245322/a_9c3215b6241e826bc16cfd48a02d9f21.gif?size=1024" alt="Name(Fix Later)"/></a>
                                <section>
                                    <h1>kyle</h1>
                                    <p>The messages look awesome!</p>
                                </section>
                        </div>

                        <div className={styles.sender}>
                            <img className={styles.sender_avatar} src={current.avatar} alt={current.name}/>
                                <section>
                                    <h1>{current.username}</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nam laboriosam non at adipisci sit tempora magnam sapiente? Voluptatibus ipsum adipisci itaque veritatis provident vero. Qui impedit ducimus omnis temporibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex corporis adipisci praesentium non consectetur ipsa quisquam, neque cupiditate? Temporibus, laboriosam porro? Eveniet, iste libero neque pariatur eligendi consequuntur optio veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolor, asperiores architecto incidunt eos repellendus sed aperiam cupiditate atque eaque consequatur nemo modi unde, in similique dicta aspernatur nostrum quos!</p>
                                </section>
                        </div>

        <form className={styles.message}>
            {/* <label></label> */}
            <input
                type="text"
                name=""
                id=""
                placeholder="Write a message..."
            />
        </form>

                    </section>
                </div>
            </div>
        </>
    )
}

export default Page;