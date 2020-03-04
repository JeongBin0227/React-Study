import React, {useReducer, useRef, useMemo, useCallback} from "react";
import UserList from './UserList.js';
import CreateUser from './createUser.js'

function countActiveUsers(users){
  console.log("활성 사용자 수를 세는중..")
  return users.filter(user=>user.active).length
}

const intialState = {
  inputs:{
    username:'',
    email:'',
  },
  users:[
    {
        id : 1,
        username : 'David',
        email:'david@naver.com',
        active:false,
    },
    {
        id : 2,
        username : 'kavin',
        email:'kavin@naver.com',
        active:false,
    },
    {
        id : 3,
        username : 'kate',
        email:'kate@naver.com',
        active:false,
    },
  ]
}

function App() {
  // const [number, dispatch ] = useReducer(reducer,0)
  return (
    <div>
      <CreateUser />
      <br></br>
      <UserList users={[]} />
      <br></br>
      0
    </div>
  );
}

export default App;
