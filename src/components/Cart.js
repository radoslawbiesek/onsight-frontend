import React from 'react';
import { connect } from 'react-redux';

class Cart extends React.Component {
    render() {
        return (
            <div>
                <h1>CART</h1>
                <p>{JSON.stringify(this.props.itemsInCart)}</p>
            </div>
        )
    }   
}

const mapStateToProps = (state) => {
    return {
        itemsInCart: state.itemsInCart,
    }
}

export default connect(mapStateToProps)(Cart);