import React from 'react';
import ReactDOM from 'react-dom';

import { CartProvider } from './hooks';

import App from './components/App';

import './index.css';

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById('root')
);
