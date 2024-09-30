import {useForm} from "react-hook-form"
export default function Forms({handleformdata}) {
  
    const {register,handleSubmit,reset} =useForm();
    const handleFormSubmit =(data)=>{
        handleformdata(data)
        reset();
    } 
  return (
    <div className="mt-10 flex justify-center">
      <form className="flex gap-1" onSubmit={handleSubmit(handleFormSubmit)}>
        <input
            {...register("name")}
          className="rounded-md px-2 py-1 outline-none font-semibold"
          type="text"
          name="name"
          placeholder="name"
        />
        <input
             {...register("email")}
          type="text"
          name="email"
          placeholder="email"
        />
        <input
             {...register("image")}
          type="text"
          name="image"
          placeholder="imageUrl"
        />
        <input
         className="bg-blue-200 rounded-md cursor-pointer"
            type="submit"
         />
        
      </form>
    </div>
  );
}
