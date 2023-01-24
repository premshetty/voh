import NavbarDropdown from './NavbarDropdown'
import React from 'react'

const Navbar = () => {
    const navbarlists = {
        events: {
            name: 'Events',
            list: [{ name: 'ALL EVENTS', link: '#' }, { name: 'PUBLIC HEALTH AWARNESS', link: '#' }, { name: 'BRAND SOLUTION', link: '#' }, { name: 'FLAGSHIP EVENTS', link: '#' }],
            list2: [{ name: 'EVENT1', link: '/event/1' }, { name: 'EVENT2', link: '/event/2' }, { name: 'EVENT3', link: '/event/3' }]
        },
        editorials: {
            name: 'Editorials',
            list: [{ name: 'IDEA LEADER', link: 'idealeader' }, { name: 'BRAND IN FOCUS', link: 'brandinfocus' }, { name: 'NEWS AND PR', link: 'newsandpr' }, { name: 'ARTICLE AND BLOG', link: 'articleandblogs' }]
        },
        vohtv: {
            name: 'VOH TV',
            list: [{ name: 'Daily Broadcast', link: '#' }, { name: 'Voice of Change', link: '#' }, { name: 'The Big idea', link: '#' }]
        },
    }
    return (
        <div className='flex whitespace-nowrap fixed z-50 top-0 justify-between w-full shadow-lg items-center min-h-[64px] bg-white px-10 text-head_text font-[500]'>
            <a className='flex flex-col justify-between items-center' href='/'> <img className='w-5 h-auto' src="/icons/home.svg" alt="" />Home</a>
            <div className='flex items-center justify-between w-[50%]'>
                <NavbarDropdown name={navbarlists.events.name} list={navbarlists.events.list} list2={navbarlists.events.list2} />
                <NavbarDropdown name={navbarlists.editorials.name} list={navbarlists.editorials.list} />
                <img width={100} src='/logo_nav.png' />
                <NavbarDropdown name={navbarlists.vohtv.name} list={navbarlists.vohtv.list} />
                <a href='#'>startup ecosystem</a>
            </div>
            <div className='flex gap-3 items-center'>
                <div className='flex flex-col justify-between items-center'>
                    <img className='w-5 h-auto' src="/icons/search.svg" alt="" />
                    <p>Search</p>
                </div>
                <div className='flex flex-col justify-between items-center'>
                    <img className='w-5 h-auto' src="/icons/user.svg" alt="" />
                    <p>Login</p>
                </div>

            </div>
        </div>
    )
}

export default Navbar