import React from "react";
const AllCard = () => {
  const ConstantData = [{}];
  return (
    <div
      className="relative"
      style={{
        width: "270px",
        height: "380px",
      }}
    >
      <div
        className="absolute w-full"
        style={{
          border: "5px solid #AD565B",

          height: "70%",
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
          className="w-full"
          src="./allbroadcast/pic1st.png"
          style={{
            borderRadius: "30px",
          }}
        />
      </div>
      <div className="absolute" style={{ bottom: "24%" }}>
        <img
          src="./allbroadcast/Path.svg"
          style={{
            left: "3%",
            bottom: "10%",
            width: "70%",
          }}
        />
      </div>
      <div className="absolute" style={{ bottom: "25%", lineHeight: "100%" }}>
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
