import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Navigation from './Nav';
import Home from './Home';
import Cart from './Cart';
import Newsletter from './Newsletter';
import Footer from './Footer';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Navigation />
          <Route exact path='/' component={Home} />

          {/* <Route path='/contact' component={Contact} />
          <Route path='/blog' component={Blog} /> */}
          <Route path='/cart' component={Cart} />
          <Newsletter />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
