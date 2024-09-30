/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React,{useState} from 'react'

function WithArray() {
  const  [val , setVal]=useState([1,2,3,4,5]);
  return (
    <div>
        {val.map(item => <h1>{item}</h1>)}
        <button onClick={()=>setVal(()=>val.filter((item,index)=> index != val.length-1) )}
          className="px-2 px-2 bg-blue-500">click</button>
        <h1>hii arru</h1>
    </div>
  )
}
export default WithArray;