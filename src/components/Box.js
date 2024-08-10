import React from "react";
const Box=(props)=>{
return(


    <div class=" h-[820px] w-[1200px] rounded-md flex absolute right-0 top-0 ">
  <img
    src="https://www.aesdes.org/wp-content/uploads/2024/02/city-lights-1.jpg"
    alt="AirMax Pro"
    class="z-0 h-full w-full rounded-md object-cover"
  />
  <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div class="absolute bottom-4 left-4 text-left">
    <h1 class="text-lg font-semibold text-white">{props.item}</h1>
    
    
  </div>
</div>

);
}
export default Box;