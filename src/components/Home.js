import React from 'react';
import Hero from './Hero';
import Filters from './Filters';
import Products from './Products';

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Hero />
                </div>
                <div className="row">
                    <div className="col col-md-3">
                        <Filters />
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