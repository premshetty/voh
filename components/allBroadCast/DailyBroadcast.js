import React from 'react'
import SeeMore from '../reusalbles/SeeMore'
import { Nav } from './AllBrodcast'

const DailyBroadcast = () => {
    return (
        <>
            <Nav />
            <div className='mt-32 px-3 md:px-10'>
                <img src="/allbroadcast/dailyBoadcast.png" alt="" />
                <div>
                    <div className="mt-10 flex justify-between items-center border-b-[3px] pb-2 border-[#5F9DC1]">
                        <h2 className="font-bold text-xl">Daily Broadcast</h2>
                    </div>
                    <div>
                        <h4 className='mt-5'>
                            Care is changing, and it is time to take a fresh look at the
                            ecosystem infrastructure that sustains and powers it. Voice of
                            Healthcare brings together leading figures to initiate much-needed
                            dialogues and expedient disruptions to achieve that goal.
                        </h4>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full justify-center gap-y-5 mt-10'
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
                            <img className='w-full sm:w-[256px]'
                                src="/allbroadcast/cardIBroad1.png"
                            />
                        ))}
                    </div>
                    <SeeMore bg="#5F9DC1" />
                </div>
            </div>
        </>
    )
}

export default DailyBroadcast