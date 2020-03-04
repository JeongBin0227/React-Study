import React from 'react'

function showUser({user, onDelite, onChangeColor}){
    return(
        <div>
            <b>{user.name}</b>
            
            <span style={{color:user.active==true?'green':'black'}}onClick={()=>onChangeColor(user.id)}>({user.email})</span>
            <button onClick={()=>{onDelite(user.id)}}>삭제</button>
        </div>
    )
}

export default showUser