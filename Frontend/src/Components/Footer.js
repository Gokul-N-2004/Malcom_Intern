import React from "react";
import final from "../assests/images/logo.png";
import { Link } from "react-scroll"; // Import Link from react-scroll

function Footer() {
  return (
    <div className="w-full bg-black flex flex-col justify-center items-center p-4 overflow-hidden">
      {/* Contact and Newsletter Section */}
      <div className="text-center mt-36">
        <p className="text-3xl md:text-4xl lg:text-3xl font-jet text-pink-400">
          Contact Us
        </p>
        <p className="text-3xl md:text-4xl lg:text-3xl mt-8 font-jet text-pink-400">
          Newsletter
        </p>
      </div>

      {/* Email Input and Subscribe Button */}
      <div className="mt-14 w-full flex flex-col md:flex-row items-center justify-center mr-4">
        <div className="flex w-full md:w-2/3 lg:w-1/3 mb-4 md:mb-0">
          <input
            type="email"
            placeholder="Your Email"
            className="flex-grow rounded-l-lg border-none focus:outline-none font-jet text-lg py-3 pl-4"
          />
          <button className="bg-white text-blue-700 rounded-r-lg w-auto md:px-8">
            Subscribe
          </button>
        </div>
      </div>

      {/* Logo Image */}
      <img
        src={final}
        alt="final"
        className="mt-8 w-[60%] md:w-[40%] lg:w-[30%]"
      />

      {/* Scroll to Top Link */}
      <div className="w-full flex justify-center md:justify-end mt-8">
        <Link
          to="navbar" // ID of your navigation section
          smooth={true} // Enable smooth scrolling
          duration={800} // Time in ms for scrolling
          className="text-white font-jet cursor-pointer text-sm md:text-sm lg:text-sm md:-mt-8 md:mr-10"
        >
          Scroll to Top
        </Link>
      </div>
    </div>
  );
}

export default Footer;
