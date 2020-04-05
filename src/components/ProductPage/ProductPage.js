import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../../store/actions/cartActions';

import { getProduct } from '../../service/product';

import './ProductPage.css';

const ProductPage = (props) => {
  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const productId = props.match.params.productId;

  useEffect(() => {
    const fetchProductDetails = async (productId) => {
      try {
        const product = await getProduct(productId);
        setProduct(product);
      } catch (error) {
        setError(true);
      }
    };
    fetchProductDetails(productId);
  }, [productId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addToCart(productId, quantity);
  };

  return (
    <div className='product-page'>
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
    </div>
  );
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(null, mapDispatchToProps)(ProductPage);
