const Page = () => {
return (
    <>
    <h1 className="notFound-text">404</h1>
    <div className="notFound">
        <h1>Oops...</h1>
        <h3>The page you're looking for doesn't exist.</h3>
        <a href="https://pebblo.org/">Take me home</a>
    </div>
    <style jsx>{`.notFound{position:absolute;top:50%;left:100px;transform:translate(0,-50%)}.notFound h1{font-weight:600;font-size:80px;color:#585866}.notFound h3{font-size:20px;opacity:.7;font-weight:600;margin:5px 0 50px}.notFound a{display:inline-block;padding:12px 30px;background:linear-gradient(to right,var(--theme-a),var(--theme-b));border:solid 4px rgba(255,255,255,.363);border-left:none;border-right:none;color:#fff;border-radius:100px;font-weight:600;font-size:14px;text-transform:uppercase}.notFound-text{position:fixed;top:50%;transform:rotate(20deg) translate(0,-50%);right:200px;font-size:300px;font-weight:600;text-transform:uppercase;opacity:.1;filter:blur(5px)}@media only screen and (max-width:1000px){.notFound{left:50%;transform:translate(-50%,-50%);width:50%;text-align:center}.notFound-text{left:50%;transform:translate(-50%,-50%);width:100%;text-align:center;font-size:200px;opacity:.050}}`}</style>
    </>
)
}

export default Page;