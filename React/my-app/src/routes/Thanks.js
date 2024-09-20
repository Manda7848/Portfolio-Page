  import  React from 'react';
  import Navbar from "../Components/Navbar";
import Footer from "../Components/footer";
import Hero from "../Components/hero";

  
  const Thanks = () => {
    return (
      <div>
         <Navbar/>
    <Hero heading="Thank you!" text="Thank you for taking time to fill the form. I'll get in touch ASAP"/>
    <Footer/>
      </div>
    )
  }
  
  export default Thanks;
  