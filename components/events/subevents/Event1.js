import React from 'react'
import { MainCard } from '../AllEvents'
import Agenda from './Agenda'
import ContactUS from './ContactUS'
import Featured from './Featured'
import SpeakerCard from './SpeakerCard'

const Event1 = () => {
    return (
        <div>
            <MainCard img="/event1_banner.jpg" date='October 19 , 2022' addon={true} />
            <div className='flex justify-center items-center relative mx-auto mt-20 w-[300px]'>
                <p className='text-[#489FC5] text-2xl font-bold'> <span className='font-[400] top-[-20px] left-10 -z-10 text-[120px] absolute text-[#C9EFFF]'>O</span> Overview</p>
            </div>
            <div className='mt-20 grid grid-cols-1 gap-10 md:grid-cols-2'>
                <div>
                    <h2 className='text-xl font-bold font-sans'>VOH Healthcare Infrastructure Summit '22 | A CALL FOR CHANGE</h2>
                    <div className='opacity-80 flex flex-col gap-6 mt-8'>
                        <p className='font-proxima'> VOH Healthcare Infrastructure Summit '22 | A CALL FOR CHANGE  </p>
                        <p className='font-proxima'> Care is changing, and it is time to take a fresh look at the ecosystem infrastructure that sustains and powers it. Voice of Healthcare brings together leading figures to initiate much-needed dialogues and expedient disruptions to achieve that goal. </p>
                        <p className='font-proxima'> From population and public health to innovations that raise efficiency and reduce the cost to transformations in diagnostics to the evolving rural landscape to patient safety to accreditations to next-generation facilities to the future of healthcare infrastructure, we aim to cover what's significant, what's next, and everything in between.  </p>
                        <p className='font-proxima'> Knowledge catalyser, vision compass, momentum accelerator, action roadmap, collaboration launchpad, wakeup alarm clock – VOH Healthcare Infrastructure Summit '22 will play many parts. And point us in directions that matter.  </p>
                        <p className='font-proxima'> Come, play your role. Be part of presentations, panels, Q&As, networking and more. And let's usher the change healthcare deserves… together. </p>
                    </div>
                </div>
                <img src="/callforchange.png" alt="" />
            </div>
            <div className='flex justify-center items-center relative mx-auto mt-20 w-[400px]'>
                <p className='text-[#489FC5] text-2xl font-bold'> <span className='font-[400] top-[-10px] left-10 -z-10 text-[120px] absolute text-[#C9EFFF]'>D</span> Details of the Event</p>
            </div>
            <Featured />
            <div className='flex justify-center items-center relative mx-auto mt-20 w-[200px]'>
                <p className='text-[#489FC5] text-2xl font-bold'> <span className='font-[400] top-[-10px] left-6 -z-10 text-[120px]  absolute text-[#C9EFFF]'>S</span> Speakers</p>
            </div>

            <div className='md:grid flex flex-col mt-16 justify-items-center gap-y-6 md:gap-y-20  md:grid-cols-3'>
                <div className='col-span-3'>
                    <SpeakerCard />
                </div>
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
            <div className='flex justify-center items-center relative mx-auto mt-20 w-[200px]'>
                <p className='text-[#489FC5] text-2xl font-bold'>
                    <span className=' font-bold top-[-10px] left-6 -z-10 text-[120px]  absolute text-[#C9EFFF]'>P</span>
                    Partners</p>
            </div>
            <img src="/brands.png" className=' transform  hover:scale-110 transition duration-500 w-[80%]  flex mx-auto mt-10 ' alt="" />
            <div className='flex justify-center items-center relative mx-auto mt-20 w-[200px]'>
                <p className='text-[#489FC5] text-2xl font-bold'>
                    <span className=' font-bold top-[-10px] left-6 -z-10 text-[120px]  absolute text-[#C9EFFF]'>A</span>
                    Agenda</p>
            </div>
            <Agenda />

            <ContactUS />
        </div>
    )
}

export default Event1