import React  from 'react';
import './SingleCategory.css';


const SingleCategory = ( { cover_image , cat_title }) => {
  return (
    <div className='single_category' >

        <img src={cover_image} alt={cat_title} />
        <h1> {cat_title} </h1>
    </div>
  )
}

export default SingleCategory