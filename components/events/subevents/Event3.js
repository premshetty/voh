import React from 'react'
import Agenda from './Agenda'
import ContactUS from './ContactUS'
import Featured from './Featured'
const Card = () => {
    return <div className='w-[300px]  flex flex-col justify-center p-16 gap-10 h-[300px] bg-[#05B4A2] hover:scale-110 origin-top-left cursor-pointer'>
        <img src="/icons/globe.svg" className='h-16 ' alt="" />
        <p className='text-white  text-2xl font-[500] -ml-4'>Healthcare for New India @75</p>
    </div>
}
const GuestCard = () => {
    return <div className='flex flex-col w-[330px] h-[450px] bg-[#65D1C6]'>
        <img src="/persons/guest.jpg" className='h-[200px] w-full object-cover' alt="" />
        <div className='flex flex-col w-full p-3 gap-6'>
            <p className='text-2xl text-white font-bold'>GUEST OF HONOUR</p>
            <p className='text-lg text-white font-bold'>Sri Dr. Jatindera Singh</p>
            <p className='text-white opacity-80 text-base'>
                Union Minister of State, Prime Minister’s Office, Minister of State for the Ministry of science and Technology & Ministry of State (MoS) Ministry of Earth Science Government of India
            </p>
        </div>
    </div>
}
const Event3 = () => {
    return (
        <div>
            <img src="/event1_banner.jpg" className='w-full' alt="" />
            <p className='text-2xl font-bold w-full text-center mt-10'>In association with</p>
            <img src="/brands.png" className=' transform  hover:scale-110 transition duration-500 w-[80%]  flex mx-auto mt-10 ' alt="" />
            <p className='text-[#05B4A2] text-3xl font-bold underline underline-offset-8  text-center w-full mt-10'>KEY TRACKS</p>
            <div className='flex justify-between mt-20'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <p className='text-[#05B4A2] text-3xl font-bold underline underline-offset-8  text-center w-full mt-10'>OVERVIEW</p>
            <div className='text-base mt-10 flex flex-col gap-8 justify-center items-start w-[70%] opacity-80 mx-auto'>
                <p > VOH Healthcare Infrastructure Summit '22 | A CALL FOR CHANGE </p>
                <p > Care is changing, and it is time to take a fresh look at the ecosystem infrastructure that sustains and powers it. Voice of Healthcare brings together leading figures to initiate much-needed dialogues and expedient disruptions to achieve that goal. </p>
                <p > From population and public health to innovations that raise efficiency and reduce the cost to transformations in diagnostics to the evolving rural landscape to patient safety to accreditations to next-generation facilities to the future of healthcare infrastructure, we aim to cover what's significant, what's next, and everything in between. </p>
                <p > Knowledge catalyser, vision compass, momentum accelerator, action roadmap, collaboration launchpad, wakeup alarm clock – VOH Healthcare Infrastructure Summit '22 will play many parts. And point us in directions that matter. </p>
                <p > Come, play your role. Be part of presentations, panels, Q&As, networking and more. And let's usher the change healthcare deserves… together.</p>
            </div>
            <p className='text-[#05B4A2] text-3xl font-bold underline underline-offset-8  text-center w-full mt-10'>SUMMIT HIGHLIGHTS</p>
            <Featured color='#05B4A2' />
            <p className='text-[#05B4A2] text-3xl font-bold underline underline-offset-8  text-center w-full mt-10'>SPEAKERS</p>
            <div className='grid grid-cols-1 gap-y-10 md:grid-cols-4 mt-10'>
                <GuestCard />
                <GuestCard />
                <GuestCard />
                <GuestCard />
                <GuestCard />
                <GuestCard />
                <GuestCard />
                <GuestCard />
                <GuestCard />
                <GuestCard />
                <GuestCard />
                <GuestCard />
                <GuestCard />
                <GuestCard />
                <GuestCard />
                <GuestCard />
            </div>
            <p className='text-[#05B4A2] text-3xl font-bold   text-center w-full mt-10'>Agenda</p>
            <Agenda bordercolor='#05B4A2' />
            <ContactUS />
        </div>
    )
}

export default Event3