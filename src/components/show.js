import React, {useState} from "react";
import './show.css'
import {IMAGE_BASE_URL,BACKDROP_PLACEHOLDER,POSTER_PLACEHOLDER,IMAGE_SIZES} from "../constants/constants";

const Show = ({show,size,index}) => {
    const [showPoster, setShowPoster] = useState(true)
    const {id,name,title,poster_path,backdrop_path} = show;
    const windowWidth = window.innerWidth;
    return (
        <div id={'show_container'}>
            <div id={'show_card'}>
                {showPoster && <img
                    key={id}
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
                    <h3 id={'show_title'}>{name||title}</h3>
                    <br/>
                </div>
            </div>
        </div>

    )
}

export default Show;
