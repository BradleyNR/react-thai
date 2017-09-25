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
        <div className='well col-md-6'>

          <p className='col-md-2'>#{this.props.number}:</p>
          <p className='cold-md-8'>{this.props.title}</p>
          <p>{this.props.description}</p>
          <p>${this.props.price}</p>
          <button onClick={this.addToOrder} className='btn btn-success'>Add To Order</button>

        </div>
    )
  }
}

export default MenuItems;
