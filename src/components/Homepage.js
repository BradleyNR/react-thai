import React, { Component } from 'react';
import MenuItems from './MenuItems.js'
import seedData from '../data/seed.js';

const BASE_URL = 'https://tiny-lasagna-server.herokuapp.com/collections/thai-orders';

class Homepage extends Component{
  constructor(props){
    super(props);

    this.state = {
      orders: [],
      entrees: seedData,
      orderAmount: 0,
      price: 0,
      name: '',
      phone: '',
      tax: 0,
      pricePlusTax: 0,
      orderMessage: null
    }
  }

  //Grabbing from MenuItems and pushing to global state
  addToOrder = (menuItem) => {
    // order list
    let stateOrders = this.state.orders;
    stateOrders.push(menuItem);
    this.setState({orders: stateOrders})
    console.log('testing state :', this.state.orders);
    // order amount
    let orderAmount = this.state.orders.length;
    this.setState({orderAmount: orderAmount})
    console.log(this.state.orderAmount);
    //order const
    let totalPrice = this.state.price;
    totalPrice += menuItem.price;
    let tax = totalPrice * 0.07
    let pricePlusTax = totalPrice + tax;
    this.setState({price: totalPrice, tax: tax, pricePlusTax: pricePlusTax})
    console.log(this.state.price);
  }

  placeOrder = (e) => {
    e.preventDefault();
    //checking to se if at least one thing is in the orders
    if (this.state.orders[0]) {
      let data = {name: this.state.name, phone: this.state.phone, total: this.state.pricePlusTax, order: this.state.orders}
      fetch(BASE_URL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        return console.log(response);
      });

      this.setState({orders: [], name: '', phone: '', total: '', orderAmount: 0, price: 0, tax: 0, pricePlusTax: 0, orderMessage: 'Your order has been placed!'})
    }

    setTimeout(() => {
      this.setState({orderMessage: null})
    }, 5000);
  }

  updateName = (e) => {
    e.preventDefault();
    this.setState({name: e.target.value});
    console.log(this.state.name);
  }

  updatePhone = (e) => {
    e.preventDefault();
    this.setState({phone: e.target.value});
    console.log(this.state.phone);
  }

  removeFromOrder = (index, e) => {
    e.preventDefault();
    let orders = this.state.orders;
    orders.splice(index, 1);
    this.setState((orders: orders))
  }

  render(){
    let entreeItem = this.state.entrees.map((item, index) => {
      return(
        <MenuItems key={item.number} addToOrder={this.addToOrder} title={item.title} number={item.number} description={item.description} price={item.price} />
      )
    });

    let orderList = this.state.orders.map((item, index) => {
      return(
        <div className='col-md-12 well order-per-item'>
          <p key={item.number} className='col-md-10'>{item.title} - ${item.price}</p>
          <button onClick={this.removeFromOrder.bind(this, index)} type="submit" className="btn btn-danger col-md-2">X</button>
        </div>
      )
    })

    return(

      <div className='row jumbotron main-content-area'>
          <div className='col-md-4'>
            <h2 className='order-total-number'>Cart: {this.state.orderAmount} Item(s)</h2>
            <h2 className='order-price'>Price: ${this.state.price.toFixed([2])}</h2>
            <h4 className='tax'>Tax: ${this.state.tax.toFixed([2])}</h4>
            <h2 className='total-price'>Total Price: ${this.state.pricePlusTax.toFixed([2])}</h2>
            {this.state.orderMessage ? <p>{this.state.orderMessage}</p> : null}
            <div className='order-list'>{orderList}</div>

            <form className="form-inline" onSubmit={this.placeOrder}>
              <div className="form-group">
                <label className="sr-only" htmlFor="name">Name</label>
                <input onChange={this.updateName} name='name' type="text" className="form-control" id="name" placeholder="Name" value={this.state.name} />
              </div>
              <div className="form-group">
                <label className="sr-only" htmlFor="phonenumber">Phone Number</label>
                <input onChange={this.updatePhone} name='phonenumber' type="text" className="form-control" id="phonenumber" placeholder="Phone Number" value={this.state.phone} />
              </div>
              <button type="submit" className="btn btn-primary col-md-12">Place Order!</button>
            </form>

          </div>
          <div className='col-md-8'>{entreeItem}</div>
      </div>
    )
  }
}

export default Homepage;
