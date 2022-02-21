import {createContext, useContext, useReducer} from "react";

const UserContext = createContext(undefined);

const actions = {
    ADD_PROFILE:'ADD_PROFILE',
    UPDATE_PROFILES: 'UPDATE_PROFILES',
    UPDATE_SELECTED_PROFILE: 'UPDATE_SELECTED_PROFILE',
    UPDATE_NAME: 'UPDATE_NAME',
    UPDATE_EMAIL: 'UPDATE_EMAIL',
    UPDATE_ID: 'UPDATE_ID',
};

function reducer(state, action) {
    console.log(action.type);
    switch (action.type) {
        case actions.UPDATE_NAME:
            return {...state,name:action.value}
        case actions.UPDATE_ID:
            return {...state,uid:action.value}
        case actions.UPDATE_EMAIL:
            return {...state,email:action.value}
        case actions.UPDATE_PROFILES:
            return {...state, profiles:action.value};
        case actions.ADD_PROFILE:
            return {...state, profiles:[...state.profiles,action.value]};
        case actions.UPDATE_SELECTED_PROFILE:
            return {...state, selectedProfile:action.value};
        default:
            return state;
    }
}

export const UserContextProvider = (props) => {
    const selectedProfile = sessionStorage.getItem('netflix-clone-profile')
    const initialState = {
        uid:undefined,
        name: undefined,
        email: undefined,
        profiles: [],
        selectedProfile: selectedProfile?parseInt(selectedProfile):-1,
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    const addProfile = (profile) => {
        dispatch({type:'ADD_PROFILE', value: profile})
    }
    const updateUserProfiles = (profiles) => {
        dispatch({type:'UPDATE_PROFILES',value:profiles})
    }

    const updateSelectedProfile = (value) => {
        dispatch({type: 'UPDATE_SELECTED_PROFILE', value: value})
        value!==null&&sessionStorage.setItem('netflix-clone-profile',value)
    }
    const handleLogin = async (user) => {
        await dispatch({type:'UPDATE_NAME', value:user.name})
        await dispatch({type:'UPDATE_ID', value:user.uid})
        await dispatch({type:'UPDATE_EMAIL', value:user.email})
        await dispatch({type:'UPDATE_PROFILES', value:user.profiles})
    }
    const handleLogout = () => {
        dispatch({type:'UPDATE_NAME', value:undefined})
        dispatch({type:'UPDATE_ID', value:undefined})
        dispatch({type:'UPDATE_EMAIL', value:undefined})
        dispatch({type:'UPDATE_PROFILES', value:[]})
        dispatch({type: 'UPDATE_SELECTED_PROFILE', value: -1})
        sessionStorage.removeItem('netflix-clone-profile')
    }
    const value = {
        name:state.name,
        uid: state.uid,
        email:state.email,
        profiles: state.profiles,
        selectedProfile: state.selectedProfile,
        updateSelectedProfile: updateSelectedProfile,
        updateUserProfiles:updateUserProfiles,
        handleLogin:handleLogin,
        handleLogout:handleLogout,
        addProfile:addProfile,
    }
    return(
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);


