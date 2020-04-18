import React from 'react';
import { HashRouter } from 'react-router-dom';

import routes from '../routes/';
import Layout from './layout/Layout';

const App = () => {
  return (
    <HashRouter basename='/'>
      <Layout>{routes}</Layout>
    </HashRouter>
  );
};

export default App;
