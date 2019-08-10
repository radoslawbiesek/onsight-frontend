import React from 'react';
import { connect } from 'react-redux';

import { addFilter, filterProducts } from '../actions/filterActions';
import { selectPage } from '../actions/pageActions';

import './Filter.css';

function FilterColor(props) {

    const colorPalette = {
        'green' : '#2ecc71',
        'blue' : '#3498db',
        'purple' : '#8e44ad',
        'yellow' : '#f1c40f',
        'orange' : '#f39c12',
        'red' : '#e74c3c',
        'grey' : '#bdc3c7'
    }

    const handleClick = (type, item) => {
        props.addFilter(type, item);
        props.filterProducts();
        props.selectPage(1);
    }

    let colors = [];
    props.items.forEach(item => {
        item.color.forEach(color => {
            if (colors.indexOf(color) === -1 ) colors.push(color);
        });
    });
    
    let colorsList = colors.map(item => {
        const colorStyles = (item === 'white') ? {background : 'white', border : '1px solid #bdc3c7'} : {background : colorPalette[item]};
        return (
            <li
                className="filters__color"
                key={props.type+colors.indexOf(item)}
                style={colorStyles}
                alt={item}
                onClick={()=>handleClick(props.type, item)}
            />
        )
    })

    return (
        <div>
            <p className='filters__title'>{props.title}</p>
            <ul className='filters__list filters__list--colors'>
                {colorsList}
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
    selectPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterColor);