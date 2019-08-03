import React from 'react';
import './Filter.css';

function Filter(props) {

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
                onClick={props.onClick(item)}
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

export default Filter;