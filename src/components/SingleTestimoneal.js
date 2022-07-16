import React from 'react';
import './SingleTestimoneal.css';


const SingleTestimoneal = ({  testimoneal_sex , testimoneal_content , testimoneal_user   }) => {
  return (
    <div className='single_testimoneal' >

        {testimoneal_sex === 'male' ? (
            <img src="/images/man.png" className='avtar_testimoneal'  alt="" />
        ) : (
            <img src="/images/woman.png" className='avtar_testimoneal'  alt="" />
        ) }

        <p> {testimoneal_content} </p>
        <h5> {testimoneal_user} </h5>

    </div>
  )
}

export default SingleTestimoneal