import React from 'react';
import './Product.css';

function Product(props) {
    return (
        <div className='product__card'>
            <div className='product__image'>
                <img src={props.img} alt={props.name}/>
            </div>
            <div className="product__label">
                <p className='product__name'>{props.name}</p>
                <p className='product__price'>${parseFloat(props.price).toFixed(2)}</p>
                <button className='product__add-button' onClick={props.onClick}>[  ] Add to cart</button>
            </div>
        </div>    
    );
}

export default Product;