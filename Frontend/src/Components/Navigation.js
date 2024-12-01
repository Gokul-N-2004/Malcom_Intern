import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo1 from "../assests/images/logo.png";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("half-blurred-background");
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
      document.body.classList.remove("half-blurred-background");
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
      document.body.classList.remove("half-blurred-background");
    };
  }, [menuOpen]);

  const handleNavigation = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <div className="relative">
      <div
        className="flex items-center justify-between bg-darkbrown p-2 overflow-hidden"
        style={{ height: "60px" }}
        id="navbar"
      >
        <img
          src={logo1}
          className="ml-2 w-44 pt-2"
          style={{ maxHeight: "250%" }}
          alt="Logo"
        />
        <div className="md:hidden">
          <button className="text-white text-2xl" onClick={toggleMenu}>
            &#9776;
          </button>
        </div>
        <div className="hidden md:flex">
          <ul className="flex space-x-11 text-white mr-16">
            <li className="cursor-pointer hover:text-pink-400">
              <span
                onClick={() => handleNavigation("/")}
                className="text-white"
              >
                Home
              </span>
            </li>
            <li className="cursor-pointer hover:text-pink-400">
              <span
                onClick={() => handleNavigation("/aboutpage")}
              >
                About Us
              </span>
            </li>
            <li className="cursor-pointer hover:text-pink-400">
              <span
                // onClick={() => handleNavigation("/career")}
              >
                Career
              </span>
            </li>
            <li className="cursor-pointer hover:text-pink-400">
              <span
                // onClick={() => handleNavigation("/contact")}
              >
                Contact Us
              </span>
            </li>
          </ul>
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed top-0 right-0 w-full h-full bg-transparent text-white z-50"
          style={{
            backdropFilter: "blur(3px)",
            transition: "right 0.3s ease-in-out",
          }}
        >
          <ul className="flex flex-col items-end justify-center h-full space-y-2 mr-6 text-2xl text-white font-jet tracking-widest">
            <li
              className="cursor-pointer hover:text-pink-400"
              onClick={() => handleNavigation("/")}
            >
              Home
            </li>
            <li
              className="cursor-pointer hover:text-pink-400"
              onClick={() => handleNavigation("/aboutpage")}
            >
              About Us
            </li>
            <li
              className="cursor-pointer hover:text-pink-400"
              // onClick={() => handleNavigation("/career")}
            >
              Career
            </li>
            <li
              className="cursor-pointer hover:text-pink-400"
              // onClick={() => handleNavigation("/contact")}
            >
              Contact Us
            </li>
          </ul>
        </div>
      )}

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-60 z-20"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
}
