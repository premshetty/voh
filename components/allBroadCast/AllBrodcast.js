import React from "react";
import Carousel from "./Carousel";
import AllCard from "./VoiceOfChange";
import SeeMore from "../reusalbles/SeeMore";
const AllBrodcasr = () => {
  return (
    <>
      <div style={{ padding: "30px" }}>
        <div style={{ marginTop: "100px" }}>
          <Carousel />
        </div>
        <div className="flex justify-between items-center border-b-[5px] pb-2 border-[#5F9DC1]">
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
        <div className="flex justify-between items-center border-b-[5px] pb-2 border-[#5F9DC1]">
          <h2 className="font-bold text-xl">Voice of change</h2>
          <img src="/icons/right.svg" className="h-4" alt="" />
        </div>
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

        <div className="flex justify-between items-center border-b-[5px] pb-2 border-[#05B4A2]">
          <h2 className="font-bold text-xl">The Big Idea</h2>
        </div>
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
      {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<Daily Broadcast>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <div>
        <img src="/allbroadcast/dailyBoadcast.png" alt="" />
        <div>
          <div className="flex justify-between items-center border-b-[5px] pb-2 border-[#5F9DC1]">
            <h2 className="font-bold text-xl">Daily Broadcast</h2>
          </div>
          <div>
            <h4>
              Care is changing, and it is time to take a fresh look at the
              ecosystem infrastructure that sustains and powers it. Voice of
              Healthcare brings together leading figures to initiate much-needed
              dialogues and expedient disruptions to achieve that goal.
            </h4>
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
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <img
                src="/allbroadcast/cardIBroad1.png"
                style={{ width: "265px" }}
              />
            ))}
          </div>
          <SeeMore bg="#5F9DC1" />
        </div>
      </div>
      {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Voice of Change>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <div>
        <img src="/allbroadcast/dailyBoadcast.png" alt="" />
        <div>
          <div className="flex justify-between items-center border-b-[5px] pb-2 border-[#AD565B]">
            <h2 className="font-bold text-xl">Voice of Change</h2>
          </div>
          <div>
            <h4>
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
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <AllCard />
            ))}
          </div>
          <SeeMore bg="#AD565B" />
        </div>
      </div>
      {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<The Big Idea>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <div>
        <img src="/allbroadcast/dailyBoadcast.png" alt="" />
        <div>
          <div className="flex justify-between items-center border-b-[5px] pb-2 border-[#05B4A2]">
            <h2 className="font-bold text-xl">The Big Idea</h2>
          </div>
          <div>
            <h4>
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
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
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
  );
};

export default AllBrodcasr;
