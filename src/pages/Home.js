import React from 'react';
import Heroarea from '../components/Heroarea';
import WhoWeAre from '../components/WhoWeAre';
import CategoriesSection from '../components/CategoriesSection';
import CoursesSection from '../components/CoursesSection';
import TestimonealSection from '../components/TestimonealSection';

const Home = () => {
  return (
    <div>
        <div className="app_container">
       <Heroarea />
      
     </div>
     <WhoWeAre />
    <div className="app_container">
      <CategoriesSection />
      <CoursesSection />
      <TestimonealSection />
    </div>

    </div>
  )
}

export default Home