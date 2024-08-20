import React from 'react';
import {Outlet}  from 'react-router-dom';
import Sidebar from '../components/shared/Sidebar';
import Rightsidebar from '../components/shared/Rightsidebar';


const Rootlayout = () => {
  return (
   
<>
<Sidebar/>
<Outlet/>
<Rightsidebar/>
    
</>


  )
}
    
export default Rootlayout;