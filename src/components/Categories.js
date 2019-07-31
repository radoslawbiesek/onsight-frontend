import React from 'react';
import { connect } from 'react-redux';
import './Categories.css';

class Categories extends React.Component {

    render() {

        let categories = {};
        this.props.items.forEach(item => {
            let itemCategory = item.category;
            if (categories[itemCategory] !== undefined) {
                categories[itemCategory] += 1;
            } else {
                categories[itemCategory] = 1;
            };
        })

        let categoriesArray = [];
        for (let category in categories) {
            categoriesArray.push(
                <li className='filters__item'>
                    {category}
                    <span className='filters__number'>{categories[category]}</span>
                </li>
            );
        }

        return(
            <div>
                <p className='filters__title'>Categories</p>
                <ul className='filters__list'>
                    {categoriesArray}
                </ul>
            </div>);
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(Categories);