import React from 'react';
import { Switch, Route } from 'react-router';

import Cart from '../components/Cart/Cart';
import ProductPage from '../components/ProductPage/ProductPage';
import Home from '../components/Home';

const routes = (
  <Switch>
    <Route path='/cart' component={Cart} />
    <Route path='/product/:id' component={ProductPage} />
    <Route path='/' component={Home} />
  </Switch>
);

export default routes;
