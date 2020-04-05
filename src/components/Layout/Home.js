import React from 'react';

import Hero from './Hero';
import Sidebar from './Sidebar';
import Products from './Products';

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <Hero />
            </div>
            <div className="row">
                <div className="col col-md-3">
                    <Sidebar />
                </div>
                <div className="col col-md-9">
                    <Products />
                </div>
            </div>
        </div>
    )
}

export default Home;