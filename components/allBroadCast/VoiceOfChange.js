import React from "react";
const AllCard = () => {
  const ConstantData = [{}];
  return (
    <div
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
    </div>
  );
};

export default AllCard;
