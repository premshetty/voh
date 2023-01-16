import React from 'react'
import classes from './navbar.module.css'
const AboveFooterCard = () => {
    return (
        <div className='bg-link_text_lg flex flex-col md:flex-row h-auto justify-between items-center gap-10 md:h-20 mt-10 px-10 py-2'>
            <h2 className='text-white font-semibold md:text-lg'> For Possible Collaboration Sign Up here</h2>
            <button className='bg-link_text_lg border border-white px-8 text-white font-semibold py-2'>COLLABORATIONS</button>
        </div>
    )
}
const Footer = () => {
    const footerlistclass = `${classes.footer} flex flex-col gap-2 md:ml-10`
    return (
        <>
            <AboveFooterCard />
            <div className='bg-footer_color w-full min-h-[400px] px-10 pt-10 pb-2 mt-10'>
                <div className='flex gap-4 items-center'>
                    <img src="/footer_logo.png" className='w-24' alt="" />
                    <div className='flex gap-2'>
                        <img src="/icons/fb.svg" className='w-6' alt="" />
                        <img src="/icons/twitter.svg" className='w-6' alt="" />
                        <img src="/icons/insta.svg" className='w-6' alt="" />
                        <img src="/icons/linkedin.svg" className='w-6' alt="" />
                        <img src="/icons/yt.svg" className='w-6' alt="" />
                    </div>
                </div>
                <div className='md:flex grid grid-cols-2 flex-wrap md:flex-nowrap md:flex-row align-top mt-10 gap-8'>
                    <p className='text-footer_para_text col-span-2 md:w-[500px]'>Vishaka Goyal’s Q&A-led tech platform Clinicspots is determined to answer some of healthcare’s most stubborn questions - like information, transparency and access. Vishaka Goyal’s Q&A-led tech platform Clinicspots is determined to answer some of healthcare’s most stubborn questions - like information, transparency and access. Vishaka Goyal’s Q&A-led tech platform Clinicspots is determined to answer some of healthcare’s most stubborn questions - like information, transparency and access.</p>
                    <div className={footerlistclass} >
                        <h2 className='text-white font-bold'>Editorials</h2>
                        <p className='text-footer_para_text'>Idea Leader </p>
                        <p className='text-footer_para_text'>Brand in Focus </p>
                        <p className='text-footer_para_text'>Article and Blog </p>
                        <p className='text-footer_para_text'>News & PR </p>
                    </div>
                    <div className={footerlistclass}>
                        <h2 className='text-white font-bold'>Events</h2>
                        <p className='text-footer_para_text'>All Events </p>
                        <p className='text-footer_para_text'>Public Health Awarness </p>
                        <p className='text-footer_para_text'>Brand Solutions </p>
                        <p className='text-footer_para_text'>FlagShip Events </p>
                    </div>
                    <div className={footerlistclass}>
                        <h2 className='text-white font-bold'>VOH Tv</h2>
                        <p className='text-footer_para_text'>Daily Broadcast </p>
                        <p className='text-footer_para_text'>Voice of Change </p>
                        <p className='text-footer_para_text'>The Big Idea </p>
                    </div>
                    <div className={footerlistclass}>
                        <h2 className='text-white font-bold'>Collaborations</h2>
                        <p className='text-footer_para_text'>Editorials </p>
                        <p className='text-footer_para_text'>Events </p>
                        <p className='text-footer_para_text'>Voh Tv </p>
                    </div>
                    <div className={footerlistclass}>
                        <h2 className='text-white font-bold'>More</h2>
                        <p className='text-footer_para_text'>About Us </p>
                        <p className='text-footer_para_text'>Contact Us </p>
                        <p className='text-footer_para_text'>Meet the Team </p>
                        <p className='text-footer_para_text'>Privacy Policy </p>
                    </div>
                </div>
                <div className=' flex flex-col md:flex md:flex-row md:justify-between mt-10 w-full'>
                    <div className='flex flex-col gap-3'>
                        <h2 className='text-white font-bold'>Subscribe to our newsletter</h2>
                        <div className='flex h-10 rounded-[7px]'>
                            <input className=' rounded-[7px] outline-none h-full w-full bg-footer_color border px-3 border-white placeholder:text-white' placeholder='Your Email Address' type="text" />
                            <button className='bg-button_cta p-2 -ml-2 h-full w-[100px] rounded-[7px] text-white font-semibold' > Submit</button>
                        </div>
                    </div>
                    <div className='flex mt-10 md:mt-0 flex-col gap-3'>
                        <h2 className='text-white font-bold'>Explore</h2>
                        <p className='text-footer_para_text'>Didn’t find what you were looking for?</p>
                        <div className='flex items-center gap-2 h-10 rounded-[7px] outline-none w-full bg-footer_color border px-3 border-white'>
                            <img className='h-5' src="/icons/search_white.svg" alt="" />
                            <input className='h-full rounded-[7px] outline-none w-full placeholder:opacity-80 bg-footer_color  px-3  placeholder:text-white' placeholder='Search Here' type="text" />
                        </div>

                    </div>
                </div>
                <p className='flex text-footer_para_text justify-center mt-10'> <img src="/icons/copyright.svg" alt="" /> All Rights Reserved by VOH</p>
            </div>
        </>
    )
}

export default Footer