export default () => {
  return (
    <div className="comingsoon">
        <div className="content">
          <h1 className="title">Coming soon</h1>
          <p className="bio">Pebblo is currently under construction</p>
            <a href="https://discord.gg/4w9k3yQ"><span>Join our Discord</span></a>
        </div>
        <style jsx>{`
body{color:#fff}.comingsoon{position:fixed;top:0;left:0;width:100%;height:100%;background:url(https://sike.uno/images/cdn/svg-background/background.svg),linear-gradient(to bottom right,var(--theme-a),var(--theme-b));background-size:150%;background-repeat:no-repeat;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-weight:600;text-transform:uppercase;font-size:50px;color:white}.bio{font-size:17px;opacity:.6;margin-bottom:100px;color:white}a{background-color:#fff;padding:20px 50px;border-radius:100px;font-weight:600;font-size:17px;transition:.3s}span{background:-webkit-linear-gradient(var(--theme-a),var(--theme-b));-webkit-background-clip:text;-webkit-text-fill-color:transparent}        
        `}
        </style>
      </div>
  )
}