import React from "react";
import Slider   from 'react-slick';

import './Heroarea.css';

const Heroarea = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };

  return (
    <div className="main_heroarea" >

    <Slider className="slider_main"  {...settings} >
        
        <div className="slider_wrapper" >
            <img src="/images/carousel-1.png" alt="" />
        </div>

        <div className="slider_wrapper" >
            <img src="/images/carousel-2.png" alt="" />
        </div>
       
    </Slider>

    </div>
  )
}

export default Heroarea