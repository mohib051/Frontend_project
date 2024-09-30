⭐ how to avoid key  prop warning?
ans=> by adding a key which should be unique i.e. it can be index as map accepts index and value as parameter

import React from "react";
import Card from "./components/Card";
function App(){
    const array = ["kazi" , "mohib", "sahil"];
       return(
        <div>
            {array.map((value , index)=><h1 key={index}>hey</h1> )} 
        </div>     
    );
}

export default App;

⭐create box based on array using map function?
ans->we used map on array data and for each data we created a div .
import React from "react";
import Card from "./components/Card"; 
function App(){
    const array = ["kazi" , "mohib", "sahil"];
       return(
        <div>
          {array.map((item,index)=>(
            <div key={index} className="px-3 py-4 bg-zinc-400 rounded-md w-fit"  >
                {item}
            </div>
          ))}
             
        </div>     
    );
}

export default App;

⭐create the duplicate cards , with diifernt names , description and image using mapping of array of objects ??
ans-->

function card() {
  const data=[
    {image:'https://images.unsplash.com/photo-1649734926695-1b1664e98842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFtYXpvbiUyMGxvZ298ZW58MHx8MHx8fDA%3D', name:"daily objects", description:"lorwm ipsies"},
    {image:'https://plus.unsplash.com/premium_photo-1683910665313-877b5dd42d4a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',name:"static",description:"neww lorwm"},
    {image:'https://images.unsplash.com/photo-1719150006650-8255498a9faf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',name:"table",description:"this is a  table"}  
  ]
  return (
    
    <div className='size-full h-screen flex justify-center items-center gap-10 bg-zinc-400'>
      {data.map((value, index)=>(
        <div  key ={index} className='w-52 h-52 bg-zinc-300 rounded-md overflow-hidden'>
          <div className='w-full h-24 bg-zinc-400'>
            <img className='h-full w-full object-cover' src={value.image} alt="" />
          </div>
          <div className='w-full px-1 py-1'>
            <h2 className='font-semibold '>{value.name}</h2>
            <p className='text-xs mt-3 '>{value.description}</p>
          </div>
        </div>
        )
      )}
        
    </div>

    
  )
}

export default card;

⭐conditional rendering

ans==>
function card() {
  const data=[
    {image:'https://images.unsplash.com/photo-1649734926695-1b1664e98842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFtYXpvbiUyMGxvZ298ZW58MHx8MHx8fDA%3D', name:"daily objects", description:"lorwm ipsies",inStock:false,
    },
    {image:'https://plus.unsplash.com/premium_photo-1683910665313-877b5dd42d4a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',name:"static",description:"neww lorwm",inStock:true,},
    {image:'https://images.unsplash.com/photo-1719150006650-8255498a9faf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',name:"table",description:"this is a  table", inStock:true}  
  ]
  return (
    
    <div className='size-full h-screen flex justify-center items-center gap-10 bg-zinc-400'>
      {data.map((value, index)=>(
        <div  key ={index} className='w-52 h-52 bg-zinc-300 rounded-md overflow-hidden'>
          <div className='w-full h-24 bg-zinc-400'>
            <img className='h-full w-full object-cover' src={value.image} alt="" />
          </div>
          <div className='w-full px-1 py-1'>
            <h2 className='font-semibold '>{value.name}</h2>
            <p className='text-xs mt-3 '>{value.description}</p>
          </div>
          <button className= {`px-3 py-1 ${value.inStock ? "bg-blue-400" : 'bg-red-400'} text-xs rounded mt-3`}>
            {value.inStock ? "instock" : "outofstock"}
            </button>
        </div>
        )
      )}
        
    </div>
  )
}

export default card;

⭐useState -> for continuosly changing the value from true to false and vice versa when the button is clicked

import React, { useState } from "react";
import Card from "./components/Card";
function App(){
    const [banned , setBanned] = useState(true);
   
       return(
        <>
         {/* console.log({score}); */}
        <Card/>
        <h1>{score.toString()}</h1>
        <button onClick={()=>setBanned(!banned)} className="px-4 py-2 bg-orange-100 rounded-md center">change</button>
        
        </>     
             
    );
}

export default App;

⭐ Props. Create a two buttons knowmore and download. using props.

App.jsx file -->

