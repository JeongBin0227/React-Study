import React, {useState, useRef, useMemo, useCallback} from "react";
import UserList from './UserList.js';
import CreateUser from './createUser.js'

function countActiveUsers(users){
  console.log("활성 사용자 수를 세는중..")
  return users.filter(user=>user.active).length
}

function App() {
  const [inputs, setInputs] = useState({
    username:'',
    email:'',
  });
  const {username,email} = inputs;

  const onChange = useCallback((e) => {
    const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name] : value,
        });

  })
  const [users,setUsers] = useState([
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
  ])
  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    const user ={
      id:nextId.current,
      username,
      email
    }
    setUsers(users=>users.concat(user))
    setInputs({
      username:'',
      email:''

  });
    nextId.current+=1;
  },[username,email])

  const onDelite=useCallback((id)=>{
    setUsers(users => users.filter(users => users.id !== id))
  },[])

  const onToggle=useCallback((id)=>{
    setUsers(users => users.map(user => user.id===id?{...user,active:!user.active}:user))
  },[])
  
  const count = useMemo(()=>countActiveUsers(users),[users]);
  return (
    <div>
      <CreateUser username={username} email={email} onChange={onChange} onCreate = {onCreate}/>
      <br></br>
      <b>{users.length}</b>
      <UserList users={users} onDelite={onDelite} onToggle={onToggle}/>
      <br></br>
      {count}
    </div>
  );
}

export default App;
