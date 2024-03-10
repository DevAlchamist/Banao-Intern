import Image from "next/image";
import React from "react";
import Img4 from "@/assets/Group 99.png";

const Hobby = () => {
  return (
    <div
      style={{ height: "622px" }}
      className="d-flex flex-column justify-content-around align-items-center"
    >
      <div className="" style={{width:"1240px" ,height: "130px" }}>
        <div className="fs-1 fst-italic fw-semibold">
          Your {" "}<span style={{color:"#8064A2"}}>Hobby</span>, Your {" "}
          <span style={{color:"#0096C8"}}>Community...</span>
        </div>
        <button
          className="fw-semibold border-0 mt-4 p-2 rounded"
          style={{ backgroundColor: "#8064A2", color: "#ffffff" }}
        >
          Get Started
        </button>
      </div>
      <Image src={Img4} height={302} alt="img4" />
    </div>
  );
};

export default Hobby;
