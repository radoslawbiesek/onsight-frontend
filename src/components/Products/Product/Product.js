import React from 'react';
import { Link } from 'react-router-dom';

import './Product.css';
import backpack from '../images/backpack.png';

function Product(props) {
    return (    
        <div className='product__card'>
            <div className='product__image'>
                <Link to={'product/'+props.item.id}>
                    <img src={props.item.img} alt={props.item.name}/>
                </Link>
            </div>
            <div className="product__label">
                <p className='product__name'>{props.item.name}</p>
                <p className='product__brand'>{props.item.brand}</p>
                <p className='product__price'>${parseFloat(props.item.price).toFixed(2)}</p>
                <button className='product__add-button' onClick={props.onClick}><img className='product__backpack' alt='add' src={backpack}/> Add to cart</button>
            </div>
        </div>
    );
}

export default Product;