import React, {useEffect} from "react";
import Row from "./row";
import {sections} from "../../api/movieEndPoints";
import './sections.css'
import {usePlayer} from "../../context/playerContext";
import {instance} from "../../api";


const Sections = () => {
    const {category, setGenres, genres} = usePlayer()
    useEffect(()=>{
        try {
            const endpoint =
                category === 'series' ? sections.series.helpers.fetchTVGenres : sections.movies.helpers.fetchMovieGenres;
            instance.get(endpoint).then((response) => {
                setGenres(response.data.genres)
            });
        } catch ({ response }) {
            console.log(response);
        }
    },[category])
  return(
      <div id={'section_container'}>
          {
              sections[category].sections.map((section,index) => {
                  return (
                      <Row key={section.title} title={section.title} request={section.endpoint} size={section.size} index={index}/>
                  )
              })
          }
      </div>
  )
}

export default Sections;
