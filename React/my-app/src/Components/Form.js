import "../Components/Form.css";
import React from 'react';
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <div className="form"> 
    <form>
        <label>Your Name</label>
        <input type="text" required placeholder="Enter Your Name"></input>
        <label>Your Email</label>
        <input required type="email" placeholder="Enter Your Email"></input>
        <label>Subject</label>
        <input type="text" required placeholder="What Are You Asking About?"></input>
        <label>Message</label>
        <textarea rows="6" required placeholder="Type Your Message Here" />
        <Link className="btn" to="/Thank-You">SUBMIT</Link>
    </form>
    </div>
  )
}

export default Form;


// import React from "react";
// import { useHistory } from "react-router-dom";

// const MyForm = () => {
//   const history = useHistory();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Your form submission logic here

//     // Redirect to another page after form submission
//     history.push("/thank-you");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Your Name</label>
//         <input type="text" placeholder="Enter Your Name"></input>
//         <label>Your Email</label>
//         <input type="email" placeholder="Enter Your Email"></input>
//         <label>Subject</label>
//         <input type="text" placeholder="What Are You Asking About?"></input>
//         <label>Message</label>
//         <textarea rows="6" placeholder="Type Your Message Here" />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default MyForm;