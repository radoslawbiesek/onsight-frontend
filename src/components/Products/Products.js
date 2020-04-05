import React, { useEffect, useState } from 'react';

import * as productService from '../../service/product';

import Product from './Product/Product';
import SortBySelect from './SortBySelect/SortBySelect';
import ShowingInfo from './ShowingInfo/ShowingInfo';
import PageLinks from './PageLinks/PageLinks';
import Backdrop from '../UI/Backdrop/Backdrop';

import './Products.css';

const SORTING_OPTIONS = [
  { title: 'A-Z', value: 'name' },
  { title: 'Z-A', value: '-name' },
  { title: 'Lowest Price', value: 'price' },
  { title: 'Highest Price', value: '-price' },
];

const PRODUCTS_PER_PAGE = 6;

const Products = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sorting, setSorting] = useState('name');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const offset = (currentPage - 1) * PRODUCTS_PER_PAGE;
        const limit = PRODUCTS_PER_PAGE;
        const { products, count } = await productService.getProducts(
          limit,
          offset,
          sorting
        );
        setLoading(false);
        setProducts(products);
        setCount(count);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    setLoading(true);
    fetchProducts();
  }, [currentPage, sorting]);

  return (
    <main>
      <div className='products__top-nav'>
        <SortBySelect options={SORTING_OPTIONS} onChange={setSorting} />
        <ShowingInfo
          currentPage={currentPage}
          productsPerPage={PRODUCTS_PER_PAGE}
          count={count}
        />
      </div>
      <div className='products-grid'>
        {loading && <Backdrop />}
        {error ? (
          <p>Something went wrong. Try again.</p>
        ) : (
          products.map((product) => <Product key={product._id} {...product} />)
        )}
      </div>
      <PageLinks
        totalPages={Math.ceil(count / PRODUCTS_PER_PAGE)}
        currentPage={currentPage}
        onClick={setCurrentPage}
      />
    </main>
  );
};

export default Products;
