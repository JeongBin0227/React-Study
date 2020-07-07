import React from 'react'

function Counter( { number, diff, onIncrease, onDecrease, onSetDiff } ){
    console.log(number)
    const onChange = e => {
        console.log(e.target.value)
        onSetDiff(parseInt(e.target.value,10))
    }

    return(
        <div>
            <h1>{number}</h1>
            <div>
                <input type='number' value={diff} onChange={onChange}/>
                <button onClick={onIncrease} >+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    )
}

export default Counter