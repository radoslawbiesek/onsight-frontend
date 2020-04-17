import React from 'react';
import ReactDOM from 'react-dom';

import { CartProvider } from './context/cartContext';

import App from './components/App';

import './index.css';

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById('root')
);
