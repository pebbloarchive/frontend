import styles from '@pebblo/css/profile/explore.module.css'
import Link from 'next/link';
// import Logged from '../../components/general/Logged';


const Page = () => {
    return (
        <>
            <div className={styles.explore}>
                <div className={styles.header}>
                    <form className={styles.header_search}>
                        <input
                            type="search"
                            name=""
                            id=""
                            placeholder="Search for keywords or accounts..."
                        />
                        <input type="submit" value="GO"/>
                    </form>
                    <img src="/images/cloud.png" alt="" className={styles.header_cloud}/>
                </div>
            </div>
            
        </>
    )
}

export default Page;