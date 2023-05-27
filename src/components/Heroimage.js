import "./Heroimage.css";

import IntroImg from "../assets/background.jpg";

import React from 'react';

import { Link } from "react-router-dom";

const Heroimage = () => {
  return (
    <div className="hero">
        <div className="mask">
           <img className="into-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>HI, I'M NANDITA GUPTA</p>
            <h1>Programmer | Web Developer | UI/UX Designer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimage