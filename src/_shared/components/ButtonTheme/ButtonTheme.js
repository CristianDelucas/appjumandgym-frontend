import React, { useEffect, useState } from 'react'
import { BsSun } from 'react-icons/bs';
import { MdDarkMode } from 'react-icons/md';

const ButtonTheme = ({theme,setTheme}) => {

 

  const toggleTheme = () =>{
    if(theme === 'dark'){
      setTheme('light')
      window.localStorage.setItem('theme','light')
    }else{
      setTheme('dark')
      window.localStorage.setItem('theme','dark')
    }
  }

  return (
    <div className={`button-theme`} onClick={toggleTheme}>
          {theme === "light"? <MdDarkMode />:<BsSun/> }
      </div>
  )
}

export default ButtonTheme