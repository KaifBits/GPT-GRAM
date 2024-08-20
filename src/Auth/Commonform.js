import React from 'react';
import { Outlet } from 'react-router-dom';

import Box from '../components/Box';

const Commonform = () => {
  return (
    <>
   
      <div className='flex justify-center bg-slate-800 items-center pr-6'>
    
            <Outlet/>
            
            <Box/>
            </div>
    
    </>
  )
}

export default Commonform;