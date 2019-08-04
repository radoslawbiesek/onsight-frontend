import React from 'react';
import Filter from './Filter';
import FilterColor from './FilterColor';
import { connect } from 'react-redux';
import { resetFilters, removeFilter, getFilteredProducts } from '../actions/filterActions';

class Filters extends React.Component {

    componentWillUpdate() {
        this.props.getFilteredProducts();
    }

    renderActiveFilters = () => {
        let activeFilters = [];
        for (let filterType in this.props.filters) {
            this.props.filters[filterType].forEach((filterValue, index) => {
                activeFilters.push(
                    <li 
                        className="active-filters__item" 
                        key={filterType+index}
                        onClick={()=>this.props.removeFilter(filterType, filterValue)}
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
                <a className='active-filters__reset' onClick={this.props.resetFilters}>Reset filters</a>
            </div>
        )
    }

    render() {
        return (
            <div>
                {Object.values(this.props.filters).reduce((acc, item) => acc.concat(item)).length ? this.renderActiveFilters() : null }
                <Filter 
                    title="Categories"
                    type="category"
                    items={this.props.items}
                />
                <h1 className="filters__title">Filter by</h1>
                <FilterColor 
                    title="Color"
                    type="color"
                    items={this.props.items}
                />
                <Filter 
                    title="Size"
                    type="size"
                    items={this.props.items}
                />
                <Filter 
                    title="Brands"
                    type="brand"
                    items={this.props.items}
                />
                <div>
                    <p className='filters__title'>Popular Tags</p>
                    <p className='filters__item'>Climbing, Bouldering, Mountain, Equipment, On Sight</p>
                </div>
            </div>
        )
    }
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
    getFilteredProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);