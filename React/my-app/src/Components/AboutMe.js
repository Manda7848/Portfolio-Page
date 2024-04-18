import { Link } from "react-router-dom";
import "../Components/AboutMe.css";
import React from 'react';
import Html from "../Components/assets/Css.jpg"
import Css from "../Components/assets/Html wallpaper.jpg"

const AboutMe = () => {


  return(
     <div className="about">
      
        <div className="left">
              <h1>Who Am I?</h1>
            <p>

Hey there! Welcome to my portfolio! I'm really into making cool websites that are easy to use. I started learning how to do this stuff with HTML and CSS, which helped me make websites look awesome. Then, I got into JavaScript, React, and Tailwind CSS to make my websites even better and more interactive.

I'm still in high school, but I'm super excited about learning more about technology. My dream is to study Software Engineering at MIT to become even better at what I do.

I think good software comes from knowing the basics really well, paying attention to the little things, and always trying new stuff. With each project, I try to do something new and make it better than the last one.

Whether you want to work together, ask for advice, or just chat, I'm ready to start this journey with you. Let's make something awesome!!
            </p>
            <Link to="/Contact">
                <button className="btn">Contact Me</button>
            </Link>
            </div>
        <div className="right">
            <div className="img-container">
            <div className="top">
                <img src={Html} className="img" alt="Html" />
                 </div>
                 <div className="bottom">
                <img src={Css }className="img" alt="Css" />
                 </div>
            </div>
        </div>
        </div>
  )
};

export default AboutMe;
