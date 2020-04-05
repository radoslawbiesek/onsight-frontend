import React from 'react';
import { connect } from 'react-redux';

import Table from './Table';
import CodeInput from './CodeInput';
import Summary from './Summary';

import { removeFromCart, addToCart, decreaseAmount, checkout } from '../store/actions/cartActions';

import './Cart.css';

const Cart = (props) => {

    const renderCart = () => {
        return (
            <div className='cart'>
                <div>
                    <Table 
                        itemsInCart={props.itemsInCart}
                        removeFromCart={props.removeFromCart}
                        addToCart={props.addToCart}
                        decreaseAmount={props.decreaseAmount}
                    />
                    <CodeInput />
                </div>
                <Summary 
                    productsTotalPrice={props.productsTotalPrice}
                    discount={props.discount}
                    shippingCost={props.shippingCost}
                    freeShipping={props.freeShipping}
                    freeShippingFrom={props.freeShippingFrom}
                />
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