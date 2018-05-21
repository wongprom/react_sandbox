import React, { Component } from 'react';
import Header1 from './components/Header1';
import Header2 from './components/Header2';
import Button from './components/Button.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    counter : 0,
    products: [
      "lemon",
      "chocolate",
      "marmalade",
      "pear",
    ],
    cart:[]
  }
 

  // This is syntax for own created functions
  handleClick = () => {
    this.setState({ counter : this.state.counter + 1});
  }

  addToCart = (product) => {
    const newCart = [...this.state.cart, product];
    this.setState({ cart : newCart});
  }

  render() {
    const products = [];
    for(let i = 0; i < this.state.products.length; i++){
      products.push(
        <div key={i}>
          { this.state.products[i] }
          <button onClick={()=> this.addToCart(this.state.products[i])}>Add To Cart</button>
        </div>
      ); 
    }
    
    const cart = this.state.cart.map((item,index)=>{
      return <div key={index}> {item} </div>;
    });

    return (
      <div className="App">
        <Header1 values={values} />
        <Button handleClick={this.handleClick}/>
        <h3>You have clicked me {this.state.counter} times!</h3>
        <Header2 values={values} style={style1}/>
        <h3>{products}</h3>
        <h3>{cart}</h3>
      </div>
    );
  }
}

const style1 = {
  color: 'pink',
  fontFamily: 'sans-serif',
}
const values = {
  headerCounter: "Counter",
  headerShopping: "Shopping",
  myFirstName:  "Jimmy",
  greetings:    "Hello",
  jobbTitle:    "front-end developer",
}
// const headerCounter = {
//   counter: "counter",
// }
// const headeShopping = {
//   shopping: "shopping",
// }


export default App;
