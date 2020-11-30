import styles from '../css/notfound.module.css';

const Page = () => {
return (
       <>
       <title>404 Not Found</title>
         <h1 className={styles.notFound_text}>404</h1>
          <div className={styles.notFound}>
            <h1>Oops...</h1>
            <h3>The page you're looking for doesn't exist.</h3>
            <a href="/home">Take me home</a>
          </div>
       </>
    )
}
Page.theme = 'light'
export default Page;