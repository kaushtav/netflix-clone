import React, {useState} from "react";
import logo from "../../netflix_logo.svg";
import SearchIcon from '@material-ui/icons/Search';

import './header.css'
import avatar1 from '../../assets/images/avatars/Avatar_01.png'
import avatar2 from '../../assets/images/avatars/Avatar_02.png'
import avatar3 from '../../assets/images/avatars/Avatar_03.png'
import avatar4 from "../../assets/images/avatars/Avatar_04.png";
import avatar5 from "../../assets/images/avatars/Avatar_05.png";
import avatar6 from "../../assets/images/avatars/Avatar_06.png";
import avatar7 from "../../assets/images/avatars/Avatar_07.png";
import avatar8 from "../../assets/images/avatars/Avatar_08.png";
import avatar9 from "../../assets/images/avatars/Avatar_09.png";
import avatar10 from "../../assets/images/avatars/Avatar_10.png";
import {usePlayer} from "../../context/playerContext";


import {useUser} from "../../context/userContext";
import {logout} from "../../helpers/firebase";
import {useNavigate} from "react-router-dom";

const avatars = [avatar1,avatar2,avatar3,avatar4,avatar5,avatar6,avatar7,avatar8,avatar9,avatar10]

const Header = ({headerOpaque, setProfileScreen,headerSelected,setHeaderSelected, setSearchQuery, searchQuery}) => {
    const [searchActive, setSearchActive] = useState(false)
    const {profiles,selectedProfile, handleLogout} = useUser()
    const navigate = useNavigate();
    const options = ['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List' ]
    const {setCategory, setHeroTrailer, setTrailerDisplayed, setGenres} = usePlayer()
    return(
      <div id={'header'}  className={headerOpaque||searchActive? 'opaque' : ''}>
          <div className={'header_panel'}>
              <img src={logo} className="App-logo" alt="logo" onClick={()=>{
                  if(headerSelected !== 'Home'){
                      setHeaderSelected('Home');
                      setCategory('movies')
                      setGenres()
                      setHeroTrailer()
                      setTrailerDisplayed()

                  }
              }}/>
              {
                  options.map((option) => {
                      return (
                          <p
                              key={option}
                              onClick={()=> {
                                  setHeaderSelected(option)
                                  if(option==='Movies'||option==='Home'){
                                      setCategory('movies')
                                      setGenres()
                                      setHeroTrailer()
                                      setTrailerDisplayed()
                                  }
                                  if(option==='TV Shows'||option==='New & Popular'){
                                      setCategory('series')
                                      setGenres()
                                      setHeroTrailer()
                                      setTrailerDisplayed()
                                  }
                              }}
                              className={headerSelected===option?'selected':''}>
                              {option}
                          </p>
                      )
                  })
              }
          </div>
            <div className={'header_panel'}>
                <div className={'browseScreen__search'} >
                    <SearchIcon onClick={()=> {
                        if(searchActive){
                            setSearchQuery('')
                        }
                        setSearchActive(!searchActive)
                    }}/>
                    <input
                        ref={input => searchActive&&input && input.focus()}
                        type={'text'}
                        className={searchActive?'active':''}
                        placeholder={'Search Movies or TV Series'}
                        value={searchQuery}
                        onChange={(event => setSearchQuery(event.target.value))}
                    />
                </div>
                {profiles.length&&<div className={'browseScreen__dropdown'}>
                    <img src={avatars[profiles[selectedProfile].avatar]} alt={'User'}/>
                    <div className={'browseScreen__menu'}>
                        <p onClick={() => setProfileScreen(true)}>Manage Profiles</p>
                        <p onClick={() => {
                            logout().then(handleLogout())
                            navigate('/')
                        }}>Sign Out</p>
                    </div>
                </div>}
            </div>
      </div>
  )
}

export default Header;
