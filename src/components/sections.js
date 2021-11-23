import React from "react";
import Row from "./row";
import {sections} from "../api/movieEndPoints";
import './sections.css'


const Sections = () => {
  return(
      <div id={'section_container'}>
          {
              sections.movies.sections.map((section,index) => {
                  return (
                      <Row key={section.title} title={section.title} request={section.endpoint} size={section.size} index={index}/>
                  )
              })
          }
      </div>
  )
}

export default Sections;
