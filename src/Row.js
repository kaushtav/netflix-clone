import React, {useEffect, useState} from "react";
import {fetchData} from "./api/";
import './Row.css';

const Row = ({title, request}) => {
    const [movies, setMovies] = useState([])
    console.log(title)
    useEffect(()=>{
        fetchData(request).then((result)=>{
            console.log(result.data.results)
            setMovies(result.data.results)
        })
    },[request])
   return(
       <div>
           <h2 style={{color:'white'}}>
               {title}
           </h2>
           <div className={'row_posters'}>

               {
                   movies.map(({id,name,poster_path})=>{
                       return (
                           <img
                               key={id}
                               className={'row_poster'}
                               src={'https://image.tmdb.org/t/p/original/' + poster_path}
                               alt={name}
                           />
                       )
                   })
               }
           </div>
       </div>
   )
}
export default Row;
