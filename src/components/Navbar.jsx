function Navbar() {
  return (
    <nav className="bg-[#B2C6E2] text-white shadow-lg flex">
      {/* Sidebar Placeholder (hidden on larger screens) */}
      <div className="w-1/12 bg-sky-300 hidden md:block">
        <div className="flex justify-center items-center h-full text-sky-800 font-bold text-xl">
          Sidebar
        </div>
      </div>

      {/* Main Navigation */}
      <div className="w-full md:w-11/12">
        <div className="container mx-auto px-4 flex items-center justify-between py-4">
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-slate-700 bg-blue-300 px-6 py-2 rounded-md font-medium shadow-sm transition duration-300 ease-in-out hover:bg-[#D5DEF5] hover:text-blue-500"
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
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-[#D5DEF5] transition duration-300 ease-in-out hover:text-blue-500">
            Log in
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






  
  
  
  