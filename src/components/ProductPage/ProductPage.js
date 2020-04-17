import React, { useState } from 'react';
import { connect } from 'react-redux';

import { useFetch } from '../../hooks';

import { addToCart } from '../../store/actions/cartActions';

import './ProductPage.css';

const ProductPage = ({ match, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const productId = match.params.productId;

  const [{ product }, loading, error] = useFetch(`/products/${productId}`, {
    result: { product: {} },
  });
  
  const handleSubmit = (event) => {
    event.preventDefault();
    addToCart(product, quantity);
  };

  return (
    <div className='product-page'>
      {error && <p>Something went wrong...</p>}
      {loading && <p>Loading...</p>}
      {product && (
        <React.Fragment>
          <div>
            <img
              className='product-page__image'
              src={product.img}
              alt={product.name}
            />
          </div>
          <div>
            <h1 className='product__name'>{product.name}</h1>
            <p className='product__brand'>{product.brand}</p>
            <p className='product__price'>
              ${parseFloat(product.price).toFixed(2)}
            </p>
            <p className='product-page__desc'>{product.desc}</p>
            <form onSubmit={handleSubmit} className='product-page__form'>
              <input
                className='product-page__input'
                type='number'
                id='quantity'
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
              />
              <button className='product-page__button'>Add to cart</button>
            </form>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (product, quantity) => dispatch(addToCart(product, quantity)),
});

export default connect(null, mapDispatchToProps)(ProductPage);
