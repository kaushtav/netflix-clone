import {createContext, useContext, useReducer} from "react";

const PlayerContext = createContext(undefined);


const actions = {
    SET_PLAYING: 'SET_PLAYING',
    SET_DETAILS_TRAILER: 'SET_DETAILS_TRAILER',
    SET_MUTED: 'SET_MUTED',
    SET_CATEGORY: 'SET_CATEGORY',
    SET_HERO_TRAILER: 'SET_HERO_TRAILER',
    SET_TRAILER_DISPLAYED: 'SET_TRAILER_DISPLAYED',
    SET_GENRES: 'SET_GENRES',
};

function reducer(state, action) {
    console.log(action.type);
    switch (action.type) {
        case actions.SET_PLAYING:
            return {...state, playing: action.value};
        case actions.SET_DETAILS_TRAILER:
            return {...state, detailsTrailer: action.value};
        case actions.SET_MUTED:
            return {...state, muted: action.value};
        case actions.SET_CATEGORY:
            return {...state, category: action.value};
        case actions.SET_HERO_TRAILER:
            return {...state, heroTrailer: action.value};
        case actions.SET_TRAILER_DISPLAYED:
            return {...state, trailerDisplayed: action.value};
        case actions.SET_GENRES:
            return {...state, genres: action.value};
        default:
            return state;
    }
}

export const PlayerContextProvider = (props) => {
    const initialState = {
            playing: undefined,
            detailsTrailer: null,
            muted: true,
            category: 'series',
            heroTrailer: null,
            trailerDisplayed: null,
            genres: null,
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    const setPlaying = (value) => {
        dispatch({type:'SET_PLAYING', value: value})
    }
    const setDetailsTrailer = (value) => {
        dispatch({type:'SET_DETAILS_TRAILER', value: value})
    }
    const setMuted = (value) => {
        dispatch({type:'SET_MUTED', value: value})
    }
    const setCategory = (value) => {
        dispatch({type:'SET_CATEGORY', value: value})
    }
    const setHeroTrailer = (value) => {
        dispatch({type:'SET_HERO_TRAILER', value: value})
    }
    const setTrailerDisplayed = (value) => {
        dispatch({type:'SET_TRAILER_DISPLAYED', value: value})
    }
    const setGenres = (value) => {
        dispatch({type:'SET_GENRES', value: value})
    }

    const value = {
        playing: state.playing,
        setPlaying:setPlaying,
        detailsTrailer: state.detailsTrailer,
        setDetailsTrailer:setDetailsTrailer,
        muted: state.muted,
        setMuted:setMuted,
        category: state.category,
        setCategory:setCategory,
        heroTrailer: state.heroTrailer,
        setHeroTrailer:setHeroTrailer,
        trailerDisplayed: state.trailerDisplayed,
        setTrailerDisplayed:setTrailerDisplayed,
        genres: state.genres,
        setGenres:setGenres,
    }
    return(
        <PlayerContext.Provider value={value}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export const usePlayer = () => useContext(PlayerContext);


