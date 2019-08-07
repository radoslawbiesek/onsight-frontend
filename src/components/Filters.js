import React from 'react';
import { connect } from 'react-redux';

import Filter from './Filter';
import FilterColor from './FilterColor';

import { resetFilters, removeFilter, filterProducts } from '../actions/filterActions';
import { selectPage } from '../actions/pageActions';

const Filters = (props) => {

    const handleRemove = (filterType, filterValue) => {
        props.removeFilter(filterType, filterValue);
        props.filterProducts();
        props.selectPage(1);
    }

    const handleReset = () => {
        props.resetFilters();
        props.filterProducts();
        props.selectPage(1);
    }

    const renderActiveFilters = () => {
        let activeFilters = [];
        for (let filterType in props.filters) {
            props.filters[filterType].forEach((filterValue, index) => {
                activeFilters.push(
                    <li 
                        className="active-filters__item" 
                        key={filterType+index}
                        onClick={()=>handleRemove(filterType, filterValue)}
                    >
                        {filterValue + ' x'}
                    </li>
                )
            });
        };
        return (
            <div className='active-filters'>
                <ul className='active-filters__list'>
                    {activeFilters}
                </ul>
                <a className='active-filters__reset' onClick={handleReset}>Reset filters</a>
            </div>
        )
    }

    return (
        <div>
            {Object.values(props.filters).reduce((acc, item) => acc.concat(item)).length ? renderActiveFilters() : null }
            <Filter 
                title="Categories"
                type="category"
                items={props.items}
            />
            <h1 className="filters__title">Filter by</h1>
            <FilterColor 
                title="Color"
                type="color"
                items={props.items}
            />
            <Filter 
                title="Size"
                type="size"
                items={props.items}
            />
            <Filter 
                title="Brands"
                type="brand"
                items={props.items}
            />
            <div>
                <p className='filters__title'>Popular Tags</p>
                <p className='filters__item'>Climbing, Bouldering, Mountain, Equipment, On Sight</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.itemsAll,
        filters: state.filters
    }
};

const mapDispatchToProps = {
    resetFilters,
    removeFilter,
    filterProducts,
    selectPage
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);