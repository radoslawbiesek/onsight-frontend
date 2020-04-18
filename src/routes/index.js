import React from 'react';
import { Switch, Route } from 'react-router';

import Cart from '../components/cart/Cart';
import ProductPage from '../components/product-page/ProductPage';
import Home from '../components/layout/Home';

const routes = (
  <Switch>
    <Route path='/cart' component={Cart} />
    <Route path='/product/:productId' component={ProductPage} />
    <Route path='/' component={Home} />
  </Switch>
);

export default routes;
