import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Navigation from './Nav';

function App() {
  return (
    <Router>
      <div className='container'>
        <Navigation />
        {/* <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/blog' component={Blog} />
        <Route path='/cart' component={Cart} /> */}
      </div>
    </Router>
  );
}

export default App;
