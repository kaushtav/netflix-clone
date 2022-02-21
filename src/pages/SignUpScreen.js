import React, {useEffect, useState} from "react";
import Header from "../components/signupScreen/header";
import './SignUpScreen.css'
import SignupForm from "../components/signupScreen/signupForm";
import {auth, registerWithEmailAndPassword} from "../helpers/firebase";
import {useNavigate} from "react-router-dom";

const SignUpScreen = () => {

    const navigate = useNavigate();
    useEffect(()=>{
        return auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                navigate('/browse')
            } else {
            }
        });
    },[navigate])
    return(
        <div className={'signupScreen'} style={{background:`linear-gradient(to top,rgba(0,0,0,0.5) 0,rgba(0,0,0,0.5) 100%),url(https://assets.nflxext.com/ffe/siteui/vlv3/5dd45df7-33f1-4274-97ea-e9c6aca69dad/ed1cb962-411d-4e43-bad2-33f07ae8e341/IN-en-20211108-popsignuptwoweeks-perspective_alpha_website_medium.jpg)`}}>
            <Header/>
            <SignupForm handleRegistration={registerWithEmailAndPassword}/>
        </div>
    )
}

export default SignUpScreen;
