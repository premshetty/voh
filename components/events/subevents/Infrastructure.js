import React from 'react'
import Agenda from './Agenda'
import { ContactUS2 } from './ContactUS'
import Featured from './Featured'
const KeyTrackCard = ({ bg }) => {
    return <div style={{ backgroundColor: bg }} className='flex flex-col items-center w-[300px] h-[530px]'>
        <img src="/callforchange.png" className='w-full' alt="" />
        <div className='p-3 mt-2 flex flex-col w-full gap-6 justify-center items-center'>
            <p className='text-white text-2xl font-bold items-center justify-center'> EXHIBITION</p>
            <div className='h-[5px] bg-[#FFFFFF] opacity-30 w-[60%] mx-auto'></div>
            <p className='text-white opacity-80'>
                Care is changing, and it is time to take a fresh look at the ecosystem infrastructure that sustains and powers it. Voice of Healthcare brings together leading figures to initiate much-needed dialogues and expedient disruptions to achieve that goal.
            </p>
        </div>
    </div>
}
const GuestCard = () => {
    return <div className='flex flex-col w-[330px] h-[450px] bg-white border-[5px] border-[#F7F7F7]'>
        <img src="/persons/guest.jpg" className='h-[200px] w-full object-cover' alt="" />
        <div className='flex flex-col w-full p-3 gap-6'>
            <p className='text-2xl text-[#AD565B] font-bold'>GUEST OF HONOUR</p>
            <p className='text-lg font-bold'>Sri Dr. Jatindera Singh</p>
            <p className=' opacity-80 text-base'>
                Union Minister of State, Prime Minister’s Office, Minister of State for the Ministry of science and Technology & Ministry of State (MoS) Ministry of Earth Science Government of India
            </p>
        </div>
    </div>
}
const Infrastructure = () => {
    return (

        <div>
            <img src="/event1_banner.jpg" className='w-full' alt="" />
            <div className='mt-20 flex relative'>
                <div className='h-2 bg-[#AD565B] w-full '>

                </div>
                <div className='h-12 top-[-20px] absolute w-[50%] bg-[#AD565B] px-10 py-2 '>
                    <p className='text-white text-2xl font-[500]'>Overview</p>
                </div>
            </div>
            <div className='mt-20 grid grid-cols-1 gap-8 md:grid-cols-2'>
                <img src="/callforchange.png" alt="" />
                <div>
                    <h2 className='text-xl font-bold'>VOH Healthcare Infrastructure Summit '22 | A CALL FOR CHANGE</h2>
                    <div className='opacity-80 flex flex-col gap-6 mt-8'>
                        <p> VOH Healthcare Infrastructure Summit '22 | A CALL FOR CHANGE  </p>
                        <p> Care is changing, and it is time to take a fresh look at the ecosystem infrastructure that sustains and powers it. Voice of Healthcare brings together leading figures to initiate much-needed dialogues and expedient disruptions to achieve that goal. </p>
                        <p> From population and public health to innovations that raise efficiency and reduce the cost to transformations in diagnostics to the evolving rural landscape to patient safety to accreditations to next-generation facilities to the future of healthcare infrastructure, we aim to cover what's significant, what's next, and everything in between.  </p>
                        <p> Knowledge catalyser, vision compass, momentum accelerator, action roadmap, collaboration launchpad, wakeup alarm clock – VOH Healthcare Infrastructure Summit '22 will play many parts. And point us in directions that matter.  </p>
                        <p> Come, play your role. Be part of presentations, panels, Q&As, networking and more. And let's usher the change healthcare deserves… together. </p>
                    </div>
                </div>

            </div>
            <Featured smcolor='#ffffff' color='#FFFFFF' bg='#935F5F' />
            <div className='mt-20 flex relative'>
                <div className='h-2 bg-[#AD565B] w-full '>

                </div>
                <div className='h-12 top-[-20px] absolute w-[50%] bg-[#AD565B] px-10 py-2 '>
                    <p className='text-white text-2xl font-[500]'>Key Tracks</p>
                </div>
            </div>
            <div className='flex mt-20 justify-center odd:bg-[] even:bg-[]'>
                <KeyTrackCard bg='#8C6160' />
                <KeyTrackCard bg='#D1B5B7' />
                <KeyTrackCard bg='#8C6160' />
                <KeyTrackCard bg='#D1B5B7' />

            </div>
            <div className='mt-20 flex relative'>
                <div className='h-2 bg-[#AD565B] w-full '>

                </div>
                <div className='h-12 top-[-20px] absolute w-[50%] bg-[#AD565B] px-10 py-2 '>
                    <p className='text-white text-2xl font-[500]'>Speakers</p>
                </div>
            </div>
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
            <div className='bg-[#F0F0F0] md:p-10 p-3 w-full mt-20'>
                <p className='w-full text-center font-bold text-2xl'>2023 EXHIBITORS</p>
                <div className='flex justify-center items-center gap-10 mt-10'>
                    <img src="/icons/mgi.png" className='h-[100px]' alt="" />
                    <img src="/icons/mgi.png" className='h-[100px]' alt="" />
                    <img src="/icons/mgi.png" className='h-[100px]' alt="" />
                    <img src="/icons/mgi.png" className='h-[100px]' alt="" />
                    <img src="/icons/mgi.png" className='h-[100px]' alt="" />
                    <img src="/icons/mgi.png" className='h-[100px]' alt="" />
                </div>
                <div className='mt-20 flex justify-around'>
                    <div className='flex flex-col gap-6 justify-center items-center'>
                        <p className='text-xl font-bold'>2023 GOLD SPONSOR</p>
                        <img src="/icons/mgi.png" className='h-[150px] w-[150px]' alt="" />
                    </div>
                    <div className='flex flex-col gap-6 justify-center items-center'>
                        <p className='text-xl font-bold'>2023 GOLD SPONSOR</p>
                        <img src="/icons/mgi.png" className='h-[150px] w-[150px] ' alt="" />
                    </div>
                </div>
            </div>
            <div className='mt-20 flex relative'>
                <div className='h-2 bg-[#AD565B] w-full '>

                </div>
                <div className='h-12 top-[-20px] absolute w-[50%] bg-[#AD565B] px-10 py-2 '>
                    <p className='text-white text-2xl font-[500]'>Agenda</p>
                </div>
            </div>
            <Agenda />
            <ContactUS2 />
        </div>
    )
}

export default Infrastructure