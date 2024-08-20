import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Shimmer from './Shimmer';

const Profile = () => {
  
  const [images, setImages] = useState([]);
 
  const[reverse,setReverse]=useState([null]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/get/kaif`, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log('Raw response data:', response.data);
        
        

        setImages(response.data);
        setReverse(images.reverse());

      } catch (err) {
        
      } finally {
      
      }
    };

    fetchImages();

  }, [images]);

 
    
  return reverse[0] ?  (
    <>
    <div class="flex justify-center space-x-10 p-8 mr-11">
  <img class="h-44 w-44 rounded-full" alt='' src="https://preview.redd.it/xg2plx54tb571.png?width=960&format=png&auto=webp&s=f834a3f446c2556d307627afdf26e0fcaac2c2d9" />
  <div class="space-y-10">
    <div class="flex space-x-10">
      <span class="text-2xl text-black"> im_kaif_123 </span>
      <span class="rounded-sm border-2 border-gray-300 bg-slate-200 p-1 text-xl">Edit profile</span>
    </div>
    <div class="flex flex-col space-y-5">
      <div class="flex space-x-12 space-y-0">
        <span class="text-2xl text-black">10 post</span>
        <span class="text-2xl text-black">10000 Followers </span>
      </div>
      <span class="text-2xl text-black">Kaif Rahaman</span>
    </div>
    <div class="max-w-xs">
      <span class="block text-wrap break-words text-left text-black"> bio is here </span>
    </div>
  </div>
</div>
<div class="bg-white flex ml-96 pl-28">
<div class="flex h-auto w-2/3 justify-start flex-wrap gap-1 bg-white">
{ reverse.map((val)=>{
   
 return  <div className="h-96 w-80 border transition ease-in-out delay-150 bg-gray-50  hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-300 sm:h-80 sm:w-64 xs:h-64 xs:w-48 "><img src={`data:image/jpeg;base64,${val}`} class="h-full w-full object-contain" alt="" /></div>

})
  
 
}

  </div>
  
  
  </div>
 
</>
  ) : (<Shimmer/>)
}

export default Profile;