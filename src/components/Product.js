import React from 'react';
import './Product.css';

function Product(props) {
    return (
        <div className='product'>
            <img src={props.img} alt={props.name}/>
            <p>{props.name}</p>
            <p>{props.desc}</p>
            <p>${props.price}</p>
            <button onClick={props.onClick}>Add to cart</button>
        </div>    
    );
}

export default Product;