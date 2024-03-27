import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Herobg from '../components/Herobg';

const About = () => {
  return (
    <div>
      <Navbar />
      <Herobg heading="ABOUT." text="I'm a fresh, friendly Front-End Developer eager to innovate in web development." />
      <Footer />
    </div>
  )
}

export default About