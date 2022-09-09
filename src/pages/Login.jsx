import React from 'react';
import '../styles/Login.scss';

const Login = () => {
    return (
 <div className="login-container">
   <div className="form-container">
    <img src='/logos/logo_yard_sale.svg' alt="logo" className="logo" />

    <h1 className="title">Create a new parsword</h1>

    <p className="subtitle">Create a new password for your account</p>

    <form action="/" className="form">

    <label htmlFor="password" className="password">Password</label>
    <input type="password" id="password" placeholder="********" className="input input-password" />

    <label htmlFor="new-password" className="new-password">Password</label>
    <input type="password" id="new-password" placeholder="********" className="input input-newpassword" />

    <input type="submit" value="Confirm" id="button-confirm" className="primary-button login-button" />
    
    </form>
   </div>
 </div>
    );
}
export default Login;