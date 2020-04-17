import React from 'react';

import { useCart } from '../../hooks';

import Table from './Table/Table';
import CodeInput from './CodeInput/CodeInput';
import Summary from './Summary/Summary';

import './Cart.css';

const Cart = (props) => {
  const { items, addToCart, removeFromCart, decreaseAmount } = useCart();

  const renderCart = () => {
    return (
      <div className='cart'>
        <div>
          <Table
            itemsInCart={items}
            removeFromCart={removeFromCart}
            addToCart={addToCart}
            decreaseAmount={decreaseAmount}
          />
          <CodeInput />
        </div>
      </div>
    );
  };

  return (
    <div>
      <h1 className='cart__title'>YOUR CART</h1>
      {items.length ? (
        renderCart()
      ) : (
        <p className='cart__empty'>Your shopping cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
