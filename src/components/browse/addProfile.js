import React, {useState} from "react";
import {useUser} from "../../context/userContext";
import avatar1 from "../../assets/images/avatars/Avatar_01.png";
import avatar2 from "../../assets/images/avatars/Avatar_02.png";
import avatar3 from "../../assets/images/avatars/Avatar_03.png";
import avatar4 from "../../assets/images/avatars/Avatar_04.png";
import avatar5 from "../../assets/images/avatars/Avatar_05.png";
import avatar6 from "../../assets/images/avatars/Avatar_06.png";
import avatar7 from "../../assets/images/avatars/Avatar_07.png";
import avatar8 from "../../assets/images/avatars/Avatar_08.png";
import avatar9 from "../../assets/images/avatars/Avatar_09.png";
import avatar10 from "../../assets/images/avatars/Avatar_10.png";
import './addProfile.css'
import {updateProfiles} from "../../helpers/firebase";

const avatars = [avatar1,avatar2,avatar3,avatar4,avatar5,avatar6,avatar7,avatar8,avatar9,avatar10]


const AddProfile = ({setAddProfileScreen}) => {

    const [avatarSelected, setAvatarSelected] = useState(0)
    const [profileName, setProfileName] = useState('')
    const {profiles,addProfile} = useUser()

    const addProf = () => {
        if (!profileName){
            setAddProfileScreen(false)
            return false;
        }
        addProfile({name:profileName,avatar:avatarSelected,list:[]})
        updateProfiles([...profiles,{name:profileName,avatar:avatarSelected,list:[]}])
        setAddProfileScreen(false)
    }
    return(
        <div className={'browseScreen__addProfileScreen'}>
            <h1>Select Avatar</h1>
            <div className={'browseScreen__avatars'}>
                {avatars.map((avatar,index) => {
                    return(
                        <img
                            style={{border:avatarSelected===index?'2px solid #fff':'2px solid transparent'}}
                            className={'browseScreen__avatarSelect'}
                            onClick={()=>setAvatarSelected(index)}
                            src={avatar}
                            key={index}
                            alt={`Avatar${index}`}/>
                    )
                })}
            </div>
            <input
                value={profileName}
                onChange={event => setProfileName(event.target.value)}
                className={'browseScreen__nameSelect'}
                type={'text'}
                placeholder={'Enter Profile Name'}
            />
            <button onClick={addProf}>Add Profile</button>
        </div>
    )
}

export default AddProfile;
