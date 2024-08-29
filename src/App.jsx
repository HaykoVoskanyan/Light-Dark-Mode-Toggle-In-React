import React, { createContext, useState } from 'react'
import './ThemeLight.scss'
import './ThemeDark.scss'
import Form from './Form'
import ReactSwitch from 'react-switch'

export const ThemeContext = createContext(null)

export default function App() {
  const [theme, settheme] = useState('light')

  const toggleTheme = ()=>{
    settheme((elm)=>(elm === 'light' ? 'dark' : 'light'))
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
     <div className='App' id={theme}>
        <Form/>
        <div className="switch">
         <label> {theme === 'dark' ? 'Dark Mode':'Light Mode'}
         <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
         </label>
        </div>
     </div>
    </ThemeContext.Provider>
  )
}
