import React, { Component } from 'react';

export default class Count extends Component {
  state = {
    name:"amr",
    number:0
  }
  // increment(){
  //   console.log(this)
  // }
  increment = ()=>{
    this.setState({'number':++this.state.number})
    // console.log(++this.state.number)
  }
  render() {
    return (
      <>
         <h1>count is : {this.state.number}</h1>
         <button onClick={this.increment}>increment</button>
      </>
    );
  }
}
