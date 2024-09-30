export default function Card({user, handleRemove,id}){
  return(
      <> 
         <div className=" w-32 h-full bg-orange-100 rounded-lg p-2 flex flex-col items-center">
          <div className="image w-10 h-10 rounded-full bg-red-100 overflow-hidden">
              <img className=" w-full h-full" src={user.image} alt="" />
          </div>
          <h1 className=" font-bold mt-1 text-xl">{user.name}</h1>
          <h2 className="opacity-40 text-xs font-semibold mb-1">{user.email}</h2>
          <p className=" text-sm text-center font-semibold leading-none">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, et?</p>
          <button onClick={()=>handleRemove(id)} className=" bg-red-200 px-2 py-1 rounded-md text-xs mt-2 ">Remove</button>
        </div>
  
       </>
  )
}