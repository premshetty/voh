import React from 'react'
import SeeMore from '../reusalbles/SeeMore'
import { Nav } from './AllBrodcast'

const TheBigIdea = () => {
    return (
        <>
            <Nav />
            <div className='mt-32 px-3 md:px-10'>
                <img src="/allbroadcast/dailyBoadcast.png" alt="" />
                <div>
                    <div className="flex mt-10 justify-between items-center border-b-[5px] pb-2 border-[#05B4A2]">
                        <h2 className="font-bold text-xl">The Big Idea</h2>
                    </div>
                    <div>
                        <h4 className='mt-5'>
                            Care is changing, and it is time to take a fresh look at the
                            ecosystem infrastructure that sustains and powers it. Voice of
                            Healthcare brings together leading figures to initiate much-needed
                            dialogues and expedient disruptions to achieve that goal.
                        </h4>
                    </div>
                    <div
                        className="flex justify-center"
                        style={{
                            flexWrap: "wrap",
                            gap: "20px",
                            marginTop: "50px",
                        }}
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
                            <img
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