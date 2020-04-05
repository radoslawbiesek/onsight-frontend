import React from 'react';

import Nav from './Nav/Nav';
import Newsletter from '../Newsletter/Newsletter';
import Footer from './Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className='container'>
      <Nav />
      {children}
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Layout;
