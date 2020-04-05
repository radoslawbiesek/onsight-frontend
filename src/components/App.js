import React from 'react';
import { HashRouter } from 'react-router-dom';

import routes from '../routes/';
import Layout from './Layout/Layout';

const App = () => {
  return (
    <HashRouter basename='/'>
      <Layout>{routes}</Layout>
    </HashRouter>
  );
};

export default App;
