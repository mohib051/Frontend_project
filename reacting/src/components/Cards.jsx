import Card from "./Card"
export default function Cards({users, handleRemove}){
    return(
        <div className="  w-full max-h-96 p-4 flex gap-3 flex-wrap justify-center">
          
          { users.map((item,index)=>{
                return <Card key={index} user={item} id={index} handleRemove={handleRemove}/>
          })}
           
         
        </div>
    )
}