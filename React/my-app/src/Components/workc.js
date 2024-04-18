import "./work.css";
import React from 'react'



const WorkCard = (props) => {
  return (
    <div className="pr-card">
            <img src={props.imgsrc} alt="A project"/>
            <h2 className="title">{props.title}</h2>
            <div className="pro-dets">
                <p>{props.text}</p>
            </div>
        </div>
  );
};

export default WorkCard;
