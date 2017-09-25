import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Homepage from '../components/Homepage.js';
import SplashPage from '../components/SplashPage.js';
import OrderPage from '../components/OrderPage.js';

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
          <Route path='/orders' exact component={OrderPage} />
        </main>
      </div>
    </Router>
);
}

export default BaseLayout;
