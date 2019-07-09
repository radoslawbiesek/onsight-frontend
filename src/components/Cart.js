import React from 'react';
import {connect } from 'react-redux';
import Product from './Product';

class Cart extends React.Component {

    render() {
        
        let itemsList = this.props.items.map(item => {
            return (
                <div>
                <Product
                    key = {item.id}
                    img = {item.img}
                    name = {item.name}
                    desc = {item.desc}
                    price = {item.price}
                />
                <p>Quantity: {item.quantity}</p>
                </div>
            );
        });

        return (
            <div>
                <h1> CART </h1>
                <div className='products'>
                    {itemsList}
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        items: state.itemsInCart,
    }
}

export default connect(mapStateToProps)(Cart);