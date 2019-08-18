import React from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../actions/cartActions';
import { getProduct } from '../actions/pageActions';

import './Product.css';

class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getProduct(this.props.match.params.id);
    }

    handleChange(e) {
        this.setState({ quantity: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addToCart(this.props.item.id, this.state.quantity);
    }

    render() {
        let toRender;
        if (this.props.item.id === this.props.match.params.id) {
            toRender = (
                <div className='product-page'>
                    <div>
                        <img className='product-page__image' src={this.props.item.img} alt={this.props.item.name}/>
                    </div>
                    <div>
                        <h1 className='product__name'>{this.props.item.name}</h1>
                        <p className='product__brand'>{this.props.item.brand}</p>
                        <p className='product__price'>${parseFloat(this.props.item.price).toFixed(2)}</p>
                        <p className='product-page__desc'>{this.props.item.desc}</p>
                        <form onSubmit={this.handleSubmit} className='product-page__form'>
                            <input
                                className='product-page__input'
                                type='number' 
                                id='quantity'
                                value={this.state.quantity}
                                onChange={this.handleChange}
                            />
                            <button className='product-page__button'>Add to cart</button>
                        </form>
                    </div>
                </div>
            )
        } else {
            toRender = <div></div>
        }
        return <div>{toRender}</div>;
    }
}


const mapStateToProps = (state) => {
    return {
        item: state.selectedProduct
    }    
}

const mapDispatchToProps = {
    addToCart,
    getProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);


