import React from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';

import Homepage from '../components/Homepage.js';

function BaseLayout(props){
  return(
    <Router>
      <div className='container'>
        <header className='well'>
          <h1>Majestic Thai</h1>
        </header>


        <main>
          <Route path='/' exact component={Homepage} />
        </main>
      </div>
    </Router>
);
}

export default BaseLayout;
