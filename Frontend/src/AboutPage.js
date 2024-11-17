import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <nav className="border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="/" className="block">
                <img
                  src="/malcom-logo.png"
                  alt="Malcom"
                  className="h-8 w-auto"
                />
              </a>
            </div>
            <div className="flex space-x-8">
              <a href="/" className="text-gray-300 hover:text-white">
                Home
              </a>
              <a href="/about" className="text-pink-500 hover:text-pink-400">
                About Us
              </a>
              <a href="/careers" className="text-gray-300 hover:text-white">
                Careers
              </a>
              <a href="/contact" className="text-gray-300 hover:text-white">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center mb-16">About Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-dashed border-gray-500 hover:border-pink-500 transition-colors">
            <h2 className="text-xl text-pink-500 mb-4">Our Story</h2>
            <p className="text-gray-300 leading-relaxed">
              Founded with a vision to build a united and dynamic community of
              penetration testers across the Asia subcontinent, we aim to
              empower companies with top-tier cybersecurity solutions while
              fostering collaboration with skilled hackers. Our startup is built
              on a foundation of agility, innovation, and a forward-thinking
              approach to security.
            </p>
          </div>

          <div className="p-6 border border-dashed border-gray-500 hover:border-pink-500 transition-colors">
            <h2 className="text-xl text-pink-500 mb-4">Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              To establish a connected network of ethical hackers and
              businesses, ensuring security in an increasingly digital world. We
              are committed to providing affordable, scalable security solutions
              that adapt to the unique challenges faced by businesses of all
              sizes.
            </p>
          </div>

          <div className="p-6 border border-dashed border-gray-500 hover:border-pink-500 transition-colors">
            <h2 className="text-xl text-pink-500 mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              To bridge the gap between freelancing penetration testers and
              businesses, offering a platform where security experts can
              collaborate, submit vulnerabilities, and help companies stay ahead
              of cyber threats.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
