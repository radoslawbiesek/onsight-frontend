import React from 'react';
import './Filter.css';

function FilterColor(props) {

    let colors = [];
    props.items.forEach(item => {
        if(colors.indexOf(item[props.type]) === -1) {
            colors.push(item[props.type])
        }
    })
    
    let colorsList = colors.map(item => {
        const colorStyles = (item === 'white') ? {background : 'white', border : '1px solid lightgrey'} : {background : 'light'+item};
        return (
            <li
                className="filters__color"
                key={props.type+colors.indexOf(item)}
                style={colorStyles}
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