import React , {useState} from 'react'
import { Navbar } from './components/Navbar';
import {Footer}   from './components/Footer';
import {Links}   from './components/Links';

const App = () => { 
  //useState hook for dark theme
  const [darkTheme,setDarkTheme] = useState(false);
 
    return (
   <div className={darkTheme ? 'dark':''}>
   <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen transition-colors duration-500">
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
      <Links/>
      <Footer/>
      
   </div>
</div>
  )
}

export default App;