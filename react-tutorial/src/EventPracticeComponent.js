import React, {Component, useState} from 'react'

const EventPracticeComponent = () =>{
  const [username,setUsername] = useState('')
  const [message,setMessage] = useState('')

  const handleChange = (e) =>{setMessage(e.target.value)}
  const handleClick = (e) =>{
    setMessage('')
    setUsername('')
  }

  return (
    <div>
      <h1>이번트 연습</h1>
      <h2>{username}</h2>
      <input type="text" name="message" placeholder="아무거나 입력해 보세요" onChange={handleChange} value={message}
      />
      <button onClick={handleClick}>확인</button>
    </div>
  )

}


export default EventPracticeComponent