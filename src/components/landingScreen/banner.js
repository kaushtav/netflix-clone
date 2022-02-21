import React from "react";
import './banner.css'
import {useNavigate} from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate();
  return(
      <div className={'landingScreen__banner'} style={{background:`linear-gradient(to top,rgba(0,0,0,0.8) 0,rgba(0,0,0,0) 60%, rgba(0,0,0,0.8) 100%),url(https://assets.nflxext.com/ffe/siteui/vlv3/5dd45df7-33f1-4274-97ea-e9c6aca69dad/ed1cb962-411d-4e43-bad2-33f07ae8e341/IN-en-20211108-popsignuptwoweeks-perspective_alpha_website_medium.jpg)`}}>

      <p className={'h1'}>Unlimited movies, TV shows and more.</p>
          <p className={'h2'}>Watch anywhere. Cancel anytime.</p>
          <p className={'h3'}>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className={'landingScreen__login'}>
              <form>
                  <input type={'email'} placeholder={'Email Address'}/>
                  <button className={'landingScreen__signup'} onClick={()=>navigate('/signup')}>
                      Get Started
                  </button>
              </form>
          </div>
      </div>
  )
}
export default Banner;
