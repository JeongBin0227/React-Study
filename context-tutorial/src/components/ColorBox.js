import React from 'react'
import {ColorConsumer} from '../contexts/color'

const ColorBox = () => {
  return (
    <ColorConsumer>
      {value => (
        <>
          <div style={{width: '64px', height: '64px', background: value.color}}>
          </div>
          <div style={{width: '32px', height: '32px', background: value.color}}>
          </div>
        </>

      )}
    </ColorConsumer>
  )
}

export default ColorBox