import React from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/footer";
import Hero from "../Components/hero";
import Work from "../Components/work";

const Projects = () => {
  return (
    <div>
     <Navbar/>
     <Hero heading="PROJECTS." text="Some of my work"/>
     <Work />
     <Footer/>
    </div>
  )
}

export default Projects;
