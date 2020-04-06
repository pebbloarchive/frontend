import Head from 'next/head';
import Nav from '../../components/Nav';
import Router from 'next/router'
import { Account } from '../../core';
import { Log } from '../../utils';
import { usePulse } from 'pulse-framework';
import { useEffect } from 'react';

const Page = () => {
    const [logged] = usePulse(Account.isUserLoggedIn);

    useEffect(() => {
        if(!logged) Router.replace('/login');
    });
    return (
        <>
        <Head>
            <title>Pebblo Settings</title>
        </Head>
        <Nav />
        <div className="settings">
            <div className="settings-content">
                <h1 className="settings-title">My Account</h1>

                <div className="settings-account settings-medium-box">
                    <div className="settings-account-avatar">
                        <img src="/images/default.jpg" alt="" />
                    </div>
                        <div className="settings-account-info">
                            <form>
                            <h1 className="settings-account-title">Username</h1>
                            
                            <h1 className="settings-account-title">Email</h1>

                            <h1 className="settings-account-title">Password</h1>

                            <hr/>

                            <h1 className="settings-account-title">Profile</h1>

                            <button className="settings-account-button" type="submit">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        <style jsx>
        {`
        .settings{position:absolute;top:0;left:7%;width:93%;height:100%}.settings-content{position:absolute;top:5%;left:50%;transform:translate(-50%);width:90%;margin-bottom:5%}.settings-title{font-size:25px;font-weight:600}.settings-subtitle{font-size:20px;font-weight:600;margin-top:70px}.settings-full-box{position:relative;top:20px;left:0;width:85%;padding:30px}.settings-medium-box{position:relative;top:20px;left:0;width:50%;padding:30px}.settings-unverified{margin-bottom:20px;background-color:#f0a331;color:#fff;border-radius:5px}.settings-unverified p{font-size:20px;padding-bottom:20px}.settings-unverified button{padding:10px 20px;border-radius:5px;background-color:#fff;color:#f0a331;font-weight:600;font-size:14px;transition:.3s}.settings-unverified button:active{opacity:.8}.settings-account{border-radius:5px;background-color:#fff}.settings-account-avatar{position:absolute;display:inline-block;width:150px;height:150px}.settings-account-avatar img{width:100%;height:100%;border-radius:50%}.settings-account-info{position:relative;top:0;left:0;margin-left:200px;width:55%}.settings-account-title{font-size:16px;font-weight:600}.settings-account-info textarea,.settings-account-input{width:100%;padding:10px 12px;border-radius:5px;margin:10px 0 20px;display:block;background-color:#fafafa;font-size:14px;color:#353434}.settings-account-info hr{opacity:0;margin:30px 0}.settings-account-button{display:inline-block;padding:8px 20px;background:linear-gradient(to right,var(--theme-a),var(--theme-b));border-radius:100px;color:#fff;font-size:14px;font-weight:600}.settings-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(100px,1fr));grid-auto-rows:minmax(100px,auto);grid-auto-flow:dense;padding:0}.settings-item{padding:1rem;border-radius:5px;margin-right:10px;margin-bottom:10px;background-color:#fff;cursor:pointer;text-align:left;transition:.1s;transform:scale(.98)}.settings-item:hover{transform:scale(1)}.settings-item:active,.settings-item:focus{transform:scale(1);background-color:#57be84;color:#fff}.settings-item-1{grid-column-end:span 3;grid-row-end:span 1}.settings-item h1{font-size:17px;font-weight:600}.settings-item p{font-size:13px}
        `}
        </style>
        </>
    )
}

export default Page;