import React from 'react'
function App(){
    
   
       return(
        <>
        < PropButton text="know more" color="bg-blue-400"/>
        <PropButton text= "Download" color="bg-red-400" />
         <WithArray/>
         <Card/>
        
        </>
      
          
             
    );
}

export default App;

PropButton.jsx file --->

import React from 'react'
function PropButton({text , color}) {
  return (
    <>
    <button className={`px-4 m-2  py-4 ${color} rounded-full`}>{text}</button>
    </>
            
  )
}

export default PropButton;

⭐Task using Props:
Given our data , will actually be present in App component, and by using Props we will pass through this data into cards,and in every card there will be add friend button , on clicking we will give alert messge.

App.jsx file -->

import React, { useState } from "react";
import Card from "./components/Card";
import WithArray from "./components/WithArray";
import PropButton from "./components/PropButton";
function App() {
  const data = [
    {
      name: "kaiz",
      profession: "coder",
      image:
        "https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "lalu",
      profession: "netamanus",
      image:
        "https://images.unsplash.com/photo-1719937206158-cad5e6775044?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "sarukh",
      profession: "actor",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c1/Shah_Rukh_Khan_in_2023_%281%29.jpg",
    },
  ];

  return (
    <>
      <div className="size-full h-screen flex  justify-center items-center gap-10 bg-zinc-400">
        {data.map((val, index) => (
          <PropButton
            key={index}
            image={val.image}
            name={val.name}
            kaamkaaj={val.profession}
          ></PropButton>
        ))}
        {/* <WithArray/> */}
        {/* <Card/> */}
      </div>
    </>
  );
}

export default App;

PropButtob.jsx file -->

import React from 'react'

function PropButton({image , name,kaamkaaj}) {
  return (
    <div className=' w-56  bg-white'>
      <div className='w-full h-52 bg-blue-200'> 
        <img className='w-full h-full object-cover' src={image} alt="" />
      </div>
      <div className='w-full p-2 bg-red-200'>
        <h3>{name}</h3>
        <h2>{kaamkaaj}</h2>
        <button onClick={()=>alert("clicked hua")} className='rounded bg-blue-600 text-white'>AddFriend</button>
      </div>

    </div>
            
  )
}

export default PropButton

⭐TASK USING PROPS-PART-2
NOW, When the button gets clicked it will Change the Add friend to Friends and its blue color changes to Green.
App.jsx file -->

import React, { useState } from "react";
import Card from "./components/Card";
import WithArray from "./components/WithArray";
import PropButton from "./components/PropButton";
function App() {
  const data = [
    {
      name: "kaiz",
      profession: "coder",
      image:
        "https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,  
    },
    {
      name: "lalu",
      profession: "netamanus",
      image:
        "https://images.unsplash.com/photo-1719937206158-cad5e6775044?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D",
    friends: false,  
    },
    {
      name: "sarukh",
      profession: "actor",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c1/Shah_Rukh_Khan_in_2023_%281%29.jpg",
    friends: false,     
    },
  ];

  const[realData, setrealData ]=useState(data);
  const handleClick = (changingIndex)=>{
        setrealData((prev)=>{
            return prev.map((val , index)=>{
                if(index === changingIndex) return {...val , friends: !val.friends }
                return val;
            })
        })
  }
  return (
    <>
      <div className="size-full h-screen flex  justify-center items-center gap-10 bg-zinc-400">
        {realData.map((val, index) => (
          <PropButton
            key={index}
            index = {index}
            image={val.image}
            name={val.name}
            kaamkaaj={val.profession}
            friends ={val.friends}
            handleClick={handleClick}
          ></PropButton>
        ))}
        {/* <WithArray/> */}
        {/* <Card/> */}
      </div>
    </>
  );
}

export default App;

PropButton.jsx file -->

import React from 'react'

function PropButton({image , name,kaamkaaj , handleClick , index , friends}) {
  return (
    <div className=' w-56  bg-white'>
      <div className='w-full h-52 bg-blue-200'> 
        <img className='w-full h-full object-cover' src={image} alt="" />
      </div>
      <div className='w-full p-2 bg-red-200'>
        <h3>{name}</h3>
        <h2>{kaamkaaj}</h2>
        <button onClick={()=>handleClick(index)} className={`rounded ${friends? "bg-green-400" : "bg-blue-400"} text-white`}>
          { friends ===true ? "We are friends" : "add friend"}
        </button>
      </div>
    </div>
  )
}