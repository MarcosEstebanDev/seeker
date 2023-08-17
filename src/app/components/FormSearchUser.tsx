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
      <form onSubmit={handleSubmit}
      className='mb-6 flex flex-wrap items-center gap-2 rounded-xl bg-white p-4 shadow-md dark:bg-blue-900 dark:shadow-none'>
      <span className='min-w-[20px]'>
        <SvgComponent className="fill-sky-500"/>
        </span>
      <input
        name="username"
        type="text"
        className='h-14 flex-1 rounded-lg bg-transparent p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:text-white dark:placeholder:text-white'
        placeholder="Search Github username" />
      <button className='rounded-lg bg-sky-500 px-4 py-4 font-bold text-white'>Send</button>
      </form>
    </div>
  )
}

export default FormSearchUser
