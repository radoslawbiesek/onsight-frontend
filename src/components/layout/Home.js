import React from 'react';

import Hero from './Hero/Hero';
import Products from '../products/Products';

const Home = () => {
  return (
    <div className='container'>
      <div className='row'>
        <Hero />
      </div>
      <div className='row'>
        <Products />
      </div>
    </div>
  );
};

export default Home;
