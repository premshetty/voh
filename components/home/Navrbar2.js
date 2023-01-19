import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import classes from './navbar.module.css'
const Navrbar2 = ({ childs }) => {
    const [show, setShow] = useState(false)
    let mobile_icon;
    let mobile_menu;
    let hamburger_icon;
    useEffect(() => {
        mobile_icon = document && document?.getElementById('mobile-icon');
        mobile_menu = document && document?.getElementById('mobile-menu');
        hamburger_icon = document && document?.querySelector("#mobile-icon i");
    }, [])



    function openCloseMenu() {
        setShow(!show)
    }




    return (
        <header className="h-16 bg-white fixed top-0 z-[100] w-full shadow-md">
            <nav className="relative  py-4">

                <div className="flex px-5 md:px-10 justify-between items-center">
                    <a className='hidden md:flex flex-col justify-between items-center' href='/'> <img className='w-5 h-auto' src="/icons/home.svg" alt="" />Home</a>
                    <Link href='/' >  <img src="/logo_nav.png" className=' block md:hidden h-10' alt="Tailwindcss Navigation" /></Link>
                    <ul className="hidden md:flex items-center space-x-16">

                        <li className="flex relative group">
                            <a href="#" className="mr-1 flex items-center gap-[6px] font-[500] text-[black]">Events <img className='h-3 mt-1' src="/icons/down.svg" alt="" /></a>
                            <ul className="absolute bg-white py-6 px-10 w-auto top-6 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg">
                                <div className='flex whitespace-nowrap gap-10'>
                                    <ul>
                                        <li className="text-sm hover:bg-slate-100 leading-8"><a className='font-[500] text-[black]' href="/events">ALL EVENTS</a></li>
                                        <li className="text-sm hover:bg-slate-100 leading-8"><a className='font-[500] text-[black]' href="/events#publichealthawarness">PUBLIC HEALTH AWARNESS</a></li>
                                        <li className="text-sm hover:bg-slate-100 leading-8"><a className='font-[500] text-[black]' href="/events#brandsolution">BRAND SOLUTION</a></li>
                                        <li className="text-sm hover:bg-slate-100 leading-8"><a className='font-[500] text-[black]' href="/events#flagshipevent">FLAGSHIP EVENTS</a></li>
                                    </ul>
                                    <ul>
                                        <li className="text-sm hover:bg-slate-100 leading-8"><a className='font-[500] text-[black]' href="#">EVENT1</a></li>
                                        <li className="text-sm hover:bg-slate-100 leading-8"><a className='font-[500] text-[black]' href="#">EVENT2</a></li>
                                        <li className="text-sm hover:bg-slate-100 leading-8"><a className='font-[500] text-[black]' href="#">EVENT3</a></li>

                                    </ul>
                                </div>

                            </ul>

                        </li>
                        <li className="flex relative group">
                            <a href="#" className="mr-1 flex items-center gap-[6px] font-[500] text-[black]">Editorials <img className='h-3 mt-1' src="/icons/down.svg" alt="" /></a>
                            <ul className="absolute bg-white  py-6 px-10 w-auto whitespace-nowrap top-6 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg">
                                <li className="text-sm hover:bg-slate-100 leading-8"><a className='font-[500] text-[black]' href="/idealeader">IDEA LEADER</a></li>
                                <li className="text-sm hover:bg-slate-100 leading-8"><a className='font-[500] text-[black]' href="/brandinfocus">BRAND IN FOCUS</a></li>
                                <li className="text-sm hover:bg-slate-100 leading-8"><a className='font-[500] text-[black]' href="/newsandpr">NEWS AND PR</a></li>
                                <li className="text-sm hover:bg-slate-100 leading-8"><a className='font-[500] text-[black]' href="/articleandblogs">ARTICLE AND BLOG</a></li>
                            </ul>

                        </li>
                        <Link href='/'>  <img src="/logo_nav.png" className='hidden md:block h-10' alt="Tailwindcss Navigation" /></Link>
                        <li className="flex relative group">
                            <a href="#" className="mr-1 flex items-center gap-[6px] font-[500] text-[black]">VOH TV <img className='h-3 mt-1' src="/icons/down.svg" alt="" /></a>
                            <ul className="absolute bg-white  py-6 px-10 w-auto whitespace-nowrap top-6 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg">
                                <li className="text-sm hover:bg-slate-100 leading-8"><a className='font-[500] text-[black]' href="/allbroadcast/dailybroadcast">Daily Broadcast</a></li>
                                <li className="text-sm hover:bg-slate-100 leading-8"><a className='font-[500] text-[black]' href="/allbroadcast/voiceofchange">Voice of Change</a></li>
                                <li className="text-sm hover:bg-slate-100 leading-8"><a className='font-[500] text-[black]' href="/allbroadcast/thebigidea">The Big idea</a></li>

                            </ul>

                        </li>
                        <li><a className='font-[500] text-[black]' href="#">Startup ecosystem</a></li>

                    </ul>

                    <div className='hidden gap-3 items-center md:flex'>
                        <div className='flex flex-col justify-between items-center'>
                            <img className='w-5 h-auto' src="/icons/search.svg" alt="" />
                            <p>Search</p>
                        </div>
                        <div className='flex flex-col justify-between items-center'>
                            <img className='w-5 h-auto' src="/icons/user.svg" alt="" />
                            <p>Login</p>
                        </div>

                    </div>


                    <img id="mobile-icon" onClick={openCloseMenu} className={` h-5 md:hidden`} src="/icons/menu.svg" alt="" />

                </div>
                <div className="md:hidden flex  mt-3 w-full">
                    <div id="mobile-menu" className={show ? `active block w-[100vw] bg-white z-[200]` : `${classes.mobile_menu} absolute top-23 w-full`}>
                        <div className='h-screen bg-white'>
                            <div className='grid grid-cols-2 mt-10 p-5 bg-white justify-items-start'>
                                <div className=''>
                                    <h2 className='font-[700] text-[black] text-base'>EVENTS</h2>
                                    <div className='mt-5 flex flex-col gap-3'>
                                        <a href='#' className='font-[500] text-[black] text-sm'>ALL EVENTS</a>
                                        <a href='#' className='font-[500] text-[black] text-sm'>PUBLIC HEALTH AWARNESS</a>
                                        <a href='#' className='font-[500] text-[black] text-sm'>BRAND SOLUTION</a>
                                        <a href='#' className='font-[500] text-[black] text-sm'>FLAGSHIP EVENTS</a>
                                    </div>

                                </div>
                                <div className='min-h-[200px]'>

                                    <div className='mt-5  flex flex-col gap-3'>
                                        <a className='font-[500] text-[black] text-sm' href="#">EVENT1</a>
                                        <a className='font-[500] text-[black] text-sm' href="#">EVENT2</a>
                                        <a className='font-[500] text-[black] text-sm' href="#">EVENT3</a>
                                    </div>
                                </div>
                                <div className='min-h-[200px]'>
                                    <h2 className='font-[700] text-[black] text-base'>Editorials</h2>
                                    <div className='mt-5 flex flex-col gap-3'>
                                        <a href='#' className='font-[500] text-[black] text-sm'>IDEA LEADER</a>
                                        <a href='#' className='font-[500] text-[black] text-sm'>BRAND IN FOCUS</a>
                                        <a href='#' className='font-[500] text-[black] text-sm'>NEWS AND PR</a>
                                        <a href='#' className='font-[500] text-[black] text-sm'>ARTICLE AND BLOG</a>
                                    </div>
                                </div>
                                <div className='min-h-[200px]'>
                                    <h2 className='font-[700] text-[black] text-base'>VOH TV</h2>
                                    <div className='mt-5 flex flex-col gap-3'>
                                        <p className='font-[500] text-[black] text-sm'>Daily Broadcast</p>
                                        <p className='font-[500] text-[black] text-sm'>Voice of Change</p>
                                        <p className='font-[500] text-[black] text-sm'>The Big idea</p>
                                    </div>
                                </div>
                                {childs}
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

                    </div>
                </div>

            </nav>
        </header>

    )
}

export default Navrbar2