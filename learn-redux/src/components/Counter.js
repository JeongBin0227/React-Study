import React from 'react'

function Counter(number, diff, onIncrese, onDecrease, onSetDiff){
    const onChange = e => {
        onSetDiff(parseInt(e.target.value,10))
    }

    return(
        <div>
            <input type='number' value={diff} onChange={onChange}/>
            <button onClick={onIncrese} >+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    )
}