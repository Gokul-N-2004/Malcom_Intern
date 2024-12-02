import React from "react";
import { Link } from "react-router-dom";

function RegistrationForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}

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
