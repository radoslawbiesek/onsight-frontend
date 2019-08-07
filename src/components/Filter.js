import React from 'react';
import { connect } from 'react-redux';

import { addFilter, filterProducts } from '../actions/filterActions';
import { selectPage } from '../actions/pageActions';

import './Filter.css';


function Filter(props) {
    
    const handleClick = (item) => {
        props.addFilter(props.type, item);
        props.filterProducts();
        props.selectPage(1);
    }

    let filtersCounter = {};
    props.items.forEach(item => {
        if (filtersCounter[item[props.type]] !== undefined) {
            filtersCounter[item[props.type]] += 1;
        } else {
            filtersCounter[item[props.type]] = 1;
        };
    })

    let filtersList = [];
    for (let item in filtersCounter) {
        filtersList.push(
            <li 
                className='filters__item' 
                key={props.type+filtersList.length}
                onClick={()=>handleClick(item)}
            >
                {item}
                <span className='filters__number'>{filtersCounter[item]}</span>
            </li>
        );
    }

    return (
        <div>
            <p className='filters__title'>
                {props.title}
            </p>
            <ul className='filters__list'>
                {filtersList}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.itemsToDisplay
    }
}
const mapDispatchToProps = {
    addFilter,
    filterProducts,
    selectPage
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);