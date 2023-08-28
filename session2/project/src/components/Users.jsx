import React, { Component } from 'react';
import axios from 'axios';
export default class componentName extends Component {
  state = {
      data:[]
  }
  render() {
    return (
      <ul>
        {this.state.data.map((user)=><li>{user.name}</li>)}
      </ul>
    );
  }

  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
      this.setState({'data':res.data})
      console.log(res.data)
    })
  }
}
