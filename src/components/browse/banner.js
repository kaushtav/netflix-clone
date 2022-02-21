import React, {useEffect, useState, Fragment, useRef} from "react";
import VolumeOffOutlinedIcon from '@material-ui/icons/VolumeOffOutlined';
import VolumeUpOutlinedIcon from '@material-ui/icons/VolumeUpOutlined';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ReactPlayer from "react-player";
import './banner.css'
import {sections} from "../../api/movieEndPoints";
import {instance} from "../../api";
import {usePlayer} from "../../context/playerContext";
import {useNavigate} from "react-router-dom";
export const PLAYER_CONFIG = {
    youtube: {
        playerVars: {
            disablekb: 1,
            iv_load_policy: 3
        }
    }
};
const truncate = (string, length) => {
    return string.length > length ? string.substring(0, length - 1) + '...' : string;
};

const Banner = ({profile}) => {
    const playerRef = useRef();
    const navigate = useNavigate()
    const [banner,setBanner] = useState(null);
    const {
        category,
        setPlaying,
        muted,
        setMuted,
        heroTrailer,setHeroTrailer
    } = usePlayer();
    const windowWidth = window.innerWidth;
    useEffect(() => {
            async function fetchData() {
                const response = await instance.get(sections[category].sections[4].endpoint);
                const bannerDetails = response.data.results[Math.floor(Math.random() * response.data.results.length)];
                setBanner(bannerDetails);
                if (windowWidth > 600) {
                    const endpoint =
                        category === 'series'
                            ? sections.series.helpers.fetchTVVideos.replace('{{tv_id}}', bannerDetails.id)
                            : sections.movies.helpers.fetchMovieVideos.replace('{{movie_id}}', bannerDetails.id);
                    const trailerResponse = await instance.get(endpoint);
                    if (trailerResponse.data.results.length > 0) {
                        const trailerDetails = trailerResponse.data.results
                            .reverse()
                            .find(({site,type}) => site === 'YouTube' && type === 'Trailer');
                        if (trailerDetails) setHeroTrailer(trailerDetails.key);
                    }
                }
            }
            fetchData();
        },
        [ windowWidth, profile, category ]
    );



  return(
      <div id={'banner'}>
          {heroTrailer&&(
              <div id={'banner_video'}>
                  <div className={'banner_video_wrapper'}>
                      <ReactPlayer
                          ref={playerRef}
                          url={`https://www.youtube.com/watch?v=${heroTrailer}`}
                          className="hero-video"
                          width="100%"
                          height="100%"
                          playing={true}
                          muted={muted}
                          onEnded={() => setHeroTrailer()}
                          config={PLAYER_CONFIG}
                      />
                  </div>
              </div>
          )}
          {banner&&(
              <Fragment>
                  {banner.backdrop_path && !heroTrailer && (
                      <div id={'banner_banner'} style={{background:`linear-gradient(rgba(20,20,20,0.6), rgba(20,20,20,0.95)), url('https://image.tmdb.org/t/p/original${banner.backdrop_path}') center`}}/>
                  )}
                  {banner.overview && (
                      <div id={'banner_details'} className={heroTrailer ? 'no-desc' : ''}>
                           <h1 className={!heroTrailer ? 'title-small' : ''}>{banner.name||banner.title}</h1>
                          {!heroTrailer && windowWidth > 600 && (
                              <div id={'banner_description'}>
                                  {truncate(banner.overview,180)}
                              </div>
                          )}
                          <div id={'buttons'}>
                              <div className={'banner_button white'} onClick={() => {
                                  setHeroTrailer();
                                  navigate('/play')
                              }}>
                                  <PlayArrowIcon/>
                                <span>Play</span>
                              </div>
                              <div className={'banner_button'} onClick={() => {
                                  setHeroTrailer();
                                  setPlaying(banner);
                              }}>
                                  <InfoOutlinedIcon/>
                                  <span>More info</span>
                              </div>
                          </div>

                      </div>
                  )}

                  {heroTrailer&&<div id={'browseScreen__BannerMuteContainer'} className={'browseScreen__BannerMuteContainer'}
                        onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            setMuted(!muted)
                        }}>
                      {muted ? <VolumeOffOutlinedIcon/> : <VolumeUpOutlinedIcon/>}
                  </div>}
              </Fragment>
          )}
      </div>
  )
}

export default Banner;
