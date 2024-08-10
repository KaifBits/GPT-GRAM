import axios from 'axios';
import React, {  useState } from 'react';
import { useRef } from 'react';

const Createpost = () => {
 const ref=useRef(null);
 const [file,setFile]=useState(null);
 const[msg,setMsg]=useState("");


 



async function handle(e){
  e.preventDefault()
  
  const username= localStorage.getItem('username');
  console.log(username);
  try{
    const formData = new FormData();
    formData.append("file", file);
const p=await axios.post(`http://localhost:8080/upload/${username}`,formData, {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
});
if(p.data){
  setMsg("upload successfully");
console.log("img upload successfully");


}
  }
  catch(error){
    setMsg("cant upload right now");
  console.log("error occured",error)
  }



}

  return (
    
    <div className='text-black bg-black mx-auto px-0 h-auto w-1/2 flex flex-col space-y-3 justify-center  '>
      <div class="p-4 ">
      <form>
    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 space-y-4">
      {file ?<div className='flex justify-center' onClick={()=>ref.current.click()}>

        <img src={URL.createObjectURL(file)}/>
      </div>:
       
       <div onClick={()=>ref.current.click()}class="flex items-center justify-center h-96 mb-4 rounded bg-gray-50 dark:bg-gray-800">
        
          <div class="text-2xl text-gray-400 dark:text-gray-500">
             
             Create Post
             <p>
          <svg class="w-3.5 h-9 flex justify-center m-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
             </svg>
          </p>
          </div>
          
       </div>
}
       <input type='text'  class="flex items-center justify-center w-full h-14 mb-4 rounded bg-gray-50 dark:bg-gray-800" />
          
         
       
       <input type='file' ref={ref} onChange={(e)=>{setFile( e.target.files[0])}} className='text-white  hidden'/>
       <div className='text-white flex justify-center'>
        Enter Caption
       </div>
       <div className='text-white'>{msg}</div>
       <button  onClick={handle} className='text-white m-auto w-20 flex justify-center bg-slate-500 border-red-600'>Upload</button>
       </div>
       
       </form>
    </div>
   
 </div>
 
 
 
 

  )
}

export default Createpost;