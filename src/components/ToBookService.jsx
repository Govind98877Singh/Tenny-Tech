import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Utility function to get the days of the current month
const getDaysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate(); // Get the number of days in a given month
};

function ToBookService() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [availableTimes, setAvailableTimes] = useState([
    "10:00 am", "11:15 am", "12:30 pm", "1:45 pm", "3:00 pm", "4:15 pm"
  ]);

  // Get the current date and time
  const today = new Date();
  const currentTime = today.getHours() * 60 + today.getMinutes(); // Current time in minutes

  // Function to get days of the month
  const daysInMonth = getDaysInMonth(currentYear, currentMonth + 1);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Function to check if a date is in the past
  const isPastDate = (day) => {
    return (
      currentYear < today.getFullYear() ||
      (currentYear === today.getFullYear() && currentMonth < today.getMonth()) ||
      (currentYear === today.getFullYear() && currentMonth === today.getMonth() && day < today.getDate())
    );
  };

  // Function to check if a time slot has passed
  const isPastTime = (time) => {
    const [hour, minute] = time.split(":");
    const [timeHour, timeMinute] = minute.split(" ");
    let hourIn24 = parseInt(hour);
    if (timeMinute === "pm" && hourIn24 !== 12) hourIn24 += 12;
    if (timeMinute === "am" && hourIn24 === 12) hourIn24 = 0;
    const timeInMinutes = hourIn24 * 60 + parseInt(timeMinute.split(" ")[0]);

    return timeInMinutes < currentTime;
  };

  // Filter time slots to remove the ones that have passed
  useEffect(() => {
    const updatedTimes = availableTimes.filter(time => !isPastTime(time));
    setAvailableTimes(updatedTimes);
  }, [availableTimes, currentTime]);

  // Handle selecting a date
  const handleDateClick = (day) => {
    if (!isPastDate(day)) {
      setSelectedDate(`${currentMonth + 1}/${day}/${currentYear}`);
      setSelectedTime(null); // Reset selected time when a new date is chosen
    }
  };

  // Handle selecting a time slot
  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  // Handle booking confirmation
  const handleBookingConfirmation = () => {
    if (selectedDate && selectedTime) {
      navigate("/confirm-booking", {
        state: { selectedDate, selectedTime }, // Pass selected date and time as state
      });
    } else {
      alert("Please select a date and time to book.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 justify-center mt-10">
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

      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-center text-2xl font-semibold text-gray-800">
            AI Consultancy - 1 hour
          </h2>
          <p className="text-center text-sm text-gray-600 mt-1">
            Check out our availability and book the date and time that works for you
          </p>
        </div>

        <div className="flex flex-col md:flex-row bg-blue-100 p-6">
          <div className="flex-grow md:pr-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-800">
                Select a Date and Time
              </h3>
              <span className="text-sm text-gray-500">
                India Standard Time (GMT+5:30)
              </span>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={() => setCurrentMonth(currentMonth - 1)}
                  className="text-gray-500 hover:text-blue-600"
                >
                  &lt;
                </button>
                <span className="text-sm font-medium text-gray-800">
                  {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}
                </span>
                <button
                  onClick={() => setCurrentMonth(currentMonth + 1)}
                  className="text-gray-500 hover:text-blue-600"
                >
                  &gt;
                </button>
              </div>

              <div className="grid grid-cols-7 text-center text-sm">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="font-medium text-gray-600">
                    {day}
                  </div>
                ))}
                {days.map((day) => (
                  <button
                    key={day}
                    onClick={() => handleDateClick(day)}
                    className={`py-2 px-3 mt-1 rounded-md ${
                      isPastDate(day)
                        ? "text-gray-400 cursor-not-allowed bg-gray-100"
                        : selectedDate === `${currentMonth + 1}/${day}/${currentYear}`
                        ? "bg-blue-600 text-white"
                        : "text-gray-800 hover:bg-blue-200"
                    }`}
                    disabled={isPastDate(day)}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            {selectedDate && (
              <div className="mt-6">
                <h4 className="text-md font-medium text-gray-800 mb-4">
                  Available Time Slots for {selectedDate}
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  {availableTimes.map((time) => (
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

            {selectedDate && selectedTime && (
              <div className="mt-4 text-sm text-gray-800">
                <p>
                  Selected Date: <strong>{selectedDate}</strong>
                </p>
                <p>
                  Selected Time: <strong>{selectedTime}</strong>
                </p>
                <p>
                  Charge: <strong>₹2,100</strong>
                </p>
                <button
                  onClick={handleBookingConfirmation}
                  className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md"
                >
                  Confirm Booking
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToBookService;
