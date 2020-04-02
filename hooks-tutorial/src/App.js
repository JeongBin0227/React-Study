import React, {useState} from 'react'
import logo from './logo.svg'
import Info from './Info'
import './App.css'

function App() {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <button onClick={() => {
        setVisible(!visible)
      }}
      >
        {visible ? '숨기기':'보이기'}
      </button>
      <hr/>
      {visible && <Info/>}
    </div>
  )
}

export default App
