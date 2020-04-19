import React from 'react';

import { useFetch } from '../../../hooks';

import FilterBarSection from './FilterBarSection/FilterBarSection';
import Tags from './Tags/Tags';

const FilterBar = ({ addFilter, removeFilter, resetFilters }) => {
  const [result] = useFetch(`/filters`, { result: null });

  return (
    <div>
      {result &&
        Object.keys(result).map((filterType) => (
          <FilterBarSection
            key={filterType}
            filterType={filterType}
            filters={result[filterType]}
            addFilter={addFilter}
            removeFilter={removeFilter}
          />
        ))}
        
      <Tags
        title='Popular tags'
        content='Climbing, Bouldering, Mountain, Equipment, On Sight'
      />
    </div>
  );
};

export default FilterBar;
