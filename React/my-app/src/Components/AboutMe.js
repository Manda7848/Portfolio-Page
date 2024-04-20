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
        My Name is Chimamanda Okonkwo. I'm a Passionate front-end web designer, Graphic Designer and Digital Marketer. I have advanced knowledge of HTML and Css; A Basic Understanding of Javascript. My Dream is to study Software Engineering at The Massachusetts Institute of Technology(MIT). My Love for Technology Started when I was About the Age of 4, by the age of 6 I would set up our house printer myself to do school projects. At Age 10, I Discovered Scratch and Started to use it. My Graphic design career started around the age of 11 with my small Business initative Art By Amanda. I am currently still a high school student. My skill continue to be developed by the Amazing instructors at Dansol Innovate Academy. My team placed 3rd at the maiden edition of the Dansol Innovate Championship in Held March 2024. I think of myself as somewhat unique because most girls my age are not exactly interested in sitting by a computer all day or the idea of replacing a CD-ROM; I ow all Glory to God for Making me like this and alot of thanks to my parents for working hard to give me this sort of education. Im sometimes seen as wierd because of how much I like tech and just the massive amout of knowledge I have ammased over the years about random facts in science.
        Many things interest me Including: Space(I love to watch live streams of NASA Missions), The French Language and Culture, Giant Pandas And Red Pandas(Hence my nickname Amanda The Panda), Playing on the PlayStation 4 With My Dad and Sister [I specifically like Gran Turismo and Fc24(Even though im not that good at it)] Snacking, Making International Friends, Taking broken objects apart to see how they work, Having Intelligent Conversations with others especially adults, Swimming, Playing Chess and Just Having fun on the Internet.

        Feel Free to Ask Me Any questions or suggestions by clicking the button below!



            </p>
            <Link to="/Contact">
                <button className="btn">Contact Me</button>
            </Link>
            </div>
        
        </div>
  )
};

export default AboutMe;
