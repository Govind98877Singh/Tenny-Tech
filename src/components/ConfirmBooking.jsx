import React from "react";
import { useLocation } from "react-router-dom";
import ClientDetails from "./ClientDetails"

function ConfirmBooking() {
  const location = useLocation();
  const { selectedDate, selectedTime } = location.state || {}; // Handle undefined state gracefully

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10 mt-20 ">
      <div className="w-[80rem] h-[40rem] bg-white rounded-lg  shadow-lg p-6 flex items-center justify-end">
        
        <div>
          {/* Back Button */}
            <button className="text-blue-600 font-medium hover:underline flex items-center mb-12 mt-[-8rem]">
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

           <ClientDetails/>
        </div>
        <div className="w-full md:w-1/3 bg-gray-100 rounded-lg shadow-md p-4  absolute bottom-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Booking Details
          </h2>
          <p className="text-sm text-gray-700 mb-2">
            <strong>AI Consultancy - 1 hour</strong>
          </p>
          <p className="text-sm text-gray-700">
            {selectedDate && selectedTime
              ? `${selectedDate} at ${selectedTime}`
              : "No date and time selected"}
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
            Confirm Booking
          </button>
          <p className="text-xs text-gray-600 mt-2">
            By completing your booking, you agree to receive related SMS notifications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ConfirmBooking;
