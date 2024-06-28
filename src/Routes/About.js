import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HeroImage2 from '../Components/HeroImage2';
import AboutContent from '../Components/AboutContent';
const About = () => {
  return (
    <div>
     <Navbar/>
     <HeroImage2 heading=" ABOUT." text="I'm Friendly Front End Web Developer"/>
     <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About;
