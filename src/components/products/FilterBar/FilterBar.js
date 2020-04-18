import React from 'react';

import { useFetch } from '../../../hooks';
import FilterBarSection from './FilterBarSection/FilterBarSection';
import Tags from './Tags/Tags';

const FilterBar = () => {
  const [result, loading, error] = useFetch(`/filters`, { result: null });
  console.log(result, loading, error);
  return (
    <div>
      {result &&
        Object.keys(result).map((filterType) => (
          <FilterBarSection title={filterType} filters={result[filterType]} />
        ))}
      <Tags
        title='Popular tags'
        content='Climbing, Bouldering, Mountain, Equipment, On Sight'
      />
    </div>
  );
};

export default FilterBar;
