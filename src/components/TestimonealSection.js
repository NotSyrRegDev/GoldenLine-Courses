import React, {useContext} from 'react';
import Slider from 'react-slick/lib/slider';
import SingleTestimoneal from './SingleTestimoneal';
import './TestimonealSection.css';

import {AppContext} from '../contexts/AppContext'

const TestimonealSection = () => {

  const {ratings} = useContext(AppContext);
  const [ratingsValues ] = ratings;


  var settings = {
    dots: true,
    autoplay: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
     
    ]
  };


  return (
    <div className="client mt-4" >
      
<h1 className="main_headline text-center">أراء العملاء</h1>

    <div className="mt-4"></div>

     <Slider {...settings}  > 

     {ratingsValues ? ratingsValues.map(({ id , rating_by ,rating_desc  , rating_sex}) => (
      <div key={id} >
      <SingleTestimoneal   testimoneal_sex={rating_sex} testimoneal_content={rating_desc} testimoneal_user={rating_by}  />
      </div>
    )) : '' }
      
      
  
     </Slider>

    </div>
  )
}

export default TestimonealSection