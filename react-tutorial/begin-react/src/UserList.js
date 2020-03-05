import React,{useEffect} from 'react'

const User = React.memo(function User({user, onDelite,onToggle}){
    return(
        <div>
            <b onClick={()=>onToggle(user.id)}style={{color: user.active?'red':'black'}}>{user.username}</b> <span>({user.email})</span>
            <button onClick={()=>onDelite(user.id)}>삭제</button>
        </div>
    )
})
const UserList = React.memo(function UserList({users, onDelite,onToggle}){
    return(
       <div>
           {
           users.map(
            users => (<User user={users} key={users.id}onDelite={onDelite} onToggle={onToggle}/>)
           )
            }   
       </div>
    )
})

export default React.memo(UserList);