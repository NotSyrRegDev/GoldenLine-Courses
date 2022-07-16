import React from 'react';
import HeroSlide from '../components/HeroSlide';
import ProductsFilter from '../components/ProductsFilter';
import {useParams} from 'react-router-dom';

const Categoris = (  ) => {
  let { categoty } = useParams();

  const arraySlides = [

    {
      category_name: 'دورات الحاسب الألي',
      category_thum: 'categories-computer.png'
    },

    {
      category_name: 'دورات الدبلوم',
      category_thum: 'category-dibloma.jpg'
    },


    {
      category_name: 'دورات اللغة الانجليزية',
      category_thum: 'category-english.jpg'
    },

    {
      category_name: 'دورات تربوية',
      category_thum: 'category-educational.png'
    },

  ]

  const determineValue = () => {

    if (categoty === 'computer') {return 0; } 
    if (categoty === 'diploma') {return 1; } 
    if (categoty === 'english') {return 2; } 
    if (categoty === 'educational') {return 3; } 
      
   
  }


  

  return (
    <div>
     
    <HeroSlide hero_image={arraySlides[determineValue()].category_thum} hero_headline={arraySlides[determineValue()].category_name} />
   
    <ProductsFilter categoty={categoty}  />

    </div>
  )
}

export default Categoris