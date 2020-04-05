import React from 'react';

const PageLinks = ({ totalPages, currentPage, onClick }) => {
  const pageLinks = [];
  for (let i = 0; i < totalPages; i++) {
    let pageNumber = i+1;
    pageLinks.push(
      <li
        key={`page${pageNumber}`}
        onClick={() => onClick(pageNumber)}
        className={
          currentPage === pageNumber
            ? 'products__page-link products__page-link--active'
            : 'products__page-link'
        }
      >
      {`0${pageNumber}`}
      </li>
    );
  }
  
  return (
    <ul className='products__pages-list'>
      {pageLinks}
      {currentPage < totalPages && (
        <li
          key='next-page'
          onClick={() => onClick(currentPage + 1)}
          className='products__page-link'
        >
          &#8594;
        </li>
      )}
    </ul>
  );
};

export default PageLinks;
