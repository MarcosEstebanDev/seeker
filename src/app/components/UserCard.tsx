import React from 'react'
import SvgLocation from './icons/LocationIcons'
import SvgTwitter from './icons/TwitterIcons'
import SvgBuild from './icons/BuildIcons'
import SvgLink from './icons/LinkIcons'
import {User} from '../interface/user'
import Image from "next/image";
interface Props{
    user: User ;
}
function valideURL(url: string) {
    if (!/^https?:\/\//i.test(url)) {
    url = "https://" + url;
    }
    return url;
}

const UserCard = ({ user }: Props) => {
return (
    <article className='grid-areas rounded-xl bg-white p-4 shadow-md dark:bg-blue-900 dark:text-white dark:shadow-none '>
        <div className='section-logo mr-3 grid h-24 w-24 place-content-center overflow-hidden rounded-full bg-gray-200 p-1 lg:mx-auto'>
        <Image src={user?.avatar_url} width={96} height={96} alt={`profile image user ${user?.name}`} className='rounded-full'/>
        </div>
        <div className='section-title'>
            <h2 className='text-3xl font-bold '>{user?.name}</h2>
            <p>@{user?.login}</p>
        </div>
        <p className='section-date lg:text-right'>{
            new Date(user?.created_at || "").toLocaleDateString("en-Us",{
                year:"numeric",
                month:"long",
                day:"numeric",
            })}
        </p>
        <p className='section-description mt-8 leading-loose'>
            {user?.bio || "Sin user Bio"}</p>
        <div className="section-number mt-4 flex justify-around rounded-xl bg-blue-50 p-8 text-center text-blue-950 dark:bg-blue-950 dark:text-white">
            <article>
                <p>Repos</p>
                <p className='font-bold text-xl'>{user?.public_repos}</p>
            </article>
            <article>
                <p>Followers</p>
                <p className='font-bold text-xl'>{user?.followers}</p>
            </article>
            <article>
                <p>Following</p>
                <p className='font-bold text-xl'>{user?.following}</p>
            </article>
        </div>
        <div className="section-social mt-4 space-y-3 md:grid md:grid-cols-2 ">
        <article className='flex space-x-2'>
            <i><SvgLocation className='h-full w-full fill-blue-950 dark:fill-white' width={"1rem"}/></i>
            <span>{user?.location}</span>
        </article>
        <article className='flex space-x-2'>
            <i><SvgLink className='h-full w-full fill-blue-950 dark:fill-white' width={"1rem"}/></i>
            <a className='truncate' href={valideURL(user?.blog || " ")}>{user?.blog || "not information"}</a>
        </article>
        <article className='flex space-x-2'>
            <i><SvgTwitter className='h-full w-full fill-blue-950 dark:fill-white' width={"1rem"}/></i>
            <a href={`https://www.twitter.com/${user?.twitter_username}`}>{user?.twitter_username}</a>
        </article>
       
        <article className='flex space-x-2'>
            <i><SvgBuild className='h-full w-full fill-blue-950 dark:fill-white' width={"1rem"}/></i>
            <span >{user?.company || 'not information'}</span>
        </article>
        </div>

</article>
)
}

export default UserCard
