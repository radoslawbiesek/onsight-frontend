import React from 'react';

import { useCart } from '../../hooks';

import Table from './Table/Table';
import CodeInput from './CodeInput/CodeInput';
import Summary from './Summary/Summary';

import './Cart.css';

const Cart = () => {
  const {
    items,
    totalPrice,
    addToCart,
    removeFromCart,
    decreaseAmount,
  } = useCart();

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
        <Summary
          totalPrice={totalPrice}
          discount={0}
          shippingCost={8.99}
          freeShippingFrom={100}
          checkout={() => {}}
        />
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
