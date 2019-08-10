import React from 'react';
import { connect } from 'react-redux';

import ProductInCart from './ProductInCart';
import { removeFromCart, addToCart, decreaseAmount } from '../actions/cartActions';

import './Cart.css';

const Cart = (props) => {

    const renderTable = () => {
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
                <table className='cart-table'>
                    <thead>
                        <tr className='cart-table__row cart-table__row--header'>
                            <th className='cart-table__data cart-table__data--header'>Product</th>
                            <th className='cart-table__data cart-table__data--header'></th>
                            <th className='cart-table__data cart-table__data--header'>Price</th>
                            <th className='cart-table__data cart-table__data--header'>Quantity</th>
                            <th className='cart-table__data cart-table__data--header'>Total</th>
                            <th className='cart-table__data cart-table__data--header'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemsToRender}
                        <tr className='cart-table__row cart-table__row--summary'>
                            <td className='cart-table__data'></td>
                            <td className='cart-table__data'></td>
                            <td className='cart-table__data'></td>
                            <td className='cart-table__data'></td>
                            <td className='cart-table__data'>{'$'+props.totalPrice.toFixed(2)}</td>
                            <td className='cart-table__data'></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }


    return (
        <div className='cart'>
            <h1 className='cart__title'>YOUR CART</h1>
            {props.itemsInCart.length ? renderTable() : <p className='cart__empty'>You have nothing in your cart.</p>}
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        itemsInCart: state.itemsInCart,
        totalPrice: state.totalPrice,
    }
}

const mapDispatchToProps = {
    removeFromCart,
    addToCart,
    decreaseAmount,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);