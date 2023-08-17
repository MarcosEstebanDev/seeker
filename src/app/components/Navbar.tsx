"use client";

import React, { useState,useEffect } from 'react'
import SvgSun from './icons/SunIcons'
import SvgMoon from './icons/MoonIcon';

const initialTheme =()=>{
  if(localStorage.getItem("theme")){
    return localStorage.getItem("theme") as "light" | "dark"
  }
  return window.matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light";
} 

const Navbar = () => {
  const[theme, setTheme]=useState<"light" | "dark">(initialTheme)
  useEffect(()=>{
    if(theme==="dark"){
      document.documentElement.classList.add("dark")
    }else{
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("theme",theme)
  },[theme])
  const handleTheme = () =>{
    setTheme(theme === "light" ? "dark" : "light")
  }
  return (
    <header className='mb-10 flex items-center space-x-2'>
      <h1 className='flex-grow text-3xl font-bold text-blue-950 dark:text-white'>Seeker</h1>
        <span className='uppercase text-blue-950 dark:text-white'>{
          theme === "light" ? "dark" : "light"}</span>
        <button onClick={handleTheme}>
        {
          theme === "light" ?
          <SvgMoon className='fill-blue-950 dark:fill-white' width={25} height={25} />
          : <SvgSun className='fill-blue-950 dark:fill-white' width={25} height={25}/>
        }
        </button>
    </header>
  )
}

export default Navbar
