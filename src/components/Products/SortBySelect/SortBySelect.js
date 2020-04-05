import React from 'react';

const SortBySelect = ({ options }) => {
  return (
    <form className='products__sort-by'>
      <label>
        Sort by:
        <select>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
};

export default SortBySelect;
