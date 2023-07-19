import React, { useState } from 'react'
import "./Login.scss"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';

function Login() {


   
    
  return (
    <div className="Login">
        <div className="registion__box">
            <h1>Sign In to Your Account</h1>
            <div className="icons">
                <TwitterIcon className='icon'/>
                <FacebookIcon className='icon'/>
                <LinkedInIcon className='icon'/>
            </div>
            <p>or use your email account</p>

            <form action="#">
                
                <div className="inputBox">
                    <input type="email" placeholder='Email' />
                    <EmailIcon className='Inp__icon'/>
                </div>
                <div className="inputBox">
                    <input type="password" placeholder='Password' />
                    <LockIcon className='Inp__icon'/>
                </div>


                <Link to={"#"} className='forgot'>forgot password?</Link>
                <button type='submit'>SIGN IN</button>
            </form>
        </div>
        
        <div className="introduction__box">
            <h1>Hello Friend!</h1>
            <p>Enter your personal details and<br/>start your journey with us</p>
            <Link to={"/"} className='button'>SIGN IN</Link>
        </div>
        
    </div>
  )
}

export default Login