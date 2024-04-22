import React from 'react';
import logo from './logo.svg';
import './App.css';
import RoutesPage from './routes';


function App() {


  return (
    <div className="App overflow-hidden   border ">
      <div className='absolute -top-64 h-svh -z-10 flex overflow-hidden'>
         <img className='h-full object-contain ' src='/images/background/fond.svg'/>

         <img className='h-full object-contain ' src='/images/background/fond2.svg'/>

      </div>
      
     <RoutesPage/>
    </div>
  );
}

export default App;
