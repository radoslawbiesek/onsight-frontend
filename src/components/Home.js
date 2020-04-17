import React from 'react';

import Hero from './Layout/Hero/Hero';
import Sidebar from './SideBar/Sidebar';
import Products from './Products/Products';

const Home = () => {
  return (
    <div className='container'>
      <div className='row'>
        <Hero />
      </div>
      <div className='row'>
        <div className='col col-md-3'>
          {/* <Sidebar /> */}
        </div>
        <div className='col col-md-9'>
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Home;
