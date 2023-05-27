import React from 'react';

import Navbar from "../components/Navbar";
import Form from '../components/Form';
import Footer from "../components/Footer";
import Heroimage2 from '../components/Heroimage2';


const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimage2 heading="Contact Me." text="Let's have a chat!" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact