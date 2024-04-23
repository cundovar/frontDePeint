import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export const Header=()=>{

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return(

        
     

        <nav className='nav  absolute z-50 flex items-center justify-center  '>
  
      
  <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 absolute right-0 -top-8"
                aria-controls="mega-menu-full"
                aria-expanded={isMenuOpen}
            >

            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div id="mega-menu-full" className={` max-sm:mt-20 p-2 rounded-xl bg-gradient-to-r from-cyan-600 items-center justify-between font-medium ${isMenuOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1 mt-2`}>
         
        <ul className='flex flex-col w-full space-y-5   border-orange-400 '>
         <li className='text-2xl  trux border-t-emerald-200 '><Link to="/">Accueil</Link></li>
         <li className='text-2xl trux'><Link to="/peinture">Peinture</Link> </li>
         <li className='text-2xl trux'><Link to="/digital">Digital</Link>   </li>
         {/* <li className='text-2xl p-5 trux  border-stone-200 '><Link to="/">A propos</Link></li> */}
         <li className='text-2xl trux'><Link to="/contact">Contact</Link></li>
       
            </ul>
        </div>
  
      
        </nav>
    

    )
}