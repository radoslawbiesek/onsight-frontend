import React from 'react';
import { connect } from 'react-redux';

import Product from './Product';

import { addToCart } from '../actions/cartActions';
import { selectPage } from '../actions/pageActions';
import { sortBy } from '../actions/sortingActions';

import './Product.css';

const Products = (props) => {

    const handleClick = (id) => {
        props.addToCart(id);
    }

    const handleChange = (event) => {
        props.sortBy(event.target.value);
    }

    let itemsList = props.items.map(item => {
        return (
            <Product
                key = {item.id}
                img = {item.img}
                name = {item.name}
                desc = {item.desc}
                price = {item.price}
                onClick = {()=>{handleClick(item.id)}}
            />
        )
    });

    let pages = [];
    for (let i = 0; i < props.pages; i++) {
        let pageNumber = i+1;
        pages.push(
            <li 
                key={`page${pageNumber}`}
                onClick={()=>props.selectPage(pageNumber)}
                className={(props.page === pageNumber) ? 'products__page-link products__page-link--active' : 'products__page-link'}
            >
                {`0${pageNumber}`}
            </li>
        )
    };

    let showingStart = 1 + (props.page - 1) * props.showing;
    let showingStop = Math.min(props.page * props.showing, props.itemsLength);

    return (
        <div>
            <div className='products__top-nav'>
                <form className='products__sort-by'>
                    <label>
                        Sort by:
                        <select defaultValue="A-Z" onChange={handleChange}>
                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">Z-A</option>
                            <option value="Lowest Price">Lowest Price</option>
                            <option value="Highest Price">Highest Price</option>
                        </select>
                    </label>
                </form>
                <p className='products__showing'>Showing {Math.min(showingStart, props.itemsLength)} - {showingStop} of {props.itemsLength} results</p>
            </div>
            <div className='products-grid'>
                {itemsList.slice(showingStart-1,showingStop)}
            </div>
            <ul className='products__pages-list'>
                {pages}
                <li 
                    onClick={()=>props.selectPage(props.page+1)}
                    className='products__page-link'
                >
                    &#8594;
                </li>
            </ul>
        </div>    
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.itemsToDisplay,
        itemsLength: state.itemsToDisplayLength,
        page: state.page,
        pages: state.pages,
        showing: state.showing,
        sortingBy: state.sortingBy
    }
}

const mapDispatchToProps = {
    addToCart,
    sortBy,
    selectPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);