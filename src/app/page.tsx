import React from 'react'
import SvgComponent from './components/icons/SearchIcons'

const Home = () => {
  return (
    <>
      <form className='flex  items-center gap-2 p-2 rounded-xl bg-blue-900' action="">
      <span className='fill-sky-400 basis-5 '><SvgComponent /></span>
      <input className='h-14 flex-1 p-2 rounded-lg bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-sky-500' type="text" placeholder="Search Github username" />
      <button className='bg-sky-400 rounded-lg py-4 px-4 text-white font-bold'>Send</button>
      </form>
      <article>
        todo el chamullo de la pag
      </article>
    </>
  )
}

export default Home
