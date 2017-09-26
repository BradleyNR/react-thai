import React, { Component } from 'react';

class SplashPage extends Component{
  constructor(props){
    super(props);

    this.state = {
    }
  }

  render(){
    return(
      <div className='splash-page'>
        <h1 className='splash-title'>Welcome to Majestic Thai!</h1>
        <h4 className='splash-text'>We have been providing thai cusine and Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
        <a href='/react-thai/menu' className='col-md-4 col-md-offset-4 btn btn-primary'>View our Menu</a>
      </div>
    )
  }
}


export default SplashPage;
