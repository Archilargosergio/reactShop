import React from 'react'
import '@styles/RecoveryPassword.scss';

import logo from '@logos/logo_yard_sale.svg';
import emailIcon from '@icons/email.svg';

const RecoveryPassword = () => {
  return (
    <div className="email-sent">
     <div className="container">
         <img src={logo} alt="logo" id="logo" className="logo" />
         
         <h1 className="tittle">Email has been sent!</h1>
         <p className="subtittle">Please check your inbox for intructions on how to reset the password</p>
        
         <div className="envelope">
         <img src={emailIcon} alt="envelope envelope-image" />
         </div>

         <div className="primary-button">
         <button className="primary-button login-button">Login</button>
         </div>
         
        <p className="text-general text-specific">
            <span> Didn't receive the email? </span>
             <a href="/">Resend</a> 
        </p>
    
     </div>
 </div>
  )
}

export default RecoveryPassword;