import React, { useState } from 'react'
import "./Registion.scss"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';

function Registion() {


   
    
  return (
    <div className="Registion">
        <div className="introduction__box">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us plase login<br/>with your personal info</p>
            <Link to={"/login"} className='button'>SIGN IN</Link>
        </div>
        <div className="registion__box">
            <h1>Create Account</h1>
            <div className="icons">
                <TwitterIcon className='icon'/>
                <FacebookIcon className='icon'/>
                <LinkedInIcon className='icon'/>
            </div>
            <p>or use your email for registration</p>

            <form action="#">
                <div className="inputBox">
                    <input type="text" placeholder='Name' />
                    <PersonOutlineIcon className='Inp__icon'/>
                </div>
                <div className="inputBox">
                    <input type="email" placeholder='Email' />
                    <EmailIcon className='Inp__icon'/>
                </div>
                <div className="inputBox">
                    <input type="password" placeholder='Password' />
                    <LockIcon className='Inp__icon'/>
                </div>
                <button type='submit'>SIGN UP</button>
            </form>
        </div>
    </div>
  )
}

export default Registion