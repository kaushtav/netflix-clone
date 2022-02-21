import React, {createRef, useState} from "react";
import './show.css'
import {IMAGE_BASE_URL,BACKDROP_PLACEHOLDER,POSTER_PLACEHOLDER,IMAGE_SIZES} from "../../constants/constants";
import {usePlayer} from "../../context/playerContext";
import {sections} from "../../api/movieEndPoints";
import {instance} from "../../api";
import ReactPlayer from "react-player";
import ThumbUpOffAltIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOffAltIcon from '@material-ui/icons/ThumbDownAltOutlined';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PlusArrowIcon from '@material-ui/icons/Add';
import {useUser} from "../../context/userContext";
import {updateProfiles} from "../../helpers/firebase";
import VolumeOffOutlinedIcon from '@material-ui/icons/VolumeOffOutlined';
import VolumeUpOutlinedIcon from '@material-ui/icons/VolumeUpOutlined';
import {useNavigate} from "react-router-dom";

export const PLAYER_CONFIG = {
    youtube: {
        playerVars: {
            disablekb: 1,
            iv_load_policy: 3
        }
    }
};


const Show = ({show,size,section}) => {
    const navigate = useNavigate()
    const {profiles, selectedProfile, updateUserProfiles} = useUser()
    const [delayHandler, setDelayHandler] = useState()
    const [hover, setHover] = useState()
    const {id,name,title,poster_path,backdrop_path} = show;
    const windowWidth = window.innerWidth;
    const {
        muted,
        setMuted,
        category,
        genres,
        trailerDisplayed,
        setTrailerDisplayed,
        setHeroTrailer
    } = usePlayer();
    const showPoster =
        (trailerDisplayed &&
            ((trailerDisplayed.id === show.id.toString() && trailerDisplayed.header !== section.title) ||
                trailerDisplayed.id !== show.id.toString())) ||
        !trailerDisplayed
    const myListAdded = profiles[selectedProfile].list.length?profiles[selectedProfile].list.find(x=>x.id===show.id):false

    const handleShowHover = async () => {
        setDelayHandler(
            setTimeout(async () => {
                try {
                    const endpoint =
                        category === 'series'
                            ? sections.series.helpers.fetchTVVideos.replace('{{tv_id}}', show.id.toString())
                            : sections.movies.helpers.fetchMovieVideos.replace('{{movie_id}}', show.id.toString());
                    const response = await instance.get(endpoint);
                    const trailerDetails = response.data.results
                        .reverse()
                        .find((video) => video.site === 'YouTube' && video.type === 'Trailer');
                    if (trailerDetails) {
                        setTrailerDisplayed({
                            id: show.id.toString(),
                            header: section.title,
                            url: trailerDetails.key,
                            isLoaded: false
                        });
                        setHeroTrailer();
                    }
                } catch (e) {
                    console.log('Error ',e);
                }
            }, 800)
        );
    };

    return (
        <div id={'show_container'}>
            <div id={'show_card'}
                 onMouseEnter={() => {
                     setHover(true)
                     handleShowHover()
                 }}
                 onMouseLeave={() => {
                     setHover(false)
                     clearTimeout(delayHandler);
                     setTrailerDisplayed(null);
                 }}>
                <div
                    id={'show_trailer'}
                    className={hover &&trailerDisplayed && trailerDisplayed.isLoaded&& trailerDisplayed.id === show.id.toString() ? 'trailer_visible' : ''}>
                    {hover &&!showPoster &&
                    trailerDisplayed &&
                    trailerDisplayed.url && (
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${trailerDisplayed.url}`}
                            className="trailer_video"
                            width="100%"
                            height="100%"
                            playing={true}
                            muted={muted}
                            onReady={() => {
                                if (trailerDisplayed) setTrailerDisplayed({...trailerDisplayed, isLoaded: true})
                            }}
                            onEnded={() => setTrailerDisplayed(null)}
                            config={PLAYER_CONFIG}
                        />
                    )}
                    <div id={'browseScreen__MuteContainer'} className={'browseScreen__MuteContainer'} onClick={()=>setMuted(!muted)}>
                        {muted ? <VolumeOffOutlinedIcon /> : <VolumeUpOutlinedIcon />}
                    </div>
                </div>
                {((showPoster||!hover) ||
                    (trailerDisplayed && trailerDisplayed.id === show.id.toString() && !trailerDisplayed.isLoaded)) && <img
                    key={id}
                    onClick={(e)=> {
                        e.preventDefault()
                        setTrailerDisplayed()
                    }}
                    className={'show_poster'}
                    id={'show_poster'}
                    src={
                        size === 'lg' ? poster_path ? (
                            `${IMAGE_BASE_URL +
                            (windowWidth <= 600
                                ? IMAGE_SIZES.poster.small
                                : windowWidth <= 1000 ? IMAGE_SIZES.poster.medium : IMAGE_SIZES.poster.large) +
                            poster_path}`
                        ) : (
                            POSTER_PLACEHOLDER
                        ) : backdrop_path ? (
                            `${IMAGE_BASE_URL + IMAGE_SIZES.backdrop.small + backdrop_path}`
                        ) : (
                            BACKDROP_PLACEHOLDER
                        )
                    }
                    alt={name || title}
                />}
                <div id={'show_details'}>
                    <div id={'show_buttons'}>
                        <div>
                            <div className={'play-icon'} onClick={()=>{
                                navigate('/play')}}>
                                <PlayArrowIcon/>
                            </div>

                            <div
                                // style={{border:myListAdded?'black':'red'}}
                                onClick={(e)=>{
                                    e.preventDefault()
                                    if(!myListAdded){
                                        const newProfiles = profiles
                                        newProfiles[selectedProfile].list.push(show)
                                        updateUserProfiles(newProfiles)
                                        updateProfiles(newProfiles)
                                    }
                                }}
                            >
                                <PlusArrowIcon/>
                            </div>
                            <div>
                                <ThumbUpOffAltIcon/>
                            </div>
                            <div>
                                <ThumbDownOffAltIcon/>
                            </div>
                            {/*<div className={'right-icon'}>*/}
                            {/*    <PlusArrowIcon/>*/}
                            {/*</div>*/}
                        </div>
                        <div >
                        </div>
                    </div>
                    <h3 id={'show_title'}>{name||title}</h3>
                    {section.size !== 'lg' && (
                        <div id={'show_genres'}>
                                {genres && genres.length > 0 ? (
                                    show.genre_ids.map((genreId, i) => {
                                        if (i > 2) return null;
                                        const genreDetails = genres.find((genre) => genre.id === genreId);if(genreDetails){
                                            return (
                                                <div id={'show_genre'} key={i}>
                                                    <p style={{color: 'white', paddingRight: '0.5rem'}}>
                                                        {genreDetails.name}
                                                    </p>
                                                </div>
                                            );
                                        }
                                            return <div/>
                                    })
                                ) : null}
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}

export default Show;
