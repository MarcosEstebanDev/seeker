import React from 'react'
import SvgGithub from './icons/GithubIcons'
const UserCard = () => {
return (
    <article className='p-2 text-white rounded-xl bg-blue-900 grid-areas'>
        <div className='section-logo bg-gray-200 grid place-content-center rounded-full h-20 w-20'>
        <SvgGithub className='h-full w-full top-2 relative p-1' />
        </div>
        <div className='section-title'>
            <h2>the octocat</h2>
            <p>@octocat</p>
        </div>
        <p className='section-date'>Joined 25 Jan 2011</p>
        <p className='section-description'>Lorem imsum Nulla iaculis facilisis
            magna at congue. Suspendisse commodo convallis neque, vel ultrices neque egestas ut.
            Proin ullamcorper pretium purus nec sollicitudin. Proin scelerisque vehicula turpis eget mattis.
            Phasellus pharetra nisl id ultricies aliquet. Morbi ante quam, ullamcorper in est eu,
            tempor egestas ligula. Donec cursus, orci sed interdum mollis, ipsum nunc accumsan nulla,
            eget posuere ex nisl non felis. Etiam vel ornare orci.
            Cras ac lorem lorem. Vivamus vel felis non neque condimentum condimentum eget non orci.</p>
       <div className="section-number flex justify-around bg-blue-950">
            <article>
                <p>Repos</p>
                <p>88</p>
            </article>
            <article>
                <p>Followers</p>
                <p>3845</p>
            </article>
            <article>
                <p>Following</p>
                <p>9</p>
            </article>
        </div>
        <div className="section-social md:grid md:grid-cols-2">
        <article>
            <i>icon</i>
            <div>SanFransisco</div>
        </article>
        <article>
            <i>icon</i>
            <div>SanFransisco</div>
        </article>
        </div>

</article>
)
}

export default UserCard
