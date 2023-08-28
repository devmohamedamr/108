import React, { Component } from 'react';

export default class Home extends Component {
    componentDidMount(){
        console.log("componentDidMount")
    }
    state= {
        count:0
    }
    increment = ()=>{
        this.setState({'count':++this.state.count})
    }
  render() {
    console.log("render test")
    return (
      <>
        <h1>count is : {this.state.count}</h1>
        <button onClick={this.increment}>increment</button>
      </>
    );
  }
  componentDidUpdate(){
    console.log("componentDidUpdate update")
}
  constructor(){
    super();
    console.log("constructor first")
}
}
