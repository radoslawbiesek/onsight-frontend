import React from 'react';
import { connect } from 'react-redux';
import Hero from './Hero';
import Filters from './Filters';
import Products from './Products';

class Home extends React.Component {

    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Hero />
                </div>
                <div className="row">
                    <div className="col col-md-3">
                        <Filters 
                            items={this.props.items}
                        />
                    </div>
                    <div className="col col-md-9">
                        <Products />
                    </div>
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

export default connect(mapStateToProps)(Home);