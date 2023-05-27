import { Link } from "react-router-dom"
import "./Aboutcontent.css"

import React from 'react'
import React1 from "../assets/myphoto.jpeg"

const Aboutcontent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Hello, I am Nandita Gupta. A Junior Year B.Tech UG, studying at Indian Institute of Technology(IIT), Patna. I am a passionate Programmer, Web Developer and a UI/UX Designer.
                I enjoy working on interesting projects and design challenges. I am proficient in C, C++, Python programming languages and also familiar with different frameworks like React, node.js etc. Currently, I am exploring AI/DS field.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-circle">
                    <img src={React1} className="img" alt="true" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutcontent