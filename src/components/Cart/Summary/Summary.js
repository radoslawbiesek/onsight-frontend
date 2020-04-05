import React from 'react';
import './Summary.css';

const Summary = (props) => {
    return (
        <div className='summary'>
            <h2 className='summary__title'>Summary</h2>
            <hr/>
            <div className='summary__row'>
                <span>Products: </span>
                <span>{'$'+props.productsTotalPrice.toFixed(2)}</span>
            </div>
            {props.discount ? 
            <div className="summary__row">
                <span>Discount: </span>
                <span>{'-$'+(props.productsTotalPrice*props.discount).toFixed(2)}</span>
            </div>
            : ''}
            <div className='summary__row'>
                <span>Shipping: </span>
                {props.freeShipping ? 
                    <span><s>${props.shippingCost.toFixed(2)}</s> $0.00</span>
                    : 
                    <span>${props.shippingCost.toFixed(2)}</span>
                }
            </div>
            <hr/>
            <div className='summary__row'>
                <span>Total: </span>
                <span>${(props.productsTotalPrice * (1 - props.discount) + (!props.freeShipping ? props.shippingCost : 0)).toFixed(2)}</span>
            </div>
            <button 
                className='summary__checkout'
                onClick={props.checkout}
            >
                Continue to checkout
            </button>
            {props.productsTotalPrice > props.freeShippingFrom ?
            <p className='summary__info'>You received free shipping!</p>
            :
            <p className='summary__info'>Free shipping from ${props.freeShippingFrom}.</p>
            }
        </div>
    )
}

export default Summary;