import React, {useState} from "react";
import './profileSelect.css'
import placeholder from '../../assets/images/avatars/placeholder.png'
import avatar1 from '../../assets/images/avatars/Avatar_01.png'
import avatar2 from '../../assets/images/avatars/Avatar_02.png'
import avatar3 from '../../assets/images/avatars/Avatar_03.png'
import avatar4 from '../../assets/images/avatars/Avatar_04.png'
import avatar5 from '../../assets/images/avatars/Avatar_05.png'
import avatar6 from '../../assets/images/avatars/Avatar_06.png'
import avatar7 from '../../assets/images/avatars/Avatar_07.png'
import avatar8 from '../../assets/images/avatars/Avatar_08.png'
import avatar9 from '../../assets/images/avatars/Avatar_09.png'
import avatar10 from '../../assets/images/avatars/Avatar_10.png'
import {useUser} from "../../context/userContext";
import AddProfile from "./addProfile";

const avatars = [avatar1,avatar2,avatar3,avatar4,avatar5,avatar6,avatar7,avatar8,avatar9,avatar10]

const ProfileSelect = ({setProfileScreen}) => {
    const [addProfileScreen, setAddProfileScreen] = useState(false);
    const {profiles, updateSelectedProfile, selectedProfile} = useUser()

   if(addProfileScreen){
       return <AddProfile setAddProfileScreen={setAddProfileScreen}/>
   }

  return(
      <div className={'browseScreen__profileSelect'}>
          {profiles.map((profile, index)=> {
              return(
                  <div className={'browseScreen__profile'} key={index} onClick={()=> {
                      if (selectedProfile===index){
                        setProfileScreen(false)
                      } else {
                          updateSelectedProfile(index)
                      }
                  }}>
                      <img src={avatars[profiles[index].avatar]} alt={'profile'}/>
                      <p>{profile.name}</p>
                  </div>
              )
          })}
          {profiles.length<4&&<div className={'browseScreen__profile'} onClick={() => {
              setAddProfileScreen(true)
          }}>
              <img src={placeholder} alt={'profile'}/>
              <p>Add Profile</p>
          </div>}
      </div>
  )
}
export default ProfileSelect
