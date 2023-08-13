import React from 'react'
import SvgGithub from './icons/GithubIcons'
import SvgLocation from './icons/LocationIcons'
import SvgTwitter from './icons/TwitterIcons'
import SvgBuild from './icons/BuildIcons'
import SvgLink from './icons/LinkIcons'
import {User} from '../interface/user'
interface Props{
    user: User | null;
}
function valideURL(url: string) {
    if (!/^https?:\/\//i.test(url)) {
    url = "https://" + url;
    }
    return url;
}

const UserCard = ({ user }: Props) => {
return (
    <article className='p-4 text-white shadow-md rounded-xl bg-blue-900 grid-areas'>
        <div className='section-logo mr-3 grid h-24 w-24 place-content-center overflow-hidden rounded-full bg-gray-200 p-1 lg:mx-auto'>
        <SvgGithub className='h-full w-full rounded-full relative p-1' />
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
        <p className='section-description mt-8 leading-loose'>{
            user?.bio || "Sin user Bio"
        }</p>
        <div className="section-number mt-4 flex justify-around bg-blue-950 p-8 rounded-xl text-center">
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
            <i><SvgLocation className='h-full w-full fill-white' width={"1rem"}/></i>
            <span>{user?.location}</span>
        </article>
        <article className='flex space-x-2'>
            <i><SvgTwitter className='h-full w-full fill-white' width={"1rem"}/></i>
            <a href={`https://www.twitter.com/${user?.twitter_username}`}>{user?.twitter_username}</a>
        </article>
        <article className='flex space-x-2'>
            <i><SvgLink className='h-full w-full fill-white' width={"1rem"}/></i>
            <a className='truncate' href={valideURL(user?.blog || " ")}>{user?.blog || "not information"}</a>
        </article>
        <article className='flex space-x-2'>
            <i><SvgBuild className='h-full w-full fill-white' width={"1rem"}/></i>
            <span >{user?.company || 'not information'}</span>
        </article>
        </div>

</article>
)
}

export default UserCard
