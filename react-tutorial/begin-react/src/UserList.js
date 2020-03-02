import React from 'react'
function User({user, onDelite,onToggle}){
    return(
        <div>
            <b onClick={()=>onToggle(user.id)}style={{color: user.active?'red':'black'}}>{user.username}</b> <span>({user.email})</span>
            <button onClick={()=>onDelite(user.id)}>삭제</button>
        </div>
    )
}
function UserList({users, onDelite,onToggle}){
    // const users = [
    //     {
    //         id : 1,
    //         username : 'a',
    //         email:'jh3095000',
    //     },
    //     {
    //         id : 2,
    //         username : 'b',
    //         email:'zd2231',
    //     },
    //     {
    //         id : 3,
    //         username : 'c',
    //         email:'dasdasd',
    //     },
    // ]

    return(
       <div>
           {
           users.map(
            users => (<User user={users} onDelite={onDelite} onToggle={onToggle}/>)
           )
            }   
       </div>
    )
}

export default UserList;