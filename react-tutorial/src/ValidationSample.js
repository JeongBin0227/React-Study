import React, {Component, useState} from 'react'
import './ValidationSample.css'

class ValidationSample extends Component {
  input = React.createRef()

  state = {
    password: '',
    clicked: false,
    validated: false,
  }

  handleChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000'
    })

    this.input.focus()
  }

  render() {
    return (
      <div>
        <input ref={(ref)=>this.input=ref} type="password" onChange={this.handleChange} value={this.state.password}
               className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
        />
        <button onClick={this.handleButtonClick}>확인</button>
      </div>
    )
  }
}

export default ValidationSample