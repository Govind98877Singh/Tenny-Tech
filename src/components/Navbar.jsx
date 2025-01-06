import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown visibility

  return (
    <nav className="bg-[#B2C6E2] text-white shadow-lg flex fixed top-0 left-0 w-full z-50">
      {/* Sidebar Placeholder */}
      <div className="hidden md:block ml-3">
        <div className="flex justify-center items-center h-full  ">
          <img
            src="Images/11_files/52d87a-53ccc79ce29d44cda600631-unscreen.gif"
            alt="Logo"
            className="h-24 w-auto"
          />
        </div>
      </div>

      {/* Main Navigation */}
      <div className="w-full md:w-11/12 mr-32 mt-2">
        <div className="container mx-auto px-4 flex items-center justify-between py-2">
          {/* Navigation Box for Desktop */}
          <div className="bg-slate-300 px-4 py-2 rounded-lg shadow-md hidden md:flex items-center space-x-16">
            <Link
              to="/Home-page"
              className="text-slate-700 bg-blue-300 px-8 py-3 rounded-md font-medium shadow-sm transition duration-300 ease-in-out hover:bg-[#D5DEF5] hover:text-blue-500"
            >
              Home
            </Link>

            {/* Dropdown for "Our Service" */}
            <div
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button className="text-slate-700 px-6 py-2 hover:bg-[#D5DEF5] transition duration-300 ease-in-out hover:text-blue-500">
                Our Service
              </button>
              {showDropdown && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 w-full">
                  <ul className="py-2">
                    <li>
                      <Link
                        to="/ai"
                        className="block px-6 py-2 text-slate-700 hover:bg-[#D5DEF5] transition duration-300 ease-in-out hover:text-blue-500 "
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
                  </ul>
                </div>
              )}
            </div>

            <Link
              to="/about-us"
              className="text-slate-700 px-6 py-2 hover:bg-[#D5DEF5] transition duration-300 ease-in-out hover:text-blue-500"
            >
              About
            </Link>
            <Link
              to="/book-a-service"
              className="text-slate-700 px-6 py-2 hover:bg-[#D5DEF5] transition duration-300 ease-in-out hover:text-blue-500"
            >
              Book a Service
            </Link>
            {/* Blog link */}
            <Link
              to="/blog"
              className="text-slate-700 px-6 py-2 hover:bg-[#D5DEF5] transition duration-300 ease-in-out hover:text-blue-500"
            >
              Blog
            </Link>
            <Link
              to="/ContactForm"
              className="text-slate-700 px-6 py-2 hover:bg-[#D5DEF5] transition duration-300 ease-in-out hover:text-blue-500"
            >
              Contact Us
            </Link>
          </div>

          {/* Login Button */}
          <Link to="/signup">
            <button className="flex items-center bg-gradient-to-r from-blue-500 via-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:bg-[#D5DEF5] transition duration-300 ease-in-out hover:text-blue-500">
              <FaUserPlus className="mr-2 text-lg" /> {/* Icon added here */}
              Log In
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
