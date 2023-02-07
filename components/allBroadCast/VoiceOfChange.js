import React from "react";
const AllCard = () => {
  const ConstantData = [{}];
  return (
    <div className="h-[400px] min-w-[200px] w-[300px] border-[#F7F7F7] border-[5px] border-b-0 p-5 relative">
      <div className="h-full w-full border-[#AD565B] border-[5px] rounded-[30px] p-5">
        <img src="/allbroadcast/pic1st.png" className="absolute  w-full object-cover -z-30 top-20 left-0" alt="" />
        <h2 className="text-2xl font-sans font-bold">Transitioning <br /> Era of Healthcare</h2>
        <div className="absolute w-[210px] bottom-0 left-2">
          <img src="/allbroadcast/Path.svg" className="w-full absolute  -z-20" alt="" />
          <h3 className="ml-2  font-sans font-bold text-lg text-white">Dr. Shubham Singh</h3>
          <h5 className="ml-2 font-sans font-bold text-sm text-white">Sr. Vice President</h5>
          <p className="ml-2  font-sans text-xs opacity-80 text-white">Fujiflim India Pet.Ltd.</p>
        </div>
      </div>

    </div>
  );
};

export default AllCard;


{/* <div
  className="relative "
  style={{
    minWidth: "270px",
    height: "430px",
  }}
>
  <div
    className=" w-full p-2 "
    style={{
      border: "5px solid #AD565B",
      height: "80%",
      borderRadius: "30px",
    }}
  >
    <h2 style={{ fontSize: "20px", fontWeight: "700" }}>
      Transitioning
      <br /> Era of Healthcare
    </h2>
  </div>
  <div>
    <img
      className="left-2 top-[80px] -z-10 absolute w-full mx-auto"
      src="/allbroadcast/pic1st.png"

    />
  </div>
  <div className="absolute bottom-[56px]" >
    <img
      src="/allbroadcast/Path.svg"
      className="h-20"
    />
  </div>
  <div className="absolute pl-3 bottom-[56px] text-white" >
    <h4 style={{ fontSize: "18px", fontWeight: "700" }}>
      Dr. Shubham Singh
    </h4>
    <p style={{ fontSize: "14px" }}>Sr. Vice President</p>
    <span style={{ fontSize: "12px" }}>Fujiflim India Pet.Ltd.</span>
  </div>
</div> */}