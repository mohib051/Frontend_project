import "./styles.css";
import Forms from "./components/Forms"
import Cards from "./components/Cards"
import {useState} from "react";
export default function App() {
  const [users, setUsers]=useState([]
  );
  const handleformdata= (data)=>{
    setUsers([...users,data])
  }
 const handleRemove = (id)=>{
    setUsers(()=>users.filter((item,index)=>index!= id))
 }
  return (
    <div className="App bg-gray-200 w-full h-screen flex justify-center items-center">
      <div className="container mx-auto">
      <Cards users={users} handleRemove={handleRemove}/>
      <Forms handleformdata={handleformdata}/>   
      </div>
     
    </div>
  );
}