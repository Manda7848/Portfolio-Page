// import "./heroimgcs.css";
// import IntroImg from "./assets/Space.jpg";
// import React from "react";

// import {Link} from "react-router-dom";


// const heroimg = () => {
//   return (
//     <div className="hero">
//       <div className="mask">
//         <img className="intro-img" src={IntroImg}alt="Galaxy" />
//       </div>
//       <div className="Content">
//         <p>HELLO! I'M AMANDA</p>
//         <h1>Aspiring Software Engineer.</h1>
//         <div>
//      <Link to="/Projects" className="btn">Projects</Link>
//      <Link to="/Contact" className="btn-light">Connect</Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default heroimg


// CHAT GPT

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./heroimgcs.css";
import IntroImg from "./assets/Space.jpg";

const HeroImg = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Prospective Software Engineer", "Passionate Developer", "Tech Enthusiast","Space Nerd","Student","Child of God", "Proud Older Sister", "Curious Learner", "Problem Solver", "Team Player","Video Editor", "Panda Lover", "Graphic Deigner"  ]; // Array of texts to cycle through

  useEffect(() => {
    // Function to update the text index every 5 seconds
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [texts.length]);

  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="Galaxy" />
      </div>
      <div className="Content">
        <p>HELLO! I'M AMANDA</p>
        {/* Use CSS animation for swipe effect */}
        <h1 className="swipeRightAnimation">A {texts[textIndex]}</h1>
        <div>
          <Link to="/Projects" className="btn">Projects</Link>
          <Link to="/Contact" className="btn-light">Connect</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;







// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./heroimgcs.css";
// import IntroImg from "./assets/Space.jpg";

// const HeroImg = () => {
//   const [textIndex, setTextIndex] = useState(0);
//   const texts = ["Aspiring Software Engineer", "Passionate Developer", "Tech Enthusiast"]; // Array of texts to cycle through

//   useEffect(() => {
//     // Function to update the text index every 5 seconds
//     const intervalId = setInterval(() => {
//       setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
//     }, 5000);

//     return () => clearInterval(intervalId); // Clear the interval when the component unmounts
//   }, [texts.length]);

//   return (
//     <div className="hero">
//       <div className="mask">
//         <img className="intro-img" src={IntroImg} alt="Galaxy" />
//       </div>
//       <div className="Content">
//         <p>HELLO! I'M AMANDA</p>
//         {/* Use CSS animation for swipe effect */}
//         <h1 className="swipeRightAnimation">
//           <span className="swipeOverlay"></span>
//           {texts[textIndex]}
//         </h1>
//         <div>
//           <Link to="/Projects" className="btn">Projects</Link>
//           <Link to="/Contact" className="btn-light">Connect</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroImg;








// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./heroimgcs.css";
// import IntroImg from "./assets/Space.jpg";

// const HeroImg = () => {
//   const [textIndex, setTextIndex] = useState(0);
//   const texts = ["Aspiring Software Engineer", "Passionate Developer", "Tech Enthusiast", "Child of God", "Student", "Space Nerd"]; // Array of texts to cycle through

//   useEffect(() => {
//     // Function to update the text index every 5 seconds
//     const intervalId = setInterval(() => {
//       setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
//     }, 5000);

//     return () => clearInterval(intervalId); // Clear the interval when the component unmounts
//   }, [texts.length]);

//   return (
//     <div className="hero">
//       <div className="mask">
//         <img className="intro-img" src={IntroImg} alt="Galaxy" />
//       </div>
//       <div className="Content">
//         <p>HELLO! I'M AMANDA</p>
//         {/* Use CSS animation for swipe effect */}
//         <h1 className="swipeRightAnimation">
//           {/* Apply the white color overlay for each text change */}
//           {texts.map((text, index) => (
//             <span key={index} className={index === textIndex ? "swipeOverlay" : ""}>
//               {text}
//             </span>
//           ))}
//         </h1>
//         <div>
//           <Link to="/Projects" className="btn">Projects</Link>
//           <Link to="/Contact" className="btn-light">Connect</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroImg;