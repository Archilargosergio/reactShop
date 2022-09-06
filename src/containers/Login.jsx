import React from 'react'

const Login = () => {
    return (
 <div className="login">
   <div className="form-container">
    <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />

    <h1 className="title">Create a new parsword</h1>

    <p className="subtitle">Create a new password for your account</p>

    <form action="/" className="form">

    <label for="password" className="password">Password</label>
    <input type="password" id="password" placeholder="********" className="input input-password" />

    <label for="new-password" className="new-password">Password</label>
    <input type="password" id="new-password" placeholder="********" className="input input-newpassword" />

    <input type="submit" value="Confirm" id="button-confirm" className="primary-button login-button" />
    
    </form>
   </div>
 </div>
    );
}
export default Login;