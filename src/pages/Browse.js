import React, { useEffect, useState} from "react";
import Header from "../components/browse/header";
import Banner from "../components/browse/banner";
import Sections from "../components/browse/sections";
import {useUser} from "../context/userContext";
import {auth, getUser} from "../helpers/firebase";
import {useNavigate} from "react-router-dom";
import ProfileSelect from "../components/browse/profileSelect";
import SearchScreen from "../components/browse/searchScreen";
import MyList from "../components/browse/myList";

const Browse = () => {
    const navigate = useNavigate()
    const [profileScreen, setProfileScreen] = useState(true)
    const [headerSelected,setHeaderSelected] = useState('Home');
    const [headerOpaque, setHeaderOpaque] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const {profiles, handleLogin, selectedProfile} = useUser()
    const user = auth.currentUser;

    const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        console.log(scrollTop)
        if (scrollTop > 400 ) {
            setHeaderOpaque(true);
        } else if (scrollTop <= 400 ) {
            setHeaderOpaque(false);
        }
    }

    useEffect(()=>{
        if(!user) {
            navigate('/')
        }
        else {
            if(!profiles.length) {
                getUser(user.uid).then((userData)=>{
                    handleLogin(userData)
                    if(selectedProfile >=0){
                        setProfileScreen(false)
                    }
                })
            }
            else if( selectedProfile >=0) {
                setProfileScreen(false)
            }
        }
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[profiles, selectedProfile])
    if(profileScreen) {
        return <ProfileSelect  setProfileScreen={setProfileScreen}/>
    }

  return(
      <div>
        <Header
            setProfileScreen={setProfileScreen}
            headerSelected={headerSelected}
            setHeaderSelected={setHeaderSelected}
            setSearchQuery={setSearchQuery}
            searchQuery={searchQuery}
            headerOpaque={headerOpaque}
        />
          {searchQuery?(
              <SearchScreen searchQuery={searchQuery}/>
          ):
              headerSelected==='My List'?(
                  <MyList/>
              ):(
                  <div>
                      <Banner/>
                      <Sections/>
                  </div>
          )}
      </div>
  )
}

export default Browse;
