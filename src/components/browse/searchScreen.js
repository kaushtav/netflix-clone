import React, {useEffect, useState} from "react";
import {sections} from "../../api/movieEndPoints";
import {usePlayer} from "../../context/playerContext";
import {instance} from "../../api";
import Show from "./show";
import './searchScreen.css'

const SearchScreen = ({searchQuery, setSearchQuery}) => {
  const {category} = usePlayer()
  const [searchResult, setSearchResult] = useState([])
  const handleSearch = () => {
      if (searchQuery) {
        const endpoint =
            category === 'series'
                ? sections.series.helpers.searchTV.replace('{{query}}', searchQuery)
                : sections.movies.helpers.searchMovie.replace('{{query}}', searchQuery);
        instance
            .get(endpoint)
            .then(({ data }) => {
              data.results.sort(
                  (a,b) =>
                      a.popularity > b.popularity ? -1 : b.popularity > a.popularity ? 1 : 0
              );
              setSearchResult(data.results);
            })
            .catch((e) => console.log(e));
      } else {
        setSearchResult();
      }
  };
  useEffect(()=>handleSearch(),[category, searchQuery])
  return (
      <div  id={'browseScreen__searchRowContainer'} >
          <h2> Search Result</h2>
        <div  id={'browseScreen__searchRow'} className={`md-container`}>
          {searchResult.length?(
              searchResult.map((result) => {
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

export default SearchScreen;
