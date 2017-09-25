import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Homepage from '../components/Homepage.js';
import SplashPage from '../components/SplashPage.js'

function BaseLayout(props){
  return(
    <Router>
      <div className='container-fluid'>
        <header className='jumbotron row main-header'>
          <h1 className='col-md-12 main-header-title'>Majestic Thai</h1>
        </header>


        <main className='container'>
          <Route path='/' exact component={SplashPage} />
          <Route path='/menu' exact component={Homepage} />
        </main>
      </div>
    </Router>
);
}

export default BaseLayout;
