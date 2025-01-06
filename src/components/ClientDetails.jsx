import React from "react";

function ClientDetails() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-10">
      {/* Container */}
      <div className="max-w-6xl w-full bg-white rounded-lg shadow-lg p-8">
        {/* Back Button */}
        <button className="text-blue-600 font-medium hover:underline flex items-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L4.414 10H17a1 1 0 110 2H4.414l3.293 3.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </button>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Client Details Form */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Client Details
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Tell us a bit about yourself
            </p>

            {/* Form */}
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="company-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company-name"
                    placeholder="Enter company name"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company-description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Company Description
                  </label>
                  <input
                    type="text"
                    id="company-description"
                    placeholder="Enter company description"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700"
              >
                Submit Details
              </button>
            </form>
          </div>

          {/* Booking Details */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Booking Details
            </h2>
            <p className="text-sm text-gray-700 mb-2">
              <strong>AI Consultancy - 1 hour</strong>
            </p>
            <p className="text-sm text-gray-700">
              January 8, 2025 at 11:15 AM
            </p>
            <div className="flex items-center mt-2">
              <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
                Available Online
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-700">
              Sahibzada Ajit Singh Nagar <br />
              <strong>ANISHA SINGLA</strong> <br />1 hr
            </p>
            <hr className="my-4 border-gray-300" />
            <h3 className="text-md font-semibold text-gray-800">
              Payment Details
            </h3>
            <p className="text-sm text-gray-700 mt-2">Total</p>
            <p className="text-lg font-bold text-gray-800">₹2,100</p>

            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientDetails;
