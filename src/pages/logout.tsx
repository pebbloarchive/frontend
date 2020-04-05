import { usePulse } from 'pulse-framework';
import { AccountData } from '../core/controllers/account/account.state';
import { Account } from '../core';
import { useEffect } from 'react';
import Router from 'next/router';

const Page = () => {
    const [logged] = usePulse(Account.isUserLoggedIn);
    const [username] = usePulse([AccountData.username])
    const logout = async () => {
        await Account.logout(true);
        Router.replace('/login');
    }
    useEffect(() => {
        if(!logged) Router.replace('/login');
    });
    return (
        <div className="logout-landing">
            <div className="logout">
                <h1 className="logout-title">Log out</h1>
    <p className="logout-message">Are you sure you want to log out of <span>{ username }</span>?</p>
        <button className="logout-btn logout-1">Cancel</button>
        <button onClick={ logout } className="logout-btn logout-2">Log out</button>
        <style jsx>{`
        .logout-landing{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#f0f2f5}.logout{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#fff;width:250px;padding:30px;border-radius:2px}.logout-title{font-size:20px;font-weight:600}.logout-message{margin-bottom:30px;font-size:14px;opacity:.8}.logout-message span{font-weight:600}.logout-message span::before{content:"@"}.logout-btn{padding:8px 20px;font-size:12px;font-weight:600;cursor:pointer}.logout-1{border-radius:5px}.logout-2{float:right;background-color:#e07f7f;color:#f5f5f5;border-radius:100px}.logout-2:hover{background-color:#ce6f6f}
        `}
        </style>
            </div>
        </div>
    )
}

export default Page;