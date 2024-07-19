import React from 'react';
import Home from '../Home/Home';
import Mission from '../Mission/Mission';
import FeaturedStudents from '../FeaturedStudents/FeaturedStudents';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Products from '../Products/Products';

function Master() {
  return (
    <div>
      <Home id="home" />
      <Mission />
      <FeaturedStudents />
      <About />
      <Contact />
      <Products />
    </div>
  );
}

export default Master;
