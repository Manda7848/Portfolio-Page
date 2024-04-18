import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/contact";
import Thanks from "./routes/Thanks"

import { Route, Routes } from "react-router-dom";


function App() {
  return (
<>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/About" element={<About />} />
  <Route path="/Projects" element={<Projects/>} />
  <Route path="/Contact" element={<Contact />} />
  <Route path="/Thank-You" element={<Thanks/>}/>
 
</Routes>
</>


  );
};

export default App;
