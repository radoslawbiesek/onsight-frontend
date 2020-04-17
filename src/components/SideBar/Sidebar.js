import React from 'react';

import ActiveFilters from '../Products/ActiveFilters/ActiveFilters';
import SidebarSection from './SideBarSection/SidebarSection';
import Filter from '../Products/Filter/Filter';
import FilterColor from '../Products/Filter/FilterColor';
import FilterPrice from '../Products/Filter/FilterPrice';
import Tags from './Tags/Tags';

import './Sidebar.css';

const Sidebar = (props) => {
  const handleRemove = (filterType, filterValue) => {
    props.removeFilter(filterType, filterValue);
    props.filterProducts();
  };

  const handleReset = () => {
    props.resetFilters();
    props.filterProducts();
  };

  return (
    <aside class='sidebar'>
      <ActiveFilters
        filters={props.filters}
        onRemove={handleRemove}
        onReset={handleReset}
      />

      <SidebarSection title='Category'>
        <Filter type='category' items={props.items} />
        <hr />
      </SidebarSection>

      <SidebarSection title='Filter by'>
        <FilterPrice title='Price' items={props.items} />
        <FilterColor title='Color' type='color' items={props.items} />
        <Filter title='Size' type='size' items={props.items} />
        <Filter title='Brands' type='brand' items={props.items} />
        <hr />
      </SidebarSection>

      <Tags
        title='Popular tags'
        content='Climbing, Bouldering, Mountain, Equipment, On Sight'
      />
    </aside>
  );
};

export default Sidebar;
