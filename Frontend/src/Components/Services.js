import React from "react";

export default function Services() {
  return (
    <div
      className="bg-black overflow-hidden min-h-screen flex flex-col justify-center items-center px-4"
      id="services"
    >
      {/* Key Services Section */}
      <div className="flex justify-center items-center mt-8 md:-mt-2">
        <p className="text-3xl md:text-4xl tracking-widest text-pink-400 font-jet text-center">
          Key&nbsp;
          <span className="text-white font-jet">Services</span>
        </p>
      </div>

      {/* Crowdsourcing Platform */}
      <div className="mt-5 flex flex-col justify-start items-start border-2 border-dashed border-white py-4 md:py-6 w-full md:w-2/3 px-2 md:px-6">
        <p className="text-xl md:text-2xl text-pink-400 font-jet text-left">
          Crowdsourcing&nbsp;
          <span className="text-white font-jet">Platform</span>
        </p>
        <p className="text-white text-base md:text-lg mt-2 md:mt-4 tracking-widest text-left">
          We act as a bridge between companies and ethical hackers (pentesters).
        </p>
        <p className="text-white text-base md:text-lg tracking-widest text-left">
          Companies can submit their security concerns, and pentesters can
          provide solutions by identifying vulnerabilities in real-world
          environments.
        </p>
      </div>

      {/* Hacker-Friendly Tools */}
      <div className="mt-5 md:mt-8 flex flex-col justify-start items-start border-2 border-dashed border-white py-4 md:py-6 w-full md:w-2/3 px-2 md:px-6">
        <p className="text-xl md:text-2xl text-pink-400 font-jet text-left">
          Hacker-Friendly&nbsp;
          <span className="text-white font-jet">Tools</span>
        </p>
        <p className="text-white text-base md:text-lg mt-2 md:mt-4 tracking-widest text-left">
          Our platform provides a suite of advanced tools based on cutting-edge
          hacking techniques, empowering penetration testers to efficiently
          identify, analyze, and submit security vulnerabilities.
        </p>
      </div>

      {/* Collaboration Platform */}
      <div className="mt-5 md:mt-8 flex flex-col justify-start items-start border-2 border-dashed border-white py-4 md:py-6 w-full md:w-2/3 px-2 md:px-6">
        <p className="text-xl md:text-2xl text-pink-400 font-jet text-left">
          Collaboration&nbsp;
          <span className="text-white font-jet">Platform</span>
        </p>
        <p className="text-white text-base md:text-lg mt-2 md:mt-4 tracking-widest text-left">
          We foster a hacker-friendly environment that encourages transparency
          and collaboration, helping businesses strengthen their defenses while
          rewarding ethical hackers for their contributions.
        </p>
      </div>
    </div>
  );
}
