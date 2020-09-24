import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types'

import './App.css';

class App extends Component {
  state={
    todos:[

    ]
    // title:'hello',
  }
  render() {
    return(
      <>
        <Title titleText="나의 하루" time="8월 1일"/>
        <div className="todo-container">
          <Todo id="1" content="밥먹기" done={true}/>
        </div> 
      </>
    )
  }
}

export default App;
