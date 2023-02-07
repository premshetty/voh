import Link from 'next/link'
import React from 'react'
import { Nav } from './AllBrodcast'
import AllCard from './VoiceOfChange'
import classes from '../editorials/editorial.module.css'
const TheBigIdea2 = () => {
    return (
        <>
            <Nav />
            <div className='mt-32 px-3 md:px-10'>
                <img src="/allbroadcast/dailyBoadcast.png" alt="" />
                <div>
                    <div className="flex mt-10 justify-between items-center border-b-[3px] pb-2 border-[#05B4A2]">
                        <h2 className="font-bold text-xl font-sans pl-5">The Big Idea</h2>
                    </div>
                    <div>
                        <h4 className='mt-5 font-proxima pl-5'>
                            Care is changing, and it is time to take a fresh look at the
                            ecosystem infrastructure that sustains and powers it. Voice of
                            Healthcare brings together leading figures to initiate much-needed
                            dialogues and expedient disruptions to achieve that goal.
                        </h4>
                    </div>
                    <div className='w-full md:w-[80%] flex flex-col justify-center items-center mx-auto mt-10'>
                        <img src="/yt.png" className='w-full' alt="" />
                        <div className='mt-10 border-y flex-col md:flex-row flex justify-between py-10 md:py-0 items-center md:h-20 w-full px-3 md:px-10'>
                            <div className='flex flex-col md:flex-row gap-4'>
                                <button className='h-12 w-auto bg-[#FF6262] px-5 py-4 items-center rounded-md flex gap-1 text-white font-[500] font-proxima'>
                                    <img src="/icons/bell.svg" className='h-6' alt="" />
                                    Set a reminder on Youtube
                                </button>
                                <button className='h-12 w-auto bg-[#075598] px-5 py-4 items-center rounded-md flex gap-1 text-white font-[500] font-proxima'>
                                    <img src="/icons/bell.svg" className='h-6' alt="" />
                                    Set a reminder on Facebook
                                </button>
                            </div>
                            <div className='flex gap-2 items-center mt-5 md:mt-0'>
                                <img src="/icons/share.svg" className='h-6' alt="" />
                                Share
                            </div>
                        </div>
                        <div className='mt-10 flex flex-col gap-6 font-proxima '>
                            <h1 className='text-[32px]  leading-12 font-[600] font-sans'>
                                VOH Healthcare Infrastructure Summit '22 | A CALL FOR CHANGE
                            </h1>

                            <p className='text-[#707070] text-base'> VOH Healthcare Infrastructure Summit '22 | A CALL FOR CHANGE</p>
                            <p className='text-[#707070] text-base'> Care is changing,                        and it is time to take a fresh look at the ecosystem infrastructure that sustains and powers it. Voice of Healthcare brings together leading figures to initiate much-needed dialogues and expedient disruptions to achieve that goal.</p>
                            <p className='text-[#707070] text-base'> From population and public health to innovations that raise efficiency and reduce the cost to transformations in diagnostics to the evolving rural landscape to patient safety to accreditations to next-generation facilities to the future of healthcare infrastructure, we aim to cover what's significant, what's next, and everything in between.</p>
                            <p className='text-[#707070] text-base'> Knowledge catalyser, vision compass, momentum accelerator, action roadmap, collaboration launchpad, wakeup alarm clock – VOH Healthcare Infrastructure Summit '22 will play many parts. And point us in directions that matter.</p>
                            <p className='text-[#707070] text-base'> Come, play your role. Be part of presentations, panels, Q&As, networking and more. And let's usher the change healthcare deserves… together.</p>

                        </div>
                    </div>
                    <div id='brandinfocus' className={` w-full mt-10`}>
                        <Link href='/brandinfocus' >

                            <div className='flex justify-between items-center border-b-[3px] pb-2 border-[#AD565B]'>
                                <h2 className='font-bold text-xl pl-5 font-sans'>Also watch Voice Of Change</h2>
                                <img src="/icons/right.svg" className='h-4' alt="" />
                            </div>
                        </Link>
                        <div className={`flex gap-3 flex-col md:flex-row justify-center items-center md:justify-between mt-10 ${classes.cardContainer} max-w-full overflow-scroll`}>
                            <AllCard />
                            <AllCard />
                            <AllCard />
                            <AllCard />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TheBigIdea2