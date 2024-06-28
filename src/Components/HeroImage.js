import './HeroImage.css';
import IntroImg from '../assets/imges/intro.png'
import React from 'react'
import { Link } from 'react-router-dom';

const HeroImage = () => {
  return (
    <div className='hero'>
        <div className='mask'>
         <img  className="intro-img" src={IntroImg} alt='IntroImg'/>
    </div>

    <div className='content'>
        <p>HI , I'm Kajal Nikam</p>
        <h1>FRONT END WEB DEVELOPER</h1>
        <div>
           <Link to="/Project" className='btn'>Projects</Link>
           <Link to="/Contact" className='btn btn-light'>Contact</Link>

        </div>
    </div>
</div>
  )
}

export default HeroImage;
