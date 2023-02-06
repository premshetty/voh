import React from "react";
import Carousel from "./Carousel";
import AllCard from "./VoiceOfChange";
import classes from '../editorials/editorial.module.css'

import Link from "next/link";
export const Nav = () => {
  return (
    <div className={`hidden ${classes.shadow} ${classes.navcontainer} pl-5   overflow-x-scroll md:flex gap-8 text-sm z-20 h-10 fixed top-[63px] w-full bg-white shadow-2xl mt-[1px] justify-start md:justify-center items-center`}>
      <a className='whitespace-nowrap text-xs md:text-sm' href='/allbroadcast'> All Videos</a>
      <a className='whitespace-nowrap text-xs md:text-sm' href='/allbroadcast#dailybroadcast'> Daily Broadcast</a>
      <a className='whitespace-nowrap text-xs md:text-sm' href='/allbroadcast#voiceofchanges'> Voice of Change</a>
      <a className='whitespace-nowrap text-xs md:text-sm' href='/allbroadcast#thebigidea'> The Big Idea</a>
    </div>
  )
}
const AllBrodcasr = () => {
  return (
    <>
      <Nav />
      <div style={{ padding: "30px" }}>
        <div style={{ marginTop: "100px" }}>
          <Carousel />
        </div>
        <Link href='/allbroadcast/dailybroadcast'>
          <div id='dailybroadcast' className="flex justify-between items-center border-b-[5px] pb-2 border-[#5F9DC1]">
            <h2 className="font-bold text-xl ml-10 font-sans">Daily Broadcast</h2>
            <img src="/icons/right.svg" className="h-4" alt="" />
          </div>
        </Link>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full justify-center gap-y-5 mt-10'
        >
          {[1, 2, 3, 4].map((item) => (
            <div className={`${classes.IdeaLeaderCard2}`}>
              <img
                src="/allbroadcast/cardIBroad1.png"
                style={{ width: "335px" }}
              />
            </div>
          ))}
        </div>
        <Link href='/allbroadcast/voiceofchange'>
          <div id="voiceofchanges" className="flex mt-10 justify-between items-center border-b-[5px] pb-2 border-[#AD565B]">
            <h2 className="font-bold text-xl ml-10 font-sans">Voice of change</h2>
            <img src="/icons/right.svg" className="h-4" alt="" />
          </div>
        </Link>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full justify-center gap-y-5 mt-10'
        >
          {[1, 2, 3, 4].map((item) => (
            <div className="">

              <AllCard />
            </div>
          ))}
        </div>
        <Link href='/allbroadcast/thebigidea'>
          <div id='thebigidea' className="flex justify-between items-center border-b-[5px] pb-2 border-[#05B4A2]">
            <h2 className="font-bold text-xl ml-10 font-sans">The Big Idea</h2>
          </div>
        </Link>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full justify-center gap-y-5 mt-10'
        >
          {[1, 2, 3, 4].map(() => (
            <img src="/allbroadcast/cardImg1.png" style={{ width: "265px" }} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllBrodcasr;



