import React from 'react'
import {Link} from 'react-router-dom';
import { Search } from './Search';
// import logo from '../images/full_logo.png';
// import icon from '../images/tiny-logo.png';

import Logo from './Logo';

export const Navbar = ({ darkTheme,setDarkTheme}) => {
  return (
     <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 transition-colors duration-500'>
      
        <div className='flex justify-between items-center space-x-5 w-screen mb-3'>
           
            <Link to="/">
              {/* <p className=' text-base sm:text-xl bg-blue-500 font-bold text-white py-1 px-2 rounded  dark:bg-gray-500 dark:text-gray-900' >
                  Google
              </p> */}
              {/* <img  className='h-10 '  src={logo} /> */}
               
            <Logo/>



            </Link>
           
              {/* search bar */}
           <Search/>
          
            <button type="button" onClick={() => setDarkTheme(!darkTheme)} className='text-sm sm:text-lg dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg dark:shadow-cyan-500/50 '>
                        {darkTheme ? 'Light 💡':'Dark 🌙' }
            </button>
         
        </div>
    
    
      </div>
  )
}

