import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false); // Dropdown visibility
  const location = useLocation(); // To get the current URL path

  const isActive = (path) => location.pathname === path; // Check active link

  return (
    <nav
      className="bg-[#B2C6E2] text-white shadow-lg flex fixed top-0 left-0 w-full z-50"
      style={{ height: "80px" }}
    >
      {/* Logo */}
      <div className="flex items-center ml-4">
        <img
          src="/Images/11_files/52d87a-53ccc79ce29d44cda600631-unscreen.gif"
          alt="Logo"
          className="h-20 w-auto md:h-24" // Adjusted logo size
          style={{ maxHeight: "60px" }} // Ensure the logo doesn't stretch the navbar height too much
        />
      </div>

      {/* Main Navigation */}
      <div className="w-full md:w-11/12 mr-16 flex items-center justify-between">
        <div className="container mx-auto px-4 flex items-center justify-between py-2">
          {/* Navigation Links */}
          <div className="bg-slate-300 px-4 py-2 rounded-lg shadow-md hidden md:flex items-center space-x-10">
            <Link
              to="/"
              className={`text-slate-700 px-6 py-3 rounded-md font-medium shadow-sm transition duration-300 ease-in-out whitespace-nowrap ${
                isActive("/")
                  ? "bg-blue-300 text-blue-500"
                  : "hover:bg-[#D5DEF5] hover:text-blue-500"
              }`}
            >
              Home
            </Link>

            <div
              className="relative whitespace-nowrap"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button
                className={`text-slate-700 px-6 py-3 rounded-md font-medium shadow-sm transition duration-300 ease-in-out ${
                  isActive("/our-service")
                    ? "bg-blue-300 text-blue-500"
                    : "hover:bg-[#D5DEF5] hover:text-blue-500"
                }`}
              >
                <Link to="/our-service">Our Service</Link>
              </button>
              {/* Dropdown Menu */}
              {showDropdown && (
                <div
                  className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 w-48 max-h-60 overflow-auto"
                  onMouseEnter={() => setShowDropdown(true)} // Keep dropdown visible when hovering over it
                  onMouseLeave={() => setShowDropdown(false)} // Hide dropdown when mouse leaves it
                >
                  <ul className="py-2">
                    <li>
                      <Link
                        to="/ai"
                        className="block px-6 py-2 text-slate-700 hover:bg-[#D5DEF5] transition duration-300 ease-in-out hover:text-blue-500"
                      >
                        Artificial Intelligence
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/salesforce-cloud"
                        className="block px-6 py-2 text-slate-700 hover:bg-[#D5DEF5] transition duration-300 ease-in-out hover:text-blue-500"
                      >
                        Salesforce
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/design-thinking"
                        className="block px-6 py-2 text-slate-700 hover:bg-[#D5DEF5] transition duration-300 ease-in-out hover:text-blue-500"
                      >
                        Design Thinking
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Itdevelopment"
                        className="block px-6 py-2 text-slate-700 hover:bg-[#D5DEF5] transition duration-300 ease-in-out hover:text-blue-500"
                      >
                        IT Development
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <Link
              to="/about-us"
              className={`text-slate-700 px-6 py-3 rounded-md font-medium shadow-sm transition duration-300 ease-in-out whitespace-nowrap ${
                isActive("/about-us")
                  ? "bg-blue-300 text-blue-500"
                  : "hover:bg-[#D5DEF5] hover:text-blue-500"
              }`}
            >
              About
            </Link>
            <Link
              to="/book-a-service"
              className={`text-slate-700 px-6 py-3 rounded-md font-medium shadow-sm transition duration-300 ease-in-out whitespace-nowrap ${
                isActive("/book-a-service")
                  ? "bg-blue-300 text-blue-500"
                  : "hover:bg-[#D5DEF5] hover:text-blue-500"
              }`}
            >
              Book a Service
            </Link>
            <Link
              to="/blog"
              className={`text-slate-700 px-6 py-3 rounded-md font-medium shadow-sm transition duration-300 ease-in-out whitespace-nowrap ${
                isActive("/blog")
                  ? "bg-blue-300 text-blue-500"
                  : "hover:bg-[#D5DEF5] hover:text-blue-500"
              }`}
            >
              Blog
            </Link>
            <Link
              to="/ContactForm"
              className={`text-slate-700 px-6 py-3 rounded-md font-medium shadow-sm transition duration-300 ease-in-out whitespace-nowrap ${
                isActive("/ContactForm")
                  ? "bg-blue-300 text-blue-500"
                  : "hover:bg-[#D5DEF5] hover:text-blue-500"
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Login Button */}
          <Link to="/signup">
            <button className="flex items-center bg-[#3E6AA7] text-white px-6 py-3 rounded-lg ml-12 hover:bg-[#D5DEF5] transition duration-300 ease-in-out hover:text-blue-500 whitespace-nowrap">
              <FaUserPlus className="mr-2 text-lg" />
              Log In
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
