import React from 'react';
import { connect } from 'react-redux';

import ProductInCart from './ProductInCart';
import CodeInput from './CodeInput';
import { removeFromCart, addToCart, decreaseAmount, checkout } from '../actions/cartActions';

import './Cart.css';

const Cart = (props) => {

    const renderCart = () => {
        let itemsToRender = [];
        props.itemsInCart.forEach((item, index) => {
            itemsToRender.push(
                <ProductInCart
                    key = {item.id}
                    item = {item}
                    onRemove = {()=>props.removeFromCart(item.id)}
                    onIncrease = {()=>props.addToCart(item.id)}
                    onDecrease = {()=>props.decreaseAmount(item.id)}
                />
            )
        });
        return (
            <div className='cart'>
                <div>
                    <table className='cart-table'>
                        <thead>
                            <tr className='cart-table__row cart-table__row--header'>
                                <th className='cart-table__data cart-table__data--header'>Product</th>
                                <th className='cart-table__data cart-table__data--header'></th>
                                <th className='cart-table__data cart-table__data--header'></th>
                                <th className='cart-table__data cart-table__data--header'>Quantity</th>
                                <th className='cart-table__data cart-table__data--header'>Total</th>
                                <th className='cart-table__data cart-table__data--header'></th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemsToRender}
                        </tbody>
                    </table>
                    <CodeInput />
                </div>
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
            </div>

        );
    }


    return (
        <div>
            <h1 className='cart__title'>YOUR CART</h1>
            {props.itemsInCart.length ? renderCart() : <p className='cart__empty'>Your shopping cart is empty.</p>}
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        itemsInCart: state.itemsInCart,
        productsTotalPrice: state.productsTotalPrice,
        total: state.total,
        freeShipping: state.freeShipping,
        discount: state.discount,
        shippingCost: state.shippingCost,
        freeShippingFrom: state.freeShippingFrom
    }
}

const mapDispatchToProps = {
    removeFromCart,
    addToCart,
    decreaseAmount,
    checkout,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);