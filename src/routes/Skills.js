import React from 'react'  //type rafce and enter

import Navbar from "../components/Navbar";
import Heroimage2 from "../components/Heroimage2";
import Techstackcontent from '../components/Techstackcontent';
import Footer from "../components/Footer";

const Techstack = () => {
  return (
    <div>
        <Navbar />
        <Heroimage2 heading="MY SKILLS." text="Ask me about!" />
        <Techstackcontent />
        <Footer />
    </div>
  )
}

export default Techstack