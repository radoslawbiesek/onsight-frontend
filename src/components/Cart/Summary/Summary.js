import React from 'react';
import './Summary.css';

const Summary = ({
  totalPrice,
  discount,
  shippingCost,
  freeShippingFrom,
  checkout,
}) => {
  const freeShipping = totalPrice > freeShippingFrom;

  return (
    <div className='summary'>
      <h2 className='summary__title'>Summary</h2>
      <hr />
      <div className='summary__row'>
        <span>Products: </span>
        <span>{'$' + totalPrice.toFixed(2)}</span>
      </div>
      {discount ? (
        <div className='summary__row'>
          <span>Discount: </span>
          <span>{'-$' + (totalPrice * discount).toFixed(2)}</span>
        </div>
      ) : (
        ''
      )}
      <div className='summary__row'>
        <span>Shipping: </span>
        {totalPrice > freeShippingFrom ? (
          <span>
            <s>${shippingCost.toFixed(2)}</s> $0.00
          </span>
        ) : (
          <span>${shippingCost.toFixed(2)}</span>
        )}
      </div>
      <hr />
      <div className='summary__row'>
        <span>Total: </span>
        <span>
          $
          {(
            totalPrice * (1 - discount) +
            (!freeShipping ? shippingCost : 0)
          ).toFixed(2)}
        </span>
      </div>
      <button className='summary__checkout' onClick={checkout}>
        Continue to checkout
      </button>
      {totalPrice > freeShippingFrom ? (
        <p className='summary__info'>You received free shipping!</p>
      ) : (
        <p className='summary__info'>Free shipping from ${freeShippingFrom}.</p>
      )}
    </div>
  );
};

export default Summary;
