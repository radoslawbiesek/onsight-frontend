import React from 'react';

import './Filter.css';

function FilterColor(props) {
  const colorPalette = {
    green: '#2ecc71',
    blue: '#3498db',
    purple: '#8e44ad',
    yellow: '#f1c40f',
    orange: '#f39c12',
    red: '#e74c3c',
    grey: '#bdc3c7',
  };

  const handleClick = (type, item) => {
    props.addFilter(type, item);
    props.filterProducts();
  };

  let colors = [];
  props.items.forEach((item) => {
    item.color.forEach((color) => {
      if (colors.indexOf(color) === -1) colors.push(color);
    });
  });

  let colorsList = colors.map((item) => {
    const colorStyles =
      item === 'white'
        ? { background: 'white', border: '1px solid #bdc3c7' }
        : { background: colorPalette[item] ? colorPalette[item] : item };
    return (
      <li
        className='filter__color'
        key={props.type + colors.indexOf(item)}
        style={colorStyles}
        alt={item}
        onClick={() => handleClick(props.type, item)}
      />
    );
  });

  return (
    <div className='filter--color'>
      <p className='filter__title'>{props.title}</p>
      <ul className='filter__list filter__list--colors'>{colorsList}</ul>
    </div>
  );
}

export default FilterColor;
