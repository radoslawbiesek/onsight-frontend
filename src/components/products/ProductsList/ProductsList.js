import React from 'react';

import ProductsListItem from './ProductsListItem/ProductsListItem';

const ProductsList = ({ products, addToCart }) => {
  return (
    <React.Fragment>
      {products.map((product) => (
        <ProductsListItem
          key={product._id}
          addToCart={() => addToCart(product)}
          {...product}
        />
      ))}
    </React.Fragment>
  );
};

export default ProductsList;
