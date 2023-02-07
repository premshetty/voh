import React from 'react'
import SeeMore from '../reusalbles/SeeMore'
import { Nav } from './AllBrodcast'
import AllCard from './VoiceOfChange'

const VoiceOfChanges = () => {
    return (
        <>
            <Nav />
            <div id='voiceofchanges' className='px-3 md:px-10 mt-32'>
                <img src="/allbroadcast/dailyBoadcast.png" alt="" />
                <div>
                    <div className="flex justify-between items-center border-b-[3px] pb-2 mt-10 border-[#AD565B]">
                        <h2 className="font-bold text-xl font-sans pl-5">Voice of Change</h2>
                    </div>
                    <div>
                        <h4 className='font-proxima pl-5'>
                            Care is changing, and it is time to take a fresh look at the
                            ecosystem infrastructure that sustains and powers it. Voice of
                            Healthcare brings together leading figures to initiate much-needed
                            dialogues and expedient disruptions to achieve that goal.
                        </h4>
                    </div>
                    <div className='flex flex-col md:flex-row flex-wrap justify-between md:gap-y-10 mt-10 gap-y-5'
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                            <AllCard />
                        ))}
                    </div>
                    <SeeMore bg="#AD565B" />
                </div>
            </div>
        </>
    )
}

export default VoiceOfChanges