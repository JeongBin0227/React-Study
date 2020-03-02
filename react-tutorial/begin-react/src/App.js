import React, {useState, useRef} from "react";
import UserList from './UserList.js';
import CreateUser from './createUser.js'
function App() {
  const [inputs, setInputs] = useState({
    username:'',
    email:'',
  });
  const {username,email} = inputs;

  const onChange = (e) => {
    const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name] : value,
        });

  }
  const [users,setUsers] = useState([
    {
        id : 1,
        username : 'a',
        email:'jh3095000',
        active:true,
    },
    {
        id : 2,
        username : 'b',
        email:'zd2231',
        active:false,
    },
    {
        id : 3,
        username : 'c',
        email:'dasdasd',
        active:false,
    },
  ])
  const nextId = useRef(4);

  const onCreate = () => {
    const user ={
      id:nextId.current,
      username,
      email
    }
    setUsers(users.concat(user))
    console.log(users)
    setUsers([...users,user])
    console.log(users)

    setInputs({
      username:'',
      email:''

  });
    nextId.current+=1;
  }

  const onDelite=(id)=>{
    setUsers(users.filter(users => users.id !== id))
  }

  const onToggle=(id)=>{
    setUsers(users.map(user => user.id===id?{...user,active:!user.active}:user))
  }
  return (
    <div>
      <CreateUser username={username} email={email} onChange={onChange} onCreate = {onCreate}/>
      <br></br>
      <b>{users.length}</b>
      <UserList users={users} onDelite={onDelite} onToggle={onToggle}/>
      <br></br>
    </div>
  );
}

export default App;
