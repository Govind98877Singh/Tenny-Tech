import React, { useState } from "react";

function ToBookService({data}) {
  const [selectedDate, setSelectedDate] = useState(null); // State for selected date
  const [selectedTime, setSelectedTime] = useState(null); // State for selected time

  // Example time slots
  const timeSlots = ["10:00 am", "11:15 am", "12:30 pm", "1:45 pm", "3:00 pm", "4:15 pm"];

  // Generate days dynamically for demonstration (December 2024)
  const daysInMonth = 31; // Number of days in the current month
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Handler for selecting a date
  const handleDateClick = (day) => {
    setSelectedDate(`December ${day}, 2024`);
    setSelectedTime(null); // Reset selected time when a new date is chosen
  };

  // Handler for selecting a time slot
  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 justify-center mt-10">
      {/* Back Button */}
      <div className="w-full max-w-4xl mb-4">
        <button className="text-blue-600 font-medium hover:underline flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
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
      </div>

      {/* Content Container */}
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg">
        {/* Header Section */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-center text-2xl font-semibold text-gray-800">
            AI Consultancy - 1 hour
          </h2>
          <p className="text-center text-sm text-gray-600 mt-1">
            Check out our availability and book the date and time that works for you
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row bg-blue-100 p-6">
          {/* Calendar Section */}
          <div className="flex-grow md:pr-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-800">
                Select a Date and Time
              </h3>
              <span className="text-sm text-gray-500">
                India Standard Time (GMT+5:30)
              </span>
            </div>

            {/* Calendar */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex justify-between items-center mb-4">
                <button className="text-gray-500 hover:text-blue-600">
                  &lt; {/* Previous Month */}
                </button>
                <span className="text-sm font-medium text-gray-800">
                  December 2024
                </span>
                <button className="text-gray-500 hover:text-blue-600">
                  &gt; {/* Next Month */}
                </button>
              </div>
              <div className="grid grid-cols-7 text-center text-sm">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="font-medium text-gray-600">
                    {day}
                  </div>
                ))}
                {/* Render Days */}
                {days.map((day) => (
                  <button
                    key={day}
                    onClick={() => handleDateClick(day)}
                    className={`py-2 px-3 mt-1 rounded-md ${
                      selectedDate === `December ${day}, 2024`
                        ? "bg-blue-600 text-white"
                        : "text-gray-800 hover:bg-blue-200"
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slots Section */}
            {selectedDate && (
              <div className="mt-6">
                <h4 className="text-md font-medium text-gray-800 mb-4">
                  Available Time Slots for {selectedDate}
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => handleTimeClick(time)}
                      className={`py-2 px-3 rounded-md ${
                        selectedTime === time
                          ? "bg-blue-600 text-white"
                          : "text-gray-800 hover:bg-blue-200"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Selected Date and Time Info */}
            {selectedDate && selectedTime && (
              <div className="mt-4 text-sm text-gray-800">
                <p>
                  Selected Date: <strong>{selectedDate}</strong>
                </p>
                <p>
                  Selected Time: <strong>{selectedTime}</strong>
                </p>
                <p>
                  Charge: <strong>2,100</strong>
                </p>
                {/* <p>
                  Charge: <strong>{data.price}</strong>
                </p> */}
                <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700">
                  Confirm Booking for {selectedDate} at {selectedTime}
                </button>
              </div>
            )}
          </div>

          {/* Service Details Section */}
          {/* <div className="w-full md:w-1/3 bg-blue-200 rounded-lg shadow-md p-4 mt-6 md:mt-0">
            <h3 className="text-lg font-medium text-gray-800">Service Details</h3>
            <div className="flex items-center mt-2">
              <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-sm">
                Available Online
              </span>
            </div>
            <p className="mt-4 text-gray-800">AI Consultancy - 1 hour</p>
            <p className="text-gray-600">₹2,100</p>
            <hr className="border-t border-gray-300 my-4" />
            <button className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700">
              Next
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ToBookService;
