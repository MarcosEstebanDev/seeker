"use client"
import React from 'react'
import SvgComponent from './icons/SearchIcons'
interface Props{
  getUser: (username: string) => Promise<void>
}

const FormSearchUser = ({getUser} : Props) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const username = e.currentTarget.username.value
    if(!username)return;
    await getUser(username)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='mb-6 flex flex-wrap items-center gap-2 rounded-xl bg-blue-900 p-4'>
      <span className='min-w-[20px]'>
        <SvgComponent className="fill-sky-500"/>
        </span>
      <input name="username" type="text" className='h-14 flex-1 p-2 rounded-lg bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-sky-500'  placeholder="Search Github username" />
      <button className='bg-sky-400 rounded-lg py-4 px-4 text-white font-bold'>Send</button>
      </form>
    </div>
  )
}

export default FormSearchUser
