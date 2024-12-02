import React from "react";

function ChooseUs() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col sm:flex-row justify-center items-center p-4 overflow-hidden">
      {/* Left Text Section */}
      <div className="text-white mt-16 text-4xl sm:text-5xl font-jet text-center sm:text-right sm:ml-4">
        <p>
          Why <br />
          <span className="text-pink-400 text-5xl sm:text-7xl tracking-wide">
            Choose
          </span>
          <br />
          <span>Us</span>
        </p>
      </div>

      {/* Right Text Section */}
      <div className="p-6 max-w-full sm:max-w-3xl sm:mt-0 sm:ml-8">
        <p className="text-xl mt-16 sm:text-2xl md:text-3xl lg:text-4xl text-white text-justify">
          <span className="text-pink-400">Agile, innovative,</span> and{" "}
          <span className="text-pink-400">customer-centric,</span> we provide
          tailored cybersecurity solutions designed to{" "}
          <span className="text-pink-400">protect your business</span> from
          evolving threats. With a flexible{" "}
          <span className="mr-[3%]">
            approach to security, we offer scalable, affordable{" "}
          </span>
          services for businesses of all sizes.
        </p>
      </div>
    </div>
  );
}

export default ChooseUs;
