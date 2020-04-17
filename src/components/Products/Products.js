import React, { useState, useCallback } from 'react';

import { useFetch } from '../../hooks/';
import { PRODUCTS_PER_PAGE, SORTING_OPTIONS } from '../../constants';

import Product from './Product/Product';
import SortBySelect from './SortBySelect/SortBySelect';
import ShowingInfo from './ShowingInfo/ShowingInfo';
import PageLinks from './PageLinks/PageLinks';
import Backdrop from '../UI/Backdrop/Backdrop';

import './Products.css';

const Products = () => {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState(SORTING_OPTIONS[0].value);

  const getParamsString = useCallback((page, sort) => {
    const offset = (page - 1) * PRODUCTS_PER_PAGE;
    const limit = PRODUCTS_PER_PAGE;
    const params = new URLSearchParams({ limit, offset, sort });
    return params.toString();
  });

  const [
    { products, count },
    loading,
    error,
  ] = useFetch(`/products?${getParamsString(page, sort)}`, {
    result: { products: [], count: null },
  });

  return (
    <main>
      <div className='products__top-nav'>
        <SortBySelect options={SORTING_OPTIONS} onChange={setSort} />
        {count && (
          <ShowingInfo
            currentPage={page}
            productsPerPage={PRODUCTS_PER_PAGE}
            count={count}
          />
        )}
      </div>
      <div className='products-grid'>
        {loading && <Backdrop />}
        {error && <p>Something went wrong. Try again.</p>}
        {products &&
          products.map((product) => <Product key={product._id} {...product} />)}
      </div>
      {count && (
        <PageLinks
          totalPages={Math.ceil(count / PRODUCTS_PER_PAGE)}
          currentPage={page}
          onClick={setPage}
        />
      )}
    </main>
  );
};

export default Products;
