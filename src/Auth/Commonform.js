import React from 'react';
import { Outlet } from 'react-router-dom';

import Box from '../components/Box';

const Commonform = () => {
  return (
    <>
    <div class="relative flex  min-h-screen bg-gray-900 gap-4 mx-0">
      
      <div  className='absolute left-32'>
            <Outlet/>
            </div>
            <Box/>
        </div>
    
    </>
  )
}

export default Commonform;