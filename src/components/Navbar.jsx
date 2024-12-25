function Navbar() {
    return (
      <nav className="bg-slate-700 text-white shadow-lg flex">
        {/* Sidebar Placeholder */}
        <div className="w-1/12 bg-sky-300 hidden md:block">
          <div className="flex justify-center items-center h-full text-sky-800 font-bold text-xl">
            Sidebar
          </div>
        </div>
  
        {/* Main Navigation */}
        <div className="w-full md:w-11/12">
          <div className="container mx-auto px-4 flex items-center justify-between py-2">
            {/* Navigation Box */}
            <div className="bg-slate-300 px-4 py-2 rounded-lg shadow-md hidden md:flex items-center space-x-14">
              <a
                href="#home"
                className="text-slate-700 bg-blue-300 px-4 py-3 rounded-md font-medium shadow-sm transition duration-300 ease-in-out hover:bg-blue-400 hover:text-white"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-slate-700 hover:bg-slate-400 transition duration-300 ease-in-out  "
              >
                Our Service
              </a>
              <a
                href="#about"
                className="text-slate-700 hover:bg-slate-400 transition duration-300 ease-in-out hover:text-white"
              >
                About
              </a>
              <a
                href="#booking"
                className="text-slate-700 hover:bg-slate-400 transition duration-300 ease-in-out hover:text-white"
              >
                Book a Service
              </a>
              <a
                href="#blog"
                className="text-slate-700 hover:bg-slate-400 transition duration-300 ease-in-out hover:text-white"
              >
                Blog
              </a>
              <a
                href="#reviews"
                className="text-slate-700 hover:bg-slate-400 transition duration-300 ease-in-out hover:text-white"
              >
                Reviews
              </a>
            </div>
  
            {/* Login Button */}
            <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-slate-400 transition duration-300 ease-in-out">
              Log in
            </button>
          </div>
  
          {/* Mobile Menu */}
          <div className="md:hidden bg-white shadow-lg">
            <ul className="space-y-4 p-4">
              <li className="text-slate-700 bg-blue-300 px-4 py-3 rounded-md font-medium shadow-sm transition duration-300 ease-in-out hover:bg-blue-400 hover:text-white">
                Home
              </li>
              <li className="text-slate-700 hover:bg-slate-400 transition duration-300 ease-in-out hover:text-white">
                Our Service
              </li>
              <li className="text-slate-700 hover:bg-slate-400 transition duration-300 ease-in-out hover:text-white">
                About
              </li>
              <li className="text-slate-700 hover:bg-slate-400 transition duration-300 ease-in-out hover:text-white">
                Book a Service
              </li>
              <li className="text-slate-700 hover:bg-slate-400 transition duration-300 ease-in-out hover:text-white">
                Blog
              </li>
              <li className="text-slate-700 hover:bg-slate-400 transition duration-300 ease-in-out hover:text-white">
                Reviews
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  
  
  