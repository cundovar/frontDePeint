import React from 'react';

import './App.css';
import RoutesPage from './routes';


function App() {


  return (
    <div className=" overflow-hidden   ">
      <div className='absolute -top-64 h-svh -z-10 flex overflow-hidden'>
         <img className='h-full object-contain ' src='/images/background/fond.svg' alt='background'/>

         <img className='h-full object-contain ' src='/images/background/fond2.svg' alt='background'/>

      </div>
      
     <RoutesPage/>
    </div>
  );
}

export default App;
