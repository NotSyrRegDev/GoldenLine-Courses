import React , {useContext} from 'react';
import './CategoriesSection.css';
import SingleCategory from './SingleCategory';
import {AppContext} from '../contexts/AppContext'


const CategoriesSection = () => {

  const {categories}  = useContext(AppContext);
  const [categoreisValues  ] = categories;
  

  return (
    <div className='categories mt-2' >
        <h1 className="main_headline text-center">اختر القسم المناسب للدورات</h1>
        
        <div className="grid_categories mt-2">
            <div className="g-col-4">

          {categoreisValues ? categoreisValues.map(({id ,category_name , category_thum}) => (
 <SingleCategory key={id} cover_image={category_thum} cat_title={category_name}  />
          )) : ''}
           

            </div>
        </div>
       
    </div>
  )
}

export default CategoriesSection