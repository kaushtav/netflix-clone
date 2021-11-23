import React, {useState} from "react";
import logo from "../netflix_logo.svg";
import './header.css'

const Header = ({isHeaderShown}) => {
    const [headerSelected, setHeaderSelected] = useState('Home')
    const options = ['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List' ,'Rewatch']
    return(
      <div id={'header'}  className={isHeaderShown ? 'opaque' : ''}>
          <div className={'header_panel'}>
              <img src={logo} className="App-logo" alt="logo" />
              {
                  options.map((option) => {
                      return (
                          <p
                              key={option}
                              onClick={()=>setHeaderSelected(option)}
                              className={headerSelected===option?'selected':''}>
                              {option}
                          </p>
                      )
                  })
              }
          </div>

      </div>
  )
}

export default Header;
