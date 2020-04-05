import React from 'react';
import './ActiveFilters.css';

const ActiveFilters = (props) => {
    let activeFilters = [];

    for (let filterType in props.filters) {
        props.filters[filterType].forEach((filterValue, index) => {
            activeFilters.push(
                <li 
                    className="active-filters__item" 
                    key={filterType+index}
                    onClick={()=>props.onRemove(filterType, filterValue)}
                >
                    {filterValue + ' x'}
                </li>
            )
        });
    };

    const renderActiveFilters = () => {
      return (
        <div className='active-filters'>
            <ul className='active-filters__list'>
                {activeFilters}
            </ul>
            <button className='active-filters__reset' onClick={props.onReset}>Reset filters</button>
            <hr/>
        </div>
      )
    }

    return (
        Object.values(props.filters).reduce((acc, item) => acc.concat(item)).length ? renderActiveFilters() : null
    )
}

export default ActiveFilters;