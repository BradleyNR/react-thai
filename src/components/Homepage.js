import React, { Component } from 'react';
import MenuItems from './MenuItems.js'

let seedData = [
  {number: 1, title: 'Pad Thai', description: 'Thai rice noodle dish with egg, tofu, bean sprouts, and peanuts', price: 9.95},
  {number: 2, title: 'Massaman Curry', description: 'Thai rice noodle dish with egg, tofu, bean sprouts, and peanuts', price: 12.95},
  {number: 3, title: 'Tom Yum', description: 'Thai rice noodle dish with egg, tofu, bean sprouts, and peanuts', price: 8.95},
  {number: 4, title: 'Spring Roll', description: 'Thai rice noodle dish with egg, tofu, bean sprouts, and peanuts', price: 7.95},
  {number: 5, title: 'Green Curry', description: 'Thai rice noodle dish with egg, tofu, bean sprouts, and peanuts', price: 14.95},
  {number: 6, title: 'Bami mu daeng', description: 'Thai rice noodle dish with egg, tofu, bean sprouts, and peanuts', price: 9.95},
  {number: 7, title: 'Pathongko', description: 'Thai rice noodle dish with egg, tofu, bean sprouts, and peanuts', price: 6.95},
  {number: 8, title: 'Kaeng dok salae', description: 'Thai rice noodle dish with egg, tofu, bean sprouts, and peanuts', price: 3.95},
  {number: 9, title: 'Kai tun ya chin', description: 'Thai rice noodle dish with egg, tofu, bean sprouts, and peanuts', price: 8.95},
  {number: 10, title: 'Tom mara', description: 'Thai rice noodle dish with egg, tofu, bean sprouts, and peanuts', price: 2.95},
  {number: 11, title: 'Nuea yang nam tok', description: 'Thai rice noodle dish with egg, tofu, bean sprouts, and peanuts', price: 24.95},
  {number: 12, title: 'Som tam pu', description: 'Thai rice noodle dish with egg, tofu, bean sprouts, and peanuts', price: 12.95}
];

const BASE_URL = 'http://tiny-lasagna-server.herokuapp.com/collections/thai-orders';

class Homepage extends Component{
  constructor(props){
    super(props);

    this.state = {
      orders: [],
      entrees: seedData,
      orderAmount: 0,
      price: 0,
      name: '',
      phone: ''
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
    this.setState({price: totalPrice})
    console.log(this.state.price);
  }

  placeOrder = (e) => {
      e.preventDefault();
    if (this.state.orders) {
      let data = {name: this.state.name, phone: this.state.phone, total: this.state.price, order: this.state.orders}
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

      this.setState({orders: [], name: '', phone: '', total: '', orderAmount: 0, price: 0})
    }
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

  render(){
    let entreeItem = this.state.entrees.map((item, index) => {
      return(
        <MenuItems key={item.number} addToOrder={this.addToOrder} title={item.title} number={item.number} description={item.description} price={item.price} />
      )
    });

    let orderList = this.state.orders.map((item, index) => {
      return(
        <p key={item.number} className='col-md-12 well'>{item.title} - {item.price}</p>
      )
    })

    return(

      <div className='row jumbotron'>
          <div className='col-md-4'>
            <h2 className='order-total-number'>Cart: {this.state.orderAmount}</h2>
            <h2 className='order-total-price'>Total Price: ${this.state.price.toFixed([2])}</h2>
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
