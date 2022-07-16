import React  , { useContext}  from 'react';
import Slider from 'react-slick/lib/slider';
import './CoursesSection.css';
import SingleCourse from './SingleCourse';

import {AppContext} from '../contexts/AppContext'

const CoursesSection = () => {

  const {products} = useContext(AppContext);
  const [productsValues ] = products;
 

 
  



    var settings = {
        dots: true,
        autoplay: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 900,
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
    <div className='courses mt-4' >

<h1 className="main_headline text-center">الدورات الاكثر طلبا</h1>

    <div className="mt-2"></div>
 <Slider {...settings}>

    {productsValues ? productsValues.map(({ id , cover_image , course_name , tax_status , old_price , course_price , tax_value}) => (
      <div key={id} >
      <SingleCourse  course_id={id} cover_image={cover_image} course_name={course_name} tax_status={tax_status} old_price={old_price} course_price={course_price} tax_value={tax_value}    />
      </div>
    )) : '' }
   
           
           
           

    </Slider>
  

    </div>
  )
}

export default CoursesSection