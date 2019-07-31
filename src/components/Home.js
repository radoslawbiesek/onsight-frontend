import React from 'react';
import Hero from './Hero';
import Filters from './Filters';
import Products from './Products';
import Categories from './Categories';

class Home extends React.Component {

    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render() {
        return (
            <div class="container">
                <div className="row">
                    <Hero />
                </div>
                <div className="row">
                    <div className="col col-md-3">
                        <Categories />
                    </div>
                    <div className="col col-md-9">
                        <Products />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;