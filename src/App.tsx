import React from 'react';
import logo from './logo.svg';
import './App.css';
import RoutesPage from './routes';


function App() {


  return (
    <div className="App ">
      <div className='absolute -top-64 h-svh -z-10'>
         <img className='h-full object-contain ' src='/images/background/fond.svg'/>


      </div>
     <RoutesPage/>
    </div>
  );
}

export default App;
