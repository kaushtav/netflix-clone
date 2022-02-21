import React, {useEffect, useState} from "react";
import {sections} from "../../api/movieEndPoints";
import {usePlayer} from "../../context/playerContext";
import {instance} from "../../api";
import Show from "./show";
import './searchScreen.css'
import {useUser} from "../../context/userContext";

const MyList = () => {
    const {profiles, selectedProfile} = useUser();
    const [myList, setMyList] = useState(profiles[selectedProfile].list)
    useEffect(()=>{

        // setMyList((value) => [...value,...value])
        // setMyList((value) => [...value,...value])
        // setMyList((value) => [...value,...value])
    },[])
    return (
        <div  id={'browseScreen__searchRowContainer'} >
            <h2>Your List</h2>
            <div  id={'browseScreen__searchRow'} className={`md-container`}>
                {profiles[selectedProfile].list.length&&myList.length?(
                    myList.map((result) => {
                        return(
                            <Show show={result} size={'md'} section={'Search'}/>
                        )
                    })
                ):(
                    <div/>
                )}
            </div>
        </div>
    )
}

export default MyList;
