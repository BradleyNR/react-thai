import React, { Component } from 'react';

const BASE_URL = 'https://tiny-lasagna-server.herokuapp.com/collections/thai-orders';

class OrderPage extends Component{
  constructor(props){
    super(props);

    this.state = {
      orders: []
    }
  }

  deleteOrder = (uniqueId, e) => {
    e.preventDefault();

    fetch(BASE_URL + '/' + uniqueId, {
    method: 'delete'
    }).then(response =>
    response.json().then(json => {
      return json;
    }));

    let orderList = this.state.orders;

    function findById(order){
        return order._id === uniqueId;
    }

    let index = orderList.indexOf(orderList.find(findById));
    orderList.splice(index, 1)
    this.setState({orders: orderList})
  }

  componentDidMount(){
    fetch(BASE_URL).then((results) => {
      return results.json();
    }).then((orders) => {
    this.setState({orders: orders})
    console.log('orders from server: ', orders);
    });
  }

  render(){
    let orderList = this.state.orders.map((order, index) => {
      let uniqueId = order._id;
      // mapping over array of ordered food in each object from the database
      let dishList = order.order.map((object, index) => {
        return <p className='col-md-6 well'>{object.title} - {object.price}</p>
      });
      return(
        <div key={order._id} className='well col-md-6 order-item-backend'>

          <p className='col-md-6 order-text'>Phone: {order.phone}</p>
          <p className='col-md-6 order-text'>For: {order.name}</p>
          <div className='col-md-12'>{dishList}</div>
          <p className='col-md-12'>Order Total: ${order.total.toFixed([2])}</p>
          <a onClick={this.deleteOrder.bind(this, uniqueId)} className='btn btn-danger'>Delete</a>
        </div>
      )
    });

    return(
      <div>
        <h1>Orders</h1>
        <div className='row order-item-backend'>
          {orderList}
        </div>
      </div>
    )
  }
}



export default OrderPage;
