
import './App.css';
import Commonform from './Auth/Commonform';
import Singin from './Auth/form/Singin';
import Singup from './Auth/form/Singup';

import { Route,Routes } from 'react-router-dom';
import Home from './Root/Home';
import Rootlayout from './Root/Rootlayout';
import Createpost from './components/Createpost';

function App() {
  
  return (
    <>
      
      
       <Routes>
        <Route element={<Commonform/>}>
        <Route path="/" element={<Singin/>}/>
        <Route path="/signup" element={<Singup/>}/>
        </Route>

        <Route element={<Rootlayout/>}>
        <Route path="/home" element={<Home/>}/>
        <Route path="/post" element={<Createpost/>}/>
      
        </Route>

       </Routes>


    </>
  );
}

export default App;
