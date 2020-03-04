import React from 'react'

function createUser({username, email, onChange, onCreate}){
    return(
        <div>
            <input name="name" placeholder="name" value={username} onChange={onChange}></input>
            <input name="email"placeholder="email" value={email}onChange={onChange}></input>
            <button onClick={onCreate}>등록</button>
        </div>
    )
}

export default createUser