import React from 'react'
import { Link } from 'react-router-dom'


export const Header=()=>{
    return(

        
     

        <nav className='nav  h-1/2 w-2/12 absolute z-50 flex items-center justify-center   '>
            <ul className='flex flex-col w-full space-y-5  2xl:ml-5 border-orange-400 '>
         <li className='text-2xl  trux border-t-emerald-200 '><Link to="/">Accueil</Link></li>
         <li className='text-2xl trux'><Link to="/peinture">Peinture</Link> </li>
         <li className='text-2xl trux'><Link to="/digital">Digital</Link>   </li>
         {/* <li className='text-2xl p-5 trux  border-stone-200 '><Link to="/">A propos</Link></li> */}
         <li className='text-2xl trux'><Link to="/contact">Contact</Link></li>
       
            </ul>
        </nav>
    

    )
}