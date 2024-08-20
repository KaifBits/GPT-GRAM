import React, { useState,useEffect } from 'react';
import axios from 'axios';

const Home = () => {
 
  const[obj,setObj]=useState(
    {"1":false,
    "2":false,
    "3":false,
    "4":false
    }
  )
    const handle=(e)=>{
     const obj1={...obj};
     obj1[e.target.id]= !obj1[e.target.id];
     setObj(obj1);
    }
    const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const[reverse,setReverse]=useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/feed`, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log('Raw response data:', response.data);
        
        
         
        setImages(response.data);
        setReverse(images.reverse());

      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();

  }, [images]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading images: {error.message}</p>;
    

  return (
    
<div className=' mx-auto px-0 py-5 bg-white  h-auto w-1/2 flex flex-col space-y-20 max-w-screen-lg  justify-center items-center'>
{
  reverse.map((val)=>{

    return (<div className=' w-1/2 pt-3 flex flex-col items-center rounded-md relative border border-blue-200  bg-gray-200'>

      <img 
          src={`data:image/jpeg;base64,${val}`}
          alt="AirMax Pro"
          class=" w-96 h-2/3 rounded-md object-cover transition ease-in-out delay-150 hover:scale-110 hover:bg-gray-200 duration-300"
        />
        <span className='left-0 pt-2 font-bold text-lg pl-11'>Do I have a short temper? Nope. But I do have a quick reaction when it comes to bullsh*t.!</span>
      
        <div className='flex  w-96  relative justify-end rounded-md p-3  bg-gray-200 max-w-full '>
        
        <div class='flex absolute space-x-3 rounded-md left-0 bg-gray-200 w-52 transition ease-in-out delay-150 hover:scale-110 hover:bg-gray-200 duration-300' >
          <img  class="h-12 w-12 bg-white rounded-full " alt="" src='https://png.pngtree.com/background/20230528/original/pngtree-pink-hair-girl-with-leaves-in-her-face-picture-image_2781987.jpg'/>
          
          
          <div >
            <div class="font-bold  text-black text-sm">
            im_kaif_123 
            </div>
            <div class="font-medium text-gray-500 text-xs">
            kaif
            </div>
          </div>
          </div>
          <div className='flex  max-w-full space-x-6  bg-gray-200 '>
        <div className='transition ease-in-out delay-150 hover:scale-125 hover:bg-gray-200 duration-300'>
        <i class="ri-chat-3-line text-3xl"></i>
        </div>
        <div className='transition ease-in-out delay-150 hover:scale-125 hover:bg-gray-200 duration-300'>
          { obj["1"]?<i onClick={(e)=>{handle(e)}} id="1" class="ri-heart-fill  text-4xl "></i>:
        <i onClick={(e)=>{handle(e)}} id="1" class="ri-heart-line text-4xl"></i>
          }
        </div>
        </div>
      
      
        
        </div>
        </div>)
   })

}
  

  
</div>

    
  )
}

export default Home;