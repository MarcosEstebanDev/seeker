import React from 'react'
import SvgSun from './icons/SunIcons'

const Navbar = () => {
  return (
    <header className='mb-10 flex items-center space-x-2'>
      <h1 className='flex-grow text-white text-4xl font-bold '>Seeker</h1>
        <span className='uppercase text-white'>Light</span>
        <button>
          <SvgSun className='fill-white' width={25}/>
        </button>
    </header>
  )
}

export default Navbar
