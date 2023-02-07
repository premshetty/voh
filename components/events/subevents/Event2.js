import React from 'react'
import Agenda from './Agenda'
import ContactUS from './ContactUS'
import Featured from './Featured'
import SpeakerCard from './SpeakerCard'
const DiscussCard = () => {
    return <div className='w-[200px] relative  flex flex-col justify-between p-8 h-[200px] bg-[#489FC5] hover:scale-110 origin-top-left cursor-pointer'>
        <img src="/icons/globe.svg" className='h-6 -ml-16' alt="" />
        <img src="/icons/globebg.svg" className='absolute opacity-30 block top-10 right-0 bottom-0  h-full w-[70%]' alt="" />
        <p className='text-white  text-lg font-[500] -ml-4 font-sans'>Healthcare for New India @75</p>
    </div>
}
const Event2 = () => {
    return (
        <div>
            <img src="/event1_banner.jpg" className='w-full' alt="" />
            <p className='text-2xl font-bold w-full text-center mt-10'>In association with</p>
            <img src="/brands.png" className=' transform  hover:scale-110 transition duration-500 w-[80%]  flex mx-auto mt-10 ' alt="" />
            <p className='text-2xl text-[#489FC5] font-[500] w-full text-center mt-10'>OVERVIEW</p>
            <div className='md:w-[60%] flex md:flex-row flex-col justify-center items-center mx-auto gap-10'>
                <div className='flex flex-col gap-2 w-full md:w-[40%]'>
                    <img src="/icons/doublequotes.svg" className='w-full md:h-[150px] float-right md:ml-20' alt="" />
                    <p className='text-5xl leading-tight font-bold text-center md:text-right'>
                        Healthcare leaders architecting future prospects of health delivery
                    </p>
                </div>
                <div className='w-full md:flex-grow md:w-auto flex flex-col gap-6'>
                    <p> VOH Healthcare Infrastructure Summit '22 | A CALL FOR CHANGE  </p>
                    <p> Care is changing, and it is time to take a fresh look at the ecosystem infrastructure that sustains and powers it. Voice of Healthcare brings together leading figures to initiate much-needed dialogues and expedient disruptions to achieve that goal.  </p>
                    <p> From population and public health to innovations that raise efficiency and reduce the cost to transformations in diagnostics to the evolving rural landscape to patient safety to accreditations to next-generation facilities to the future of healthcare infrastructure, we aim to cover what's significant, what's next, and everything in between.  </p>
                    <p> Knowledge catalyser, vision compass, momentum accelerator, action roadmap, collaboration launchpad, wakeup alarm clock – VOH Healthcare Infrastructure Summit '22 will play many parts. And point us in directions that matter.  </p>
                    <p> Come, play your role. Be part of presentations, panels, Q&As, networking and more. And let's usher the change healthcare deserves… together. </p>
                </div>
            </div>
            <Featured />
            <p className='text-2xl text-[#489FC5] font-[500] w-full text-center mt-10'>Speakers</p>
            <div className='md:grid flex flex-col mt-16 justify-items-center gap-y-6 md:gap-y-20  md:grid-cols-3'>
                <SpeakerCard />
                <SpeakerCard />
                <SpeakerCard />
                <SpeakerCard />
                <SpeakerCard />
                <SpeakerCard />
                <SpeakerCard />
                <SpeakerCard />
                <SpeakerCard />
            </div>
            <p className='text-2xl text-[#489FC5] font-[500] w-full text-center mt-10'>WHY PARTNER WITH US</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-[80%] mx-auto mt-16'>
                <ul className='flex flex-col gap-12' >
                    <li className='flex gap-5 items-center text-xl font-bold font-sans'>
                        <img src="/icons/list.svg" alt="" />
                        VOH Healthcare Infrastructure Summit '22 | A CALL FOR CHANGE
                    </li>
                    <li className='flex gap-5 items-center text-xl font-bold font-sans'>
                        <img src="/icons/list.svg" alt="" />
                        VOH Healthcare Infrastructure Summit '22 | A CALL FOR CHANGE
                    </li>
                    <li className='flex gap-5 items-center text-xl font-bold font-sans'>
                        <img src="/icons/list.svg" alt="" />
                        VOH Healthcare Infrastructure Summit '22 | A CALL FOR CHANGE
                    </li>
                </ul>
                <ul className='flex flex-col gap-12' >
                    <li className='flex gap-5 items-center text-xl font-bold font-sans'>
                        <img src="/icons/list.svg" alt="" />
                        VOH Healthcare Infrastructure Summit '22 | A CALL FOR CHANGE
                    </li>
                    <li className='flex gap-5 items-center text-xl font-bold font-sans'>
                        <img src="/icons/list.svg" alt="" />
                        VOH Healthcare Infrastructure Summit '22 | A CALL FOR CHANGE
                    </li>
                    <li className='flex gap-5 items-center text-xl font-bold font-sans'>
                        <img src="/icons/list.svg" alt="" />
                        VOH Healthcare Infrastructure Summit '22 | A CALL FOR CHANGE
                    </li>
                </ul>
            </div>
            <p className='text-2xl text-[#489FC5] font-[500] w-full text-center mt-16'>DISCUSSION POINTS</p>
            <div className='md:grid flex flex-col items-center justify-center mt-16 justify-items-center gap-y-6 md:gap-y-20  md:grid-cols-3'>
                <DiscussCard />
                <DiscussCard />
                <DiscussCard />
                <DiscussCard />
                <DiscussCard />
                <DiscussCard />
                <DiscussCard />
                <DiscussCard />
                <DiscussCard />
            </div>
            <p className='text-2xl text-[#489FC5] font-[500] w-full text-center mt-10'>Agenda</p>
            <Agenda />
            <ContactUS />
        </div>
    )
}

export default Event2