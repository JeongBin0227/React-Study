import React from 'react'
import ColorBox from './components/ColorBox'
import {ColorProvider} from './contexts/color'
import logo from './logo.svg'
import './App.css'

const App = ()=> {
  return (
    <ColorProvider>
      <div>
        <ColorBox/>
      </div>
    </ColorProvider>
  )
}

export default App
