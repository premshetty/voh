import React from 'react'
import SeeMore from '../reusalbles/SeeMore'
import { Nav } from './AllBrodcast'
import classes from '../editorials/editorial.module.css'
const TheBigIdea = () => {
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
                    <div className='grid grid-cols-1 sm:grid-cols-2 justify-center md:grid-cols-4 w-full gap-y-5 mt-10'
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
                            <img key={item} className={`${classes.IdeaLeaderCard2}`}
                                src="/allbroadcast/cardImg1.png"
                                style={{ width: "265px" }}
                            />
                        ))}
                    </div>
                    <SeeMore bg="#05B4A2" />
                </div>
            </div>
        </>
    )
}

export default TheBigIdea