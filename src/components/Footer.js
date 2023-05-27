import "./Footer.css"

import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color: "fff", marginRight: "2rem"}} />
                    <div>
                        <p>Indian Institute of Technology(IIT), Patna</p>
                        <p>Patna, Bihar, India</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{ color: "fff", marginRight: "2rem"}} />+91-954-(856)-7623</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{ color: "fff", marginRight: "2rem"}} />nandita27iitp@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About Me</h4>
                <p>This is Nandita Gupta. Junior Year B.Tech UG, IIT Patna. I enjoy working on interesting projects and design challenges. Currently exploring AI/DS field.</p>
                <div className="social">
                    <FaLinkedin size={30} style={{ color: "fff", marginRight: "1rem"}} />
                    <FaGithub size={30} style={{ color: "fff", marginRight: "1rem"}} />
                    <FaTwitter size={30} style={{ color: "fff", marginRight: "1rem"}} />
                    <FaInstagram size={30} style={{ color: "fff", marginRight: "1rem"}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer