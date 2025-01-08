import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const getFirstDayOfMonth = (year, month) => {
  return new Date(year, month, 1).getDay(); // Get day of the week for the 1st day
};

const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate(); // Get total days in the month
};

const getMonthGrid = (year, month) => {
  const firstDay = getFirstDayOfMonth(year, month); // Get the first day's weekday
  const daysInMonth = getDaysInMonth(year, month);

  // Create an array to represent the grid with days and blank spaces before the first day
  const monthGrid = Array(firstDay).fill(null).concat(
    Array.from({ length: daysInMonth }, (_, i) => i + 1)
  );

  // Pad the array to ensure it has 42 items (6 weeks), for better alignment
  return monthGrid.concat(Array(42 - monthGrid.length).fill(null));
};

function ToBookService() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const serviceData = state?.data; // Extract passed data from state

  if (!serviceData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-600">
          No service selected. Please go back and select a service.
        </p>
      </div>
    );
  }

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [availableTimes] = useState([
    "10:00 am",
    "11:15 am",
    "12:30 pm",
    "1:45 pm",
    "3:00 pm",
    "4:15 pm",
  ]);
  const today = new Date();
  const currentTime = today.getHours() * 60 + today.getMinutes();

  const handleMonthChange = (direction) => {
    if (direction === "prev") {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }
  };

  const isPastDate = (day) => {
    const selectedDate = new Date(currentYear, currentMonth, day);
    const currentISTDate = new Date(
      selectedDate.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
    );

    return (
      currentISTDate < today ||
      (currentISTDate.getDate() === today.getDate() && currentISTDate.getTime() < today.getTime())
    );
  };

  const isWeekend = (day) => {
    const date = new Date(currentYear, currentMonth, day);
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6; // Sunday (0) or Saturday (6)
  };

  const handleDateClick = (day) => {
    if (!isPastDate(day) && !isWeekend(day)) {
      setSelectedDate(`${currentMonth + 1}/${day}/${currentYear}`);
      setSelectedTime(null);
    }
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleBookingConfirmation = () => {
    if (selectedDate && selectedTime) {
      alert(`Booking confirmed for ${serviceData.service} on ${selectedDate} at ${selectedTime}.`);
      navigate("/confirm-booking", { state: { selectedDate, selectedTime } });
    } else {
      alert("Please select a date and time to book.");
    }
  };

  const monthGrid = getMonthGrid(currentYear, currentMonth); // Get the complete grid for the month

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 justify-center mt-16">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-center text-2xl font-semibold text-gray-800">
            {serviceData.service}
          </h2>
          <p className="text-center text-sm text-gray-600 mt-1">
            Duration: {serviceData.time} | Price: {serviceData.price}
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
                  onClick={() => handleMonthChange("prev")}
                  className="text-gray-500 hover:text-blue-600"
                >
                  &lt;
                </button>
                <span className="text-sm font-medium text-gray-800">
                  {new Date(currentYear, currentMonth).toLocaleString(
                    "default",
                    { month: "long" }
                  )}{" "}
                  {currentYear}
                </span>
                <button
                  onClick={() => handleMonthChange("next")}
                  className="text-gray-500 hover:text-blue-600"
                >
                  &gt;
                </button>
              </div>

              <div className="grid grid-cols-7 text-center text-sm">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <div key={day} className="font-medium text-gray-600">
                      {day}
                    </div>
                  )
                )}
                {monthGrid.map((day, index) => (
                  <button
                    key={index}
                    onClick={() => handleDateClick(day)}
                    className={`py-2 px-3 mt-1 rounded-md ${ 
                      isPastDate(day) || isWeekend(day)
                        ? "text-gray-400 cursor-not-allowed bg-gray-100"
                        : selectedDate === `${currentMonth + 1}/${day}/${currentYear}`
                        ? "bg-blue-600 text-white"
                        : "text-gray-800 hover:bg-blue-200"
                    }`}
                    disabled={isPastDate(day) || isWeekend(day)}
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
                      className={`py-2 px-3 rounded-md ${selectedTime === time
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
                  Price: <strong>{serviceData.price}</strong>
                </p>
              </div>
            )}

            <div className="flex justify-start mt-6">
              <button
                onClick={handleBookingConfirmation}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToBookService;
