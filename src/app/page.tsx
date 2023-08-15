"use client";
import { useState } from 'react'
import FormSearchUser from './components/FormSearchUser'
import UserCard from './components/UserCard'
import type { User } from "./interface/user"

const Home = () => {
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<string | null>(null)
  const getUser = async (username: string)=>{
    const res = await fetch(`https://api.github.com/users/${username}`)
    if(!res.ok){
      setUser(null)
      setError('User not found')
      return;
    }
    setUser(await res.json())
    setError(null)
  }
  return (
    <>
    <FormSearchUser getUser={getUser}/>
    {
      user && <UserCard user={user} />
    }
    {
      error &&(
        <div className='rounded-lg bg-red-500 p-4 text-white'>{error}</div>
      )
    }
    </>
  )
}

export default Home
