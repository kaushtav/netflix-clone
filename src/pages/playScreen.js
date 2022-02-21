import React, {useEffect, useRef, useState} from "react";
import './playScreen.css'
import ReactPlayer from "react-player";
import {PLAYER_CONFIG} from "../components/browse/show";
import {usePlayer} from "../context/playerContext";

const PlayScreen = () => {
    const playerRef = useRef();
    const {
        muted,
        setMuted
    } = usePlayer();
    useEffect(()=>{
        setMuted(false)
    },[])
  return (
      <div className={'playScreen'}>
          <ReactPlayer
              ref={playerRef}
              url={`https://www.youtube.com/watch?v=dQw4w9WgXcQ`}
              width="100%"
              height="100%"
              playing={true}
              muted={false}
              config={PLAYER_CONFIG}
          />
      </div>
  )
}

export default PlayScreen;
