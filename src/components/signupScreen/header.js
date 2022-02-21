import React from "react";
import logo from "../../netflix_logo.svg";
import './header.css'

const Header = () => {
    return(
      <div className={'signupScreen__header'}>
          <img src={logo} className="app_logo" alt="logo" />
      </div>
  )
}

export default Header;
