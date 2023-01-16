import React from "react";
import Carousel from "./Carousel";
import AllCard from "./VoiceOfChange";
import SeeMore from "../reusalbles/SeeMore";
import classes from '../editorials/editorial.module.css'
import DailyBroadcast from "./DailyBroadcast";
import Link from "next/link";
export const Nav = () => {
  return (
    <div className={`${classes.shadow} ${classes.navcontainer} pl-5   overflow-x-scroll flex gap-8 text-sm z-20 h-10 fixed top-[63px] w-full bg-white shadow-2xl mt-[1px] justify-start md:justify-center items-center`}>
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
        <div id='dailybroadcast' className="flex justify-between items-center border-b-[5px] pb-2 border-[#5F9DC1]">
          <h2 className="font-bold text-xl">Daily Broadcast</h2>
          <img src="/icons/right.svg" className="h-4" alt="" />
        </div>
        <div
          className="flex justify-center"
          style={{
            gap: "20px",
            marginTop: "40px",
            marginBottom: "100px",
            flexWrap: "wrap",
          }}
        >
          {[1, 2, 3, 4].map((item) => (
            <img
              src="/allbroadcast/cardIBroad1.png"
              style={{ width: "265px" }}
            />
          ))}
        </div>
        <Link href='/allbroadcast/voiceofchange'>
          <div id="voiceofchanges" className="flex justify-between items-center border-b-[5px] pb-2 border-[#5F9DC1]">
            <h2 className="font-bold text-xl">Voice of change</h2>
            <img src="/icons/right.svg" className="h-4" alt="" />
          </div>
        </Link>
        <div
          className="flex justify-center"
          style={{
            flexWrap: "wrap",
            gap: "20px",
            marginTop: "50px",
          }}
        >
          {[1, 2, 3, 4].map((item) => (
            <AllCard />
          ))}
        </div>
        <Link href='/allbroadcast/thebigidea'>
          <div id='thebigidea' className="flex justify-between items-center border-b-[5px] pb-2 border-[#05B4A2]">
            <h2 className="font-bold text-xl">The Big Idea</h2>
          </div>
        </Link>
        <div
          className="flex justify-center"
          style={{
            gap: "20px",
            marginTop: "50px",
            flexWrap: "wrap",
          }}
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



