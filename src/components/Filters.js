import React from 'react';
import Filter from './Filter';
import FilterColor from './FilterColor';

function Filters(props) {
    return (
        <div>
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
        </div>
    )
}

export default Filters;