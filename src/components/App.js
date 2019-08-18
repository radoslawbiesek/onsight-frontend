import React from 'react';
import { HashRouter, Route} from 'react-router-dom';

import Navigation from './Nav';
import Home from './Home';
import Cart from './Cart';
import Newsletter from './Newsletter';
import Footer from './Footer';
import ProductPage from './ProductPage';

class App extends React.Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className='container'>
          <Navigation />
          <Route exact path='/' component={Home} />
          <Route path='/cart' component={Cart} />
          <Route path='/product/:id' component={ProductPage}/>
          <Newsletter />
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
