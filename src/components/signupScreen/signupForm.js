import React, {useState} from "react";
import './signupForm.css'
import {useNavigate} from "react-router-dom";
import {auth} from "../../helpers/firebase";
import {useUser} from "../../context/userContext";

const SignupForm = ({handleRegistration}) => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("")
    const register = () => {
        if(!name) {
            setError('You must enter a name.')
            return false;
        }
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!email||!re.test(email)) {
            setError('You must enter a valid email address.')
            return false;
        }
        if(!password) {
            setError('You must enter a password.')
            return false;
        }
        handleRegistration(name,email,password)
            .then().catch((err)=>setError(err))
    }
    return(
        <div className={'signupScreen__form'}>
          <h1>Sign Up</h1>
          <input
              value={name}
              onChange={(e)=>setName(e.target.value)}
              type={'text'}
              placeholder={'Display Name'}
          />
          <input
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              type={'email'}
              placeholder={'Email Address'}
          />
          <input
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              type={'password'}
              placeholder={'Password'}
          />
          <p id={'signupScreen__error'}>{error}</p>
          <button onClick={()=>register()}>Sign Up</button>
          <div/>
          <p>Already a user?
              <span onClick={()=>{navigate('/login')}}>Sign in now</span>
          </p>
          <p style={{fontSize:'0.8rem'}}>This page is protected by Google reCAPTCHA to ensure you're not a bot.
          </p>
        </div>
    )
}

export default SignupForm;
