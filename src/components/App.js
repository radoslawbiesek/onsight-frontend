import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path='/' component={Navigation}>
          <IndexRoute component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='*' component={NotFound} />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
