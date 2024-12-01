import React from "react";
import arrow from "../assests/images/Vector 10.png";
import Footer from "./Footer";

function Invest() {
  return (
    <div className=" w-full bg-black flex flex-col justify-center items-center -mt-7 overflow-hidden">
      {/* Title Section */}
      <div className="text-white text-2xl  md:text-5xl font-jet text-center mt-">
        <p className="tracking-wider">Invest in the</p>
        <p className=" tracking-wide md:mt-5 mt-4">
          Future of CyberSecurity
        </p>
      </div>

      {/* Button Section */}
      <div className="flex items-center mt-3 justify-center ml-[59%] md:ml-[40%]">
        <img
          src={arrow}
          alt="arrow"
          className="w-3 h-4 mr-2 -mt-1"
        />
        <p className="text-pink-400 font-jet text-lg md:text-xl">
          Get Started
        </p>
      </div>

    <Footer />
    </div>
  );
}

export default Invest;
