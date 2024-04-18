import React from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/footer";
import Hero from "../Components/hero"
import AboutMe from '../Components/AboutMe';

const About = () => {
  return (
    <div>
    <Navbar/>
    <Hero heading="ABOUT." text="I Am Just A Girl Who Loves Tech" />
    <AboutMe />
    <Footer/>
    </div>
  )
};

export default About;
