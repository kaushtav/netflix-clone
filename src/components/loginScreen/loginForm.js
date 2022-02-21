import React, {useState} from "react";
import './loginForm.css'
import {useNavigate} from "react-router-dom";
import {signInWithEmailAndPassword} from "../../helpers/firebase";

const LoginForm = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const userLogin = () => {

        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!email||!re.test(email)) {
            setError('You must enter a valid email address.')
            return false;
        }
        if(!password) {
            setError('You must enter a password.')
            return false;
        }
        signInWithEmailAndPassword(email,password).then(()=>{
        }).catch((err) => setError(err))
    }
  return(
      <div className={'loginScreen__form'}>
          <h1>Sign In</h1>
          <input
              type={'email'}
              placeholder={'Email Address'}
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
          />
          <input
              type={'password'}
              placeholder={'Password'}
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
          />
          <button onClick={()=>userLogin()}>Sign In</button>
          <div>
              <div>
                  <input type="checkbox" defaultChecked={true}/>
                  <span>Remember Me</span>
              </div>
              <a href={'https://www.netflix.com/in/LoginHelp'}>Need help?</a>
          </div>
          <p>New to Netflix?
              <span onClick={()=>{navigate('/signup')}}>Sign up now</span>
          </p>
          <p style={{fontSize:'0.8rem'}}>This page is protected by Google reCAPTCHA to ensure you're not a bot.
          </p>
      </div>
  )
}

export default LoginForm;
