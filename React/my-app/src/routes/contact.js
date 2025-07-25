import React from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/footer";
import Hero from "../Components/hero";
import MyForm from "../Components/Form";
const contact = () => {
  return (
    <div>
    <Navbar/>
    <Hero heading="CONTACT ME." text="Like everything else here, the form does not work. Have a lovely day!"/>
    <MyForm/>
    < Footer/>
    </div>
  )
};

export default contact;
