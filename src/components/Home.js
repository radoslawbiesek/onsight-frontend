import React from 'react';
import Hero from './Hero';
import Filters from './Filters';
import Products from './Products';
import Newsletter from './Newsletter';
import './Home.css';

class Home extends React.Component {

    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render() {
        return (
            <div className='home__container'>
                <Hero />
                <Filters />
                <Products />
                <Newsletter />
            </div>
        )
    }
}

export default Home;