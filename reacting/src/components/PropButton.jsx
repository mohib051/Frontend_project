/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function PropButton({image , name,kaamkaaj , handleClick , index , friends}) {
  return (
    <div className=' w-56  bg-white rounded-full'>
      <div className='w-full h-52 bg-blue-200- rounded-full'> 
        <img className='w-full h-full object-cover rounded-full' src={image} alt="" />
      </div>
      <div className='w-full  bg-red-200'>
        <h3>{name}</h3>
        <h2>{kaamkaaj}</h2>
        <button onClick={()=>handleClick(index)} className={`rounded ${friends? "bg-green-400" : "bg-blue-400"} text-white`}>
          { friends ===true ? "We are friends" : "add friend"}
        </button>
      </div>

    </div>
            
  )
}

export default PropButton