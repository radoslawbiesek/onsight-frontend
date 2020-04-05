import React from 'react';
import { Link } from 'react-router-dom';

import './Product.css';
import backpack from '../../../images/backpack.png';

const Product = ({ _id, img, name, brand, price }) => {
  return (
    <div className='product__card'>
      <div className='product__image'>
        <Link to={'product/' + _id}>
          <img src={img} alt={name} />
        </Link>
      </div>
      <div className='product__label'>
        <p className='product__name'>{name}</p>
        <p className='product__brand'>{brand}</p>
        <p className='product__price'>${parseFloat(price).toFixed(2)}</p>
        <button className='product__add-button' onClick={() => {}}>
          <img className='product__backpack' alt='add' src={backpack} /> 
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
