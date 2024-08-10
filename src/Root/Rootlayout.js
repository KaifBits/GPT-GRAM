import React from 'react';
import {Outlet}  from 'react-router-dom';
import Sidebar from '../components/shared/Sidebar';
import Rightsidebar from '../components/shared/Rightsidebar';


const Rootlayout = () => {
  return (
   
    
    <div className='min-h-screen w-full bg-black flex'>

    <div>
        <Sidebar/>
        </div>
    
    <Outlet/>
   
    
      <Rightsidebar/>
    
</div>


  )
}
    
export default Rootlayout;