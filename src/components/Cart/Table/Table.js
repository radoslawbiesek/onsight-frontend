import React from 'react';
import ProductInCart from '../ProductInCart/ProductInCart';
import './Table.css';

const Table = (props) => {
    let itemsToRender = [];
    props.itemsInCart.forEach((item) => {
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
    );
}

export default Table;