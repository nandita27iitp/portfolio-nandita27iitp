import React from 'react'  //type rafce and enter
import Navbar from "../components/Navbar";
import Heroimage from "../components/Heroimage";
import Work from "../components/Work";
import Footer from "../components/Footer";



const Home = () => {
  return (
    <div>
        <Navbar />
        <Heroimage />
        <Work />
        <Footer />
    </div>
  )
}

export default Home