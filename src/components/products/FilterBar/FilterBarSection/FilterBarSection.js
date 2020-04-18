import React from 'react';

import styles from './FilterBarSection.module.css';

const FilterBarSection = ({ title = '', filters = [] }) => (
  <div className={styles.section}>
    <h5 className={styles.title}>{title}</h5>
    {filters.map((filterValue) => (
      <label className={styles.item}>
        <input className='input' type='checkbox' />
        {filterValue}
      </label>
    ))}
  </div>
);

export default FilterBarSection;
