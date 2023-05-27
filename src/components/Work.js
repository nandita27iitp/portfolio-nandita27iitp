import "./workcard.css";
import Workcard from "./workcard";
import Workcarddata from "./Workcarddata"

import React from 'react'

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {Workcarddata.map((val, ind) =>{
                return(
                    <Workcard key={ind} imgsrc={val.imgsrc} title={val.title} text={val.text} tnt={val.tnt} view={val.view} source={val.source} />
                )
            })}
        </div>
    </div>
  )
}

export default Work