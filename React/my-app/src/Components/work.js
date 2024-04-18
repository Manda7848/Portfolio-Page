import "./work.css";
import WorkCard from "./workc";
import WorkCardData from "../Components/workcard";
import React from 'react';

const Work = () => {
    console.log("ProjectCard type:", typeof ProjectCard);

  return (
    <div className="work">
      <h1 className="pro-head"></h1>
      <div className="pro-container">
       {WorkCardData.map((val, ind) =>{
    return(

       
            <WorkCard
            key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
            />
      
    //  <ProjectCard
    //  key={ind}
    //  imsrc={val.imgsrc}
    //  title={val.title}
    //  text={val.text}
    //  />


)
})}
      </div>
    </div>
  )
}

export default Work;

