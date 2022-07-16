import React from 'react';
import './HeroSlide.css';

const HeroSlide = ({ hero_image , hero_headline }) => {
  return (
    <div className="hero_slide mt-2" >
        <div style={{  background:
        `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.2)) , url('/images/${hero_image}')`,
      width: "100%", height: '60vh' , backgroundSize: 'cover' , backgroundPosition: 'fixed' , backgroundRepeat: 'no-repeat'  }}  >
         
        <h1> {hero_headline} </h1>
        </div>
    </div>
  )
}

export default HeroSlide