import React from 'react'
import SvgComponent from './icons/SearchIcons'
const FormSearchUser = () => {
  return (
    <div>
      <form className='mb-6 flex  items-center gap-2 p-2 rounded-xl bg-blue-900' action="">
      <span className='fill-sky-400 basis-5 '><SvgComponent /></span>
      <input className='h-14 flex-1 p-2 rounded-lg bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-sky-500' type="text" placeholder="Search Github username" />
      <button className='bg-sky-400 rounded-lg py-4 px-4 text-white font-bold'>Send</button>
      </form>
    </div>
  )
}

export default FormSearchUser
