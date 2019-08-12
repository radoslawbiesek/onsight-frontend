import React from 'react';


const ProductInCart = (props) => {
    return (
        <tr className='cart-table__row'>
            <td className='cart-table__data'>
                <img 
                    className='cart-table__image'
                    src = {props.item.img} 
                    alt={props.item.name}
                />
            </td>
            <td className='cart-table__data'>
                <p className='cart-table__brand'>{props.item.brand}</p>
                <p className='cart-table__name'>{props.item.name}</p>
            </td>
            <td className='cart-table__data'>
                <p className='cart-table__price'>{'$'+parseFloat(props.item.price).toFixed(2)}</p>
            </td>
            <td className='cart-table__data'>
                <button className='cart-table__button' onClick={props.onIncrease}>+</button>
                <p className='cart-table__quantity'>{props.item.quantity}</p>
                <button className='cart-table__button' onClick={props.onDecrease}>-</button>
            </td>
            <td className='cart-table__data'>
                <p className='cart-table__price'>{'$'+parseFloat(props.item.price*props.item.quantity).toFixed(2)}</p>
            </td>
            <td className='cart-table__data'>
                <button className='cart-table__button' onClick={props.onRemove}>X</button>
            </td>
        </tr>
    )
}

export default ProductInCart;