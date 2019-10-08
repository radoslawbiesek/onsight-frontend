import React from 'react';
import { connect } from 'react-redux';

import ActiveFilters from './ActiveFilters';
import SidebarSection from './SidebarSection';
import Filter from './Filter';
import FilterColor from './FilterColor';
import FilterPrice from './FilterPrice';
import Tags from './Tags';

import './Sidebar.css';

import { resetFilters, removeFilter, filterProducts } from '../actions/filterActions';
import { selectPage } from '../actions/pageActions';
import { sortBy } from '../actions/sortingActions';

const Sidebar = (props) => {

    const handleRemove = (filterType, filterValue) => {
        props.removeFilter(filterType, filterValue);
        props.filterProducts();
        props.selectPage(1);
        props.sortBy(props.sortingBy);
    }

    const handleReset = () => {
        props.resetFilters();
        props.filterProducts();
        props.selectPage(1);
        props.sortBy(props.sortingBy);
    }

    return (
        <aside class='sidebar'>
            <ActiveFilters 
                filters={props.filters} 
                onRemove={handleRemove} 
                onReset={handleReset}
            /> 
            
            <SidebarSection title='Category'>
                <Filter 
                    type="category"
                    items={props.items}
                />
                <hr/>
            </SidebarSection>

            <SidebarSection title='Filter by'>
                <FilterPrice
                    title="Price"
                    items={props.items}
                />
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
                <hr />
            </SidebarSection>

            <Tags
                title='Popular tags'
                content='Climbing, Bouldering, Mountain, Equipment, On Sight'
            />
        </aside>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.itemsAll,
        filters: state.filters,
        sortingBy: state.sortingBy
    }
};

const mapDispatchToProps = {
    resetFilters,
    removeFilter,
    filterProducts,
    selectPage,
    sortBy,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);