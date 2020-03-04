import React,{useState} from "react";
import CreateUser from "./createUserEX.js"
import ShowUser from "./showUserEX.js"


function App() {
//   const initialUser={
//     user:'',
//     email:'',
//   },
  const [input,setInput] = useState({
    name:'',
    email:'',
  })

  const {name,email} = input
  const [nextId,setNextId] = useState(4)
  const [users,setUser] = useState([
      {
          id:1,
          name:'a',
          email:'jh3095000@naver.com',
          active:true,
      },
      {
          id:2,
          name:'b',
          email:'jh3095000@naver.com',
          active:false,
      },
      {
          id:3,
          name:'c',
          email:'jh3095000@naver.com',
          active:false,
      }
  ])
  const onChange=(e)=>{
      const {name,value} = e.target
      setInput({
          ...input,
          [name]:value
      })
      
  }
  const onCreate=(e)=>{
      
      const user = {
        id:nextId,
        name,
        email
      }
      console.log(user)
      setUser([...users,user]);
      

      setInput({
        name:'',
        email:''
      })
      setNextId(nextId+1)
  }
  const onDelite=(id)=>{
      console.log(id)
      setUser(users.filter(user=>user.id!==id))
  }
  const onChangeColor=(id)=>{
      console.log(id)
      setUser(users.map(user=>user.id===id?{...user,active:!user.active}:user))
  }
  return (
    <div>
        <CreateUser username={name} email={email}  onCreate ={onCreate}/>
        <br/>
        활성 사용자 수 : {users.filter(user => user.active === true).length}
        <br/>
        {users.map(
            user=><ShowUser user={user} onChangeColor={onChangeColor}  onDelite={onDelite}/>
        )}
    </div>
  );
}

export default App;
