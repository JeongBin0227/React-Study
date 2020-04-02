import React, {Component} from 'react'

class EventPractice extends Component {

  state={
    username:'',
    message:'',
  }

  handleChange = (e) =>{
    this.setState({
      message: e.target.value
    })
  }

  handleClick = () =>{
    alert(this.state.message)
    this.setState({
      message:''
    })
  }

   render() {
    return (
      <div>
        <h1>이번트 연습</h1>
        <input type="text" name="message" placeholder="아무거나 입력해 보세요" onChange={this.handleChange} value={this.state.message}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    )
  }
}

export default EventPractice