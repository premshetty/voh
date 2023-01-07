import NavbarDropdown from './NavbarDropdown'
import React from 'react'

const Navbar = () => {
    const navbarlists = {
        events: {
            name: 'Events',
            list: ['home', 'honme2', 'home3']
        },
        editorials: {
            name: 'Editorials',
            list: ['home', 'honme2', 'home3']
        },
        vohtv: {
            name: 'VOH TV',
            list: ['home', 'honme2', 'home3']
        },
    }
    return (
        <div className='flex fixed z-50 top-0 justify-between w-full shadow-lg items-center min-h-[64px] bg-white px-10 text-head_text font-[500]'>
            <div className='flex flex-col justify-between items-center'>
                <img className='w-5 h-auto' src="/icons/home.svg" alt="" />
                <p>Home</p>
            </div>
            <div className='flex items-center justify-between w-[50%]'>
                <NavbarDropdown name={navbarlists.events.name} list={navbarlists.events.list} />
                <NavbarDropdown name={navbarlists.editorials.name} list={navbarlists.editorials.list} />
                <img width={100} src='/logo_nav.png' />
                <NavbarDropdown name={navbarlists.vohtv.name} list={navbarlists.vohtv.list} />
                <p>startup ecosystem</p>
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