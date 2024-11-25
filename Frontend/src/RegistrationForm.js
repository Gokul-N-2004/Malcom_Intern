import React from "react";

function RegistrationForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <nav className="bg-black/90 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold">
            MALCOM
          </a>
          <div className="space-x-6">
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
            <a href="/about" className="hover:text-gray-300">
              About Us
            </a>
            <a href="/careers" className="text-pink-500 hover:text-pink-400">
              Careers
            </a>
            <a href="/contact" className="hover:text-gray-300">
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-mono font-light mb-12">
          <span className="text-pink-500">(Domain)</span> Registration
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full bg-black border border-gray-800 rounded p-3 focus:outline-none focus:border-pink-500 transition-colors font-mono font-light placeholder-gray-500"
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Mail ID"
              className="w-full bg-black border border-gray-800 rounded p-3 focus:outline-none focus:border-pink-500 transition-colors font-mono font-light placeholder-gray-500"
              required
            />
          </div>

          <div>
            <input
              type="date"
              name="dob"
              placeholder="DOB"
              className="w-full bg-black border border-gray-800 rounded p-3 focus:outline-none focus:border-pink-500 transition-colors text-gray-400 font-mono font-light placeholder-gray-500"
              required
            />
          </div>

          <div>
            <input
              type="text"
              name="skills"
              placeholder="Known Skills"
              className="w-full bg-black border border-gray-800 rounded p-3 focus:outline-none focus:border-pink-500 transition-colors font-mono font-light placeholder-gray-500"
              required
            />
          </div>

          <div>
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              className="w-full bg-black border border-gray-800 rounded p-3 focus:outline-none focus:border-pink-500 transition-colors font-mono font-light placeholder-gray-500"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-white text-black px-8 py-2 rounded hover:bg-gray-200 transition-colors font-medium"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default RegistrationForm;
