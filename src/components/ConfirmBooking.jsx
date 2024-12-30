import React from "react";

function ConfirmBooking() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10 mt-10">
      <div className="w-[70rem] bg-white rounded-lg shadow-lg p-6">
        {/* Back Button */}
        <div className="mb-4">
          <button className="text-blue-600 font-medium hover:underline flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0-010-1.414l4-4a1 1 0 011.414 1.414L4.414 10H17a1 1 0 110 2H4.414l3.293 3.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back
          </button>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row">
          {/* Client Details Form */}
          <div className="flex-grow pr-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Client Details
            </h2>
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                Tell us a bit about yourself
              </p>
              <p className="text-sm text-blue-600 mt-1 hover:underline cursor-pointer">
                Already have an account? Log In for faster booking.
              </p>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Company Description
                </label>
                <textarea
                  rows="3"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                />
                <p className="text-sm text-gray-500 text-right mt-1">0/100</p>
              </div>
            </form>
          </div>

          {/* Booking Details Section */}
          <div className="w-full md:w-1/3 bg-gray-100 rounded-lg shadow-md p-4 mt-6 md:mt-0">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Booking Details
            </h2>
            <p className="text-sm text-gray-700 mb-2">
              <strong>AI Consultancy - 1 hour</strong>
            </p>
            <p className="text-sm text-gray-700">
              December 31, 2024 at 11:15 am
            </p>
            <div className="flex items-center mt-2">
              <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
                Available Online
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-700">
              Sahibzada Ajit Singh Nagar <br />
              <strong>ANISHA SINGLA</strong> <br />
              1 hr
            </p>
            <hr className="my-4 border-gray-300" />
            <h3 className="text-md font-semibold text-gray-800">Payment Details</h3>
            <p className="text-sm text-gray-700 mt-2">Total</p>
            <p className="text-lg font-bold text-gray-800">₹2,100</p>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700">
              Book Now
            </button>
            <p className="text-xs text-gray-600 mt-2">
              By completing your booking, you agree to receive related SMS
              notifications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmBooking;
