import React, { useState } from 'react';
import Router from 'next/router'
import { Account } from '../core';
import { Log } from '../utils';
import { usePulse } from 'pulse-framework';

export default () => {
  const landingLogin = () => {
    let x = document.getElementById("landingBtn");
    let y = document.getElementById("loginImage");
    let z = document.getElementById("landingLogin");
    
        if (x.style.borderRadius === "50%", x.style.transform === "rotate(0deg)",
            y.style.transform === "rotate(0deg)",z.style.top === "-100px") {

            x.style.borderRadius = "5px 50% 50%"
            x.style.transform = "rotate(-45deg)"
            y.style.transform = "rotate(45deg)"
            z.style.top = "0px"
        } else {
            x.style.borderRadius = "50%"
            x.style.transform = "rotate(0)"
            y.style.transform = "rotate(0deg)"
            z.style.top = "-100px"
      }
  }
  const [logged] = usePulse(Account.isUserLoggedIn);
  if (logged) Router.replace('/');
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const doLogin = async (ev) => {
    ev.preventDefault();
    if (!email) return;
    if (!password) return;
    const logged = await Account.login(email, password);
    Log('Application', 'Logging in');
    if (logged.success) return Router.push('/explore');
  }
  return (
    <div className="landing">
        <div className="landing-border">
          <img src="images/person.svg" className="landing-image" />
        </div>
        <div className="landing-content">
          <h1 className="landing-content-title">Share your story with the world</h1>
          <hr/>
          <p className="landing-content-message">Attracting people from around the world together to share stories, meet new friends and have a laugh.</p>
          <a href="" className="landing-getStarted">Get Started</a>
          <a href="" className="landing-whyPebblo">Why Pebblo?
          <span><img src="images/play.png" alt="" /></span>
          </a>
        </div>
        <button onClick={landingLogin} className="landing-login" id="landingBtn">
        <img src="images/user.png" alt="" id="loginImage" />
        </button>
        <form className="landing-loginContent" id="landingLogin">
        <input
            type="email"
            name="login_email"
            placeholder="email"
            required
            value={email}
            onChange={(change) => { setEmail(change.target.value) }}
        />
        <input
            type="password"
            name="login_password"
            placeholder="password"
            required
            value={password}
            onChange={(change) => { setPassword(change.target.value) }}
        />
        <input type="submit" value="login"/>
        </form>
        <style jsx>{`
        .landing{position:absolute;top:0;left:0;width:100%;height:100%}.landing-company{position:absolute;top:0;left:0;font-size:23px;margin:3%}.landing-company span{font-weight:600}.landing-border{position:absolute;top:0;left:0;width:40%;height:60%;background:linear-gradient(to bottom left,var(--theme-b),var(--theme-a));border-bottom-right-radius:10000%;box-shadow:9px 9px 5px rgba(0,0,0,.11)}.landing-image{position:absolute;bottom:-10%;left:20%;margin-left:10%;width:60%;transition:.3s}.landing-content{position:absolute;top:50%;left:45%;width:40%;transform:translate(0,-50%)}.landing-content-title{font-size:50px;font-weight:600;width:500px}.landing-content hr{border:none;display:block;position:relative;left:0;margin:50px 0;padding:0;border-radius:100px;width:200px;height:5px;background:linear-gradient(to right,var(--theme-b),var(--theme-a))}.landing-content-message{width:600px;font-size:20px;margin-bottom:60px}.landing-getStarted{padding:20px 40px;color:#fff;font-size:15px;font-weight:600;border-radius:100px;background:linear-gradient(to bottom right,var(--theme-a),var(--theme-b));box-shadow:7px 7px 5px rgba(0,0,0,.11);margin-right:50px}.landing-whyPebblo{color:var(--color);font-weight:600;padding:15px 0;display:inline-flex;align-items:center}.landing-whyPebblo span{margin-left:20px;width:35px;height:35px;background-color:#76aed3;box-shadow:7px 7px 5px rgba(0,0,0,.11);border-radius:50%;display:inline-flex;align-items:center;justify-content:center;display:none}.landing-whyPebblo img{filter:invert(100%);height:50%}.landing-login{position:fixed;top:0;right:0;margin:30px;width:50px;height:50px;background:linear-gradient(to bottom right,var(--theme-a),var(--theme-b));border-radius:50%;display:flex;justify-content:center;align-items:center;transition:.3s}#loginImage{width:30px;height:30px;filter:invert(100%);transition:.3s}.landing-loginContent{position:fixed;top:-100px;right:100px;margin:30px;height:50px;display:flex;justify-content:center;align-items:center;transition:.3s}.landing-loginContent input{display:inline-block;padding:12px 20px;margin-left:20px;background-color:#e6e7eb;border-radius:100px}.landing-loginContent button{margin-left:-30px;padding:12px 28px;background-color:#bebebe;border-radius:100px;font-size:14px}
        `}
        </style>
      </div>
  )
}