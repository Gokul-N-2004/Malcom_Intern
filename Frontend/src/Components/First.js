import React from "react";
import globe from "../assests/images/Group 449.png";
import { Link } from "react-scroll"; // Import Link from react-scroll

export default function First() {
  return (
    <div className="relative flex flex-col min-h-screen w-screen bg-black font-jet items-center">
      {/* Main Section */}
      <div className="relative w-full mt-16 flex flex-col md:flex-row justify-center items-center">
        {/* Text Section */}
        <div className="relative z-10 w-full md:w-2/3 text-center md:text-left px-8 md:ml-28 mt-[20%] md:mt-0">
          <p className="text-white text-3xl tracking-wider font-jet md:text-5xl">
            Protecting Your
          </p>
          <p className="text-pink-400 text-3xl font-jet mt-5 md:text-5xl md:mt-3">
            Digital Frontier
          </p>
          <div className="mt-3 w-[110%]">
            <p className="text-white mb-10 font-sans tracking-widest md:text-lg mr-[4%]">
              Empowering businesses of all sizes to protect,
              <br />
              <span>detect, and respond to cyber threats.</span>
            </p>
            {/* This should scroll to the section with id="services" */}
            <Link
              to="services" // The ID of the section you want to scroll to
              smooth={true} // Enables smooth scrolling
              duration={800} // Time in ms for scrolling
              className="cursor-pointer"
            >
              <button className="bg-white text-black px-3 py-1 rounded-3xl font-jet mr-[57%] md:rounded-lg">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="absolute inset-0 flex justify-center items-center md:relative md:w-1/4 md:mr-52 md:justify-end mt-[28%] md:mt-0">
          <img
            src={globe}
            className="w-full max-w-screen-sm sm:w-[70%] md:w-full blur-sm md:blur-none"
            alt="globe"
          />
        </div>
      </div>
    </div>
  );
}
