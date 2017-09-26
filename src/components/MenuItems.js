import React, { Component } from 'react';

class MenuItems extends Component{
  constructor(props){
    super(props);

    this.state = {
      orders: []
    }
  }

  //passing data to Homepage
  addToOrder = () => {
    this.props.addToOrder({title: this.props.title, price: this.props.price});
  }

  render(){
    return(
        <div className='well col-md-6 entry-box'>

          <p className='col-md-2'>#{this.props.number}:</p>
          <p className='col-md-10 food-title'>{this.props.title}</p>
          <p>{this.props.description}</p>
          <div className='row price-and-button-container'>
            <p className='col-md-6'>${this.props.price}</p>
            <button onClick={this.addToOrder} className='btn btn-success col-md-6'>Add To Order</button>
          </div>
        </div>
    )
  }
}

export default MenuItems;
