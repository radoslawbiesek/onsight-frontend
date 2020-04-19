import React from 'react';

import styles from './FilterBarSection.module.css';

const FilterBarSection = ({ filterType, filters, addFilter, removeFilter }) => {
  const handleChange = (event) => {
    if (event.target.checked) {
      addFilter(filterType, event.target.name);
    } else {
      removeFilter(filterType, event.target.name);
    }
  };

  return (
    <form onChange={handleChange} className={styles.section}>
      <h5 className={styles.title}>
        {filterType[0].toUpperCase() + filterType.slice(1)}
      </h5>
      {filters.map((filterValue) => (
        <label className={styles.item} key={filterValue}>
          <input className={styles.input} type='checkbox' name={filterValue} />
          {filterValue}
        </label>
      ))}
    </form>
  );
};
export default FilterBarSection;
