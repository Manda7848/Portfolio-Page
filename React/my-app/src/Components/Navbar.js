import "./Nav.css";

import React, { useState } from 'react';
import { Link } from "react-router-dom";

import {FaBars, FaTimes}  from "react-icons/fa";

const Navbar = () => {

const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);


const [color, setColor] = useState(false);
const changeColor = () =>{
  if(window.scrollY >=100){
    setColor(true);
  }
  else(
    setColor(false)
  )
};

window.addEventListener("scroll", changeColor);


  return (
    <div className={color ? "header header-bg" : "header"}> 
    <Link to="/">
        <h1>Amanda.</h1>
    </Link>
    <ul className={click ? "main-nav active" : "main-nav"}>
       
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/About">About</Link> </li>
        <li> <Link to="/Projects">Projects</Link> </li>
        <li> <Link to="/Contact">Contact</Link> </li>
    </ul>
    <div className="hemberger" onClick={handleClick}>
    {click ? (<FaTimes size={20} style={{ color:"#fff" }} />) : (<FaBars size={20} style={{ color:"#fff" }} />)}
        
        
    </div>
    </div>
  )
};

export default Navbar;
