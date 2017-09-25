import React, { Component } from 'react';

const BASE_URL = 'http://tiny-lasagna-server.herokuapp.com/collections/thai-orders';

class OrderPage extends Component{
  constructor(props){
    super(props);
  }


  render(){
    let orders = fetch(BASE_URL)
    .then(response => response.json())
    .then((json) => {
      console.log('json', json);
      return json
    })

    let orderFormatted = orders.map((item, index) => {
      return (
        <div>
        <h2>{item.name}</h2>
        <p>{item.phone}</p>
        <p>{item.total}</p>
        <p>{item.order}</p>
        </div>
      )
    })

    return(
      <div>
        <h1>Orders</h1>
        <div>{orderFormatted}</div>
      </div>
    )
  }
}



export default OrderPage;
