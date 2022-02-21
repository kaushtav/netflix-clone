import React, {useEffect, useState} from "react";
import {fetchData} from "../../api";
import Show from "./show";
import './row.css';

const Row = ({index, title, request, size}) => {
    const [movies, setMovies] = useState([])
    useEffect(
        () => {
            fetchData(request).then(result => setMovies(result.data.results));
        },
        [request])
   return(
       <div id={'show_row_container'}  className={index===0?'not':'down'}>
           <h2>
               {title}
           </h2>
           <div id={'show_row'} className={`${size || 'md'}-container`}>
               {
                   movies.map((show)=>{
                       return(
                           <Show show={show} size={size} key={show.id} section={title}/>
                       )
                   })
               }
           </div>
       </div>
   )
}
export default Row;
