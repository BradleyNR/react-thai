import React, { Component } from 'react';

let seedData = [
  {number: 1, title: 'Pad Thai', description: 'Thai rice noodle dish with egg, tofu, bean sprouts, and peanuts', price:'$10'},
  {number: 2, title: 'Pad Thai', description: 'Thai rice noodle dish with egg, tofu, bean sprouts, and peanuts', price:'$10'},
  {number: 3, title: 'Pad Thai', description: 'Thai rice noodle dish with egg, tofu, bean sprouts, and peanuts', price:'$10'},
  {number: 4, title: 'Pad Thai', description: 'Thai rice noodle dish with egg, tofu, bean sprouts, and peanuts', price:'$10'},
  {number: 5, title: 'Pad Thai', description: 'Thai rice noodle dish with egg, tofu, bean sprouts, and peanuts', price:'$10'},
  {number: 6, title: 'Pad Thai', description: 'Thai rice noodle dish with egg, tofu, bean sprouts, and peanuts', price:'$10'},
  {number: 7, title: 'Pad Thai', description: 'Thai rice noodle dish with egg, tofu, bean sprouts, and peanuts', price:'$10'},
  {number: 8, title: 'Pad Thai', description: 'Thai rice noodle dish with egg, tofu, bean sprouts, and peanuts', price:'$10'},
  {number: 9, title: 'Pad Thai', description: 'Thai rice noodle dish with egg, tofu, bean sprouts, and peanuts', price:'$10'},
  {number: 10, title: 'Pad Thai', description: 'Thai rice noodle dish with egg, tofu, bean sprouts, and peanuts', price:'$10'},
  {number: 11, title: 'Pad Thai', description: 'Thai rice noodle dish with egg, tofu, bean sprouts, and peanuts', price:'$10'},
  {number: 12, title: 'Pad Thai', description: 'Thai rice noodle dish with egg, tofu, bean sprouts, and peanuts', price:'$10'}
];

class Homepage extends Component{
  constructor(props){
    super(props);

    this.state = {
      orders: [],
      entrees: seedData
    }
  }


  render(){
    let entreeItem = this.state.entrees.map((item, index) => {
      return(
        <div className='well col-md-3'>
          <p className='col-md-2'>#{item.number}:</p>
          <p className='cold-md-10'>{item.title}</p>
          <p>{item.description}</p>
          <p>{item.price}</p>
        </div>
      )
    });

    return(
      <div className='row'>
        {entreeItem}
      </div>
    )
  }
}

export default Homepage;
