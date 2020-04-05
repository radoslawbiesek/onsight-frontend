import React from 'react';

const SortBySelect = ({ options, onChange }) => {
  return (
    <form className='products__sort-by'>
      <label>
        Sort by:
        <select onChange={(event) => onChange(event.target.value)}>
          {options.map((option) => (
            <option key={option.title} value={option.value}>
              {option.title}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
};

export default SortBySelect;
