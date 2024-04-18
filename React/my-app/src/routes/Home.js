import React from "react";
import Navbar from "../Components/Navbar";
import HeroImg from "../Components/heroimg";
import Footer from "../Components/footer";
import Work from "../Components/work"

const Home = () => {
    return  <div>
    <Navbar/>
    <HeroImg/>
    <h1 style={{ paddingTop: "10px", textAlign: "center" }}>Projects</h1>
    <Work/>
    <Footer />
    </div>;
    
};

export default Home;