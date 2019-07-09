import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import './Home.css';
import { addToCart } from '../actions/cartActions';

class Home extends React.Component {

    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render() {
        
        let itemsList = this.props.items.map(item => {
            return (
                <Product
                    key = {item.id}
                    img = {item.img}
                    name = {item.name}
                    desc = {item.desc}
                    price = {item.price}
                    onClick = {()=>{this.handleClick(item.id)}}
                />
            )
        });

        return (
            <div>
                <h1> H O M E </h1>
                <div className='products'>
                    {itemsList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => {dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);