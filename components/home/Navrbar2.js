import React from 'react'
import classes from './navbar.module.css'
const Navrbar2 = () => {
    let mobile_icon = document && document?.getElementById('mobile-icon');
    let mobile_menu = document && document?.getElementById('mobile-menu');
    let hamburger_icon = document && document?.querySelector("#mobile-icon i");
    useEffect(() => {
        first

        return () => {
            second
        }
    }, [third])



    function openCloseMenu() {
        mobile_menu.classList.toggle('block');
        mobile_menu.classList.toggle('active');
    }


    mobile_icon.addEventListener('click', openCloseMenu);


    return (
        <header className="h-20 bg-white">
            <nav className="relative px-2 py-4">

                <div className="container mx-auto flex justify-between items-center">
                    <img src="https://avrasys.hu/logoipsum-logo-54.svg" alt="Tailwindcss Navigation" />

                    <ul className="hidden md:flex space-x-6">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">News</a></li>
                        <li className="flex relative group">
                            <a href="#" className="mr-1">Services</a>
                            <i className="fa-solid fa-chevron-down fa-2xs pt-3"></i>

                            <ul className="absolute bg-white p-3 w-52 top-6 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg">
                                <li className="text-sm hover:bg-slate-100 leading-8"><a href="#">Webdesign</a></li>
                                <li className="text-sm hover:bg-slate-100 leading-8"><a href="#">Digital marketing</a></li>
                                <li className="text-sm hover:bg-slate-100 leading-8"><a href="#">SEO</a></li>
                                <li className="text-sm hover:bg-slate-100 leading-8"><a href="#">Ad campaigns</a></li>
                                <li className="text-sm hover:bg-slate-100 leading-8"><a href="#">UX Design</a></li>
                            </ul>

                        </li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>

                    <a href="#" className="bg-red-400 px-5 py-1 rounded-3xl hover:bg-red-500 text-white hidden md:flex" role="button">Sign In</a>

                    <button id="mobile-icon" className="md:hidden">
                        fghrdhtgd
                    </button>

                </div>

                <div className="md:hidden flex justify-center mt-3 w-full">
                    <div id="mobile-menu" className={`${classes.mobile_menu} absolute top-23 w-full`}>
                        <ul className="bg-gray-100 shadow-lg leading-9 font-bold h-screen">
                            <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4"><a href="https://google.com" className="block pl-7">Home</a></li>
                            <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4"><a href="#" className="block pl-7">News</a></li>
                            <li className="border-b-2 border-white hover:bg-red-400 hover:text-white">
                                <a href="#" className="block pl-11">Services <i className="fa-solid fa-chevron-down fa-2xs pt-4"></i></a>


                                <ul className="bg-white text-gray-800 w-full">
                                    <li className="text-sm leading-8 font-normal hover:bg-slate-200"><a className="block pl-16" href="#">Webdesign</a></li>
                                    <li className="text-sm leading-8 font-normal hover:bg-slate-200"><a className="block pl-16" href="#">Digital marketing</a></li>
                                    <li className="text-sm leading-8 font-normal hover:bg-slate-200"><a className="block pl-16" href="#">SEO</a></li>
                                    <li className="text-sm leading-8 font-normal hover:bg-slate-200"><a className="block pl-16" href="#">Ad campaigns</a></li>
                                    <li className="text-sm leading-8 font-normal hover:bg-slate-200"><a className="block pl-16" href="#">UX Design</a></li>
                                </ul>

                            </li>
                            <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4"><a href="#" className="block pl-7">About</a></li>
                            <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4"><a href="#" className="block pl-7">Contact</a></li>
                        </ul>
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default Navrbar2