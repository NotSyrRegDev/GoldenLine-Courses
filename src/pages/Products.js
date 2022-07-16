import React from 'react';
import HeroSlide from '../components/HeroSlide';
import ProductsFilter from '../components/ProductsFilter';

const Products = () => {
  return (
    <div>

    <HeroSlide hero_image={'products-hero.jpg'} hero_headline={'جميع المنتجات'} />

    <ProductsFilter  />

    </div>
  )
}

export default Products