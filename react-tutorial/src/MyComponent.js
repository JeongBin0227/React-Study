import React, {Component} from 'react'

class MyComponent extends Component{
  render(){
    const {name, favoriteNumber, children} = this.props
    return(
      <div>
        안녕하세요. {name} 입니다.
        children 값은 {children}
        <br/>
        좋아하는 숫자는 {favoriteNumber} 입니다
      </div>
    )
  }
}

export default MyComponent;