import React from 'react';
import { HashRouter, Route} from 'react-router-dom';

import Navigation from './Nav';
import Home from './Home';
import Cart from './Cart';
import Newsletter from './Newsletter';
import Footer from './Footer';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className='container'>
          <Navigation />
          <Route exact path='/' component={Home} />
          <Route path='/cart' component={Cart} />
          <Newsletter />
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
