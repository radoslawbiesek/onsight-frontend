import React from 'react';

const ShowingInfo = ({ currentPage, productsPerPage, count }) => {
  let showingStart = 1 + (currentPage - 1) * productsPerPage;
  let showingStop = Math.min(currentPage * productsPerPage, count);
  return (
    <p className='products__showing'>
      Showing {Math.min(showingStart, count)} - {showingStop} of{' '}
      {count} results
    </p>
  );
};

export default ShowingInfo;
