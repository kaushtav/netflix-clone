import React from "react";
import logo from "../../netflix_logo.svg";
import './header.css'
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    return(
      <div className={'landingScreen__header'}>
              <img src={logo} className="app_logo" alt="logo" />
              <div>
                  <p  className={'signin_button'} onClick={()=>{navigate('/login')}}>Sign In</p>
              </div>
      </div>
  )
}

export default Header;
