function Navbar() {
  return (
    <nav className="bg-[#B2C6E2] text-white shadow-lg flex fixed top-0 left-0 w-full z-50">
      {/* Sidebar Placeholder */}
      <div className="hidden md:block ml-16">
        <div className="flex justify-center items-center h-full">
          <img
            src="Images/base_logo_transparent_background.png"
            alt="Logo"
            className="h-16 w-auto"
          />
        </div>
      </div>

      {/* Main Navigation */}
      <div className="w-full md:w-11/12 mr-32">
        <div className="container mx-auto px-4 flex items-center justify-between py-2">
          {/* Navigation Box for Desktop */}
          <div className="bg-slate-300 px-4 py-2 rounded-lg shadow-md hidden md:flex items-center space-x-16">
            <a
              href="#home"
              className="text-slate-700 bg-blue-300 px-8 py-3 rounded-md font-medium shadow-sm transition duration-300 ease-in-out hover:bg-[#D5DEF5] hover:text-blue-500"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-slate-700 px-6 py-2 hover:bg-[#D5DEF5] transition duration-300 ease-in-out hover:text-blue-500"
            >
              Our Service
            </a>
            <a
              href="#about"
              className="text-slate-700 px-6 py-2 hover:bg-[#D5DEF5] transition duration-300 ease-in-out hover:text-blue-500"
            >
              About
            </a>
            <a
              href="#booking"
              className="text-slate-700 px-6 py-2 hover:bg-[#D5DEF5] transition duration-300 ease-in-out hover:text-blue-500"
            >
              Book a Service
            </a>
            <a
              href="#blog"
              className="text-slate-700 px-6 py-2 hover:bg-[#D5DEF5] transition duration-300 ease-in-out hover:text-blue-500"
            >
              Blog
            </a>
            <a
              href="#reviews"
              className="text-slate-700 px-6 py-2 hover:bg-[#D5DEF5] transition duration-300 ease-in-out hover:text-blue-500"
            >
              Reviews
            </a>
          </div>

          {/* Login Button */}
          <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-[#D5DEF5] transition duration-300 ease-in-out hover:text-blue-500">
            Log In
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden bg-white shadow-lg">
          <ul className="space-y-4 p-4">
            <li className="text-slate-700 bg-blue-300 px-6 py-2 rounded-md font-medium shadow-sm transition duration-300 ease-in-out hover:bg-[#D5DEF5] hover:text-blue-500">
              Home
            </li>
            <li className="text-slate-700 hover:bg-[#D5DEF5] transition duration-300 ease-in-out hover:text-blue-500">
              Our Service
            </li>
            <li className="text-slate-700 hover:bg-[#D5DEF5] transition duration-300 ease-in-out hover:text-blue-500">
              About
            </li>
            <li className="text-slate-700 hover:bg-[#D5DEF5] transition duration-300 ease-in-out hover:text-blue-500">
              Book a Service
            </li>
            <li className="text-slate-700 hover:bg-[#D5DEF5] transition duration-300 ease-in-out hover:text-blue-500">
              Blog
            </li>
            <li className="text-slate-700 hover:bg-[#D5DEF5] transition duration-300 ease-in-out hover:text-blue-500">
              Reviews
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
