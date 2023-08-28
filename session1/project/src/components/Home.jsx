import React, { Component } from 'react';
import '../Home.css'
import Card from './Card'
import Button from './Button';
export default class Home extends Component {
  state = {
    title: [
      "awdwadwad",
      "gghgggggg",
      "yyyyyyyyy"
    ]
  }
  render() {
    let { title } = this.state

    return (
      <>
        {/* <div className='container'>
          <div className='row'>
            {title.map((t)=> <Card name={t} desc='hi desc' /> )}
          </div>
        </div> */}
        <Button name='save' color='success' />
        <Button name='click' color='danger' />

      </>
    );
  }
}
