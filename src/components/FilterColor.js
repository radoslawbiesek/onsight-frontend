import React from 'react';
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

    let colors = [];
    props.items.forEach(item => {
        if(colors.indexOf(item[props.type]) === -1) {
            colors.push(item[props.type])
        }
    })
    
    let colorsList = colors.map(item => {
        const colorStyles = (item === 'white') ? {background : 'white', border : '1px solid #bdc3c7'} : {background : colorPalette[item]};
        return (
            <li
                className="filters__color"
                key={props.type+colors.indexOf(item)}
                style={colorStyles}
                alt={item}
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

export default FilterColor;