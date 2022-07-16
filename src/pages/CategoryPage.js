import React from 'react';
import './CategoryPage.css';
import SingleCategory from '../components/SingleCategory';

const CategoryPage = () => {
  return (
    <div className='category_page' >

        <div className="app_container">
        <h1 className="category_headline">جميع التصنيفات</h1>

        <div className="categores_grid mt-3">
            <div className="g-col-3">
            <SingleCategory cover_image={'/images/courses-1.png'} cat_title={'دورات اللغة الانجليزية'}  />

        <SingleCategory cover_image={'/images/courses-2.png'} cat_title={'دورات الحاسب الألي'}  />

        <SingleCategory cover_image={'/images/courses-3.png'} cat_title={'دورات أخرى'}  />

        <SingleCategory cover_image={'/images/courses-4.png'} cat_title={'برامج الدبلوم'}  />
            </div>
        </div>
        </div>
           
    </div>
  )
}

export default CategoryPage