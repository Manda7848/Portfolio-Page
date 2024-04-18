import { FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaWhatsapp } from "react-icons/fa";
import "./footer.css";


import React from 'react';

const footer = () => {
    return (
        <div className="footer">
            <div className="footer-div">
                <div className="left">
                    <div className="location">
                        <FaHome size={40} style={{ color: "white", marginRight: "2rem" }} />
                        <div>
                            <p> 13/15 Acme Crescent, Off Acme Road, Agidingbi, Ikeja.</p>
                            <p>Lagos.</p>
                        </div>
                    </div>

                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />
                            +234(0)818-7000-709
                        </h4>
                    </div>


                    <div className="mail">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />
                            okonkwochimamanda99@gmail.com
                        </h4>
                    </div>

                </div>


                <div className="right">
                    <h4>About the Site</h4>
                    <p>This website is just to display a bit of my work and make you familiar with my skillset, accomplishments and projects. Bear in mind I am Just a Beginner and therefore do not have any company collaborations yet.
                        This Site was made with ♡ by me feel free to reach out to me with feedback or any questions you may have!
                    </p>
                    <div className="social">
                        <FaWhatsapp size={30} style={{ color: "white", marginRight: "1rem" }} />
                        <FaLinkedin size={30} style={{ color: "white", marginRight: "1rem" }} />
                        <FaTwitter size={30} style={{ color: "white", marginRight: "1rem" }} />
                    </div>
                </div>
                </div>
            </div>

            )
}

            export default footer
