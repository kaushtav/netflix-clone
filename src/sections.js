import React from "react";
import Row from "./Row";
import {sections} from "./api/movieEndPoints";

const Sections = () => {
  return(
      <div>
          {
              sections.movies.sections.map(({title, endpoint}) => {
                  return (
                      <Row key={title} title={title} request={endpoint}/>
                  )
              })
          }
      </div>
  )
}

export default Sections;
