import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { AiFillInstagram } from "react-icons/ai";

function HighlightBlog() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [showLoginPopup, setShowLoginPopup] = useState(false); // State to control popup visibility

  const navigate = useNavigate(); // Initialize navigate

  const handleCommentClick = () => {
    if (!isLoggedIn) {
      setShowLoginPopup(true); // Show login popup if not logged in
    } else {
      console.log("User can comment"); // Logic for commenting if logged in
    }
  };

  const handleLoginRedirect = () => {
    setShowLoginPopup(false); // Close popup
    navigate("/login"); // Navigate to the LogIn component
  };

  const closePopup = () => {
    setShowLoginPopup(false); // Close the popup
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 mt-20">
      {/* Header */}
      <header className="mb-6">
        <p className="text-lg text-blue-600 font-semibold underline pl-56">
          All Posts
        </p>
      </header>

      {/* Blog Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {/* Blog Header */}
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-lg font-bold text-white">
            A
          </div>
          <div className="ml-4">
            <p className="font-medium text-gray-800">Anisha Singla</p>
            <p className="text-sm text-gray-500">7 days ago · 0 min read</p>
          </div>
          <button className="ml-auto text-gray-400 hover:text-gray-600">...</button>
        </div>

        {/* Blog Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Highlights of AI in 2024!
        </h1>

        {/* Blog Image */}
        <video className="w-full h-full object-cover" controls autoPlay muted>
            <source
              src="Images\AI-images\AdobeStock_924701473_Video_HD_Preview.mov"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

        {/* Blog Actions */}
        <div className="flex justify-between items-center text-xl mb-4 mt-4">
          <div className="flex gap-4 text-blue-600">
            <a href="https://www.facebook.com">
              <button className="hover:text-blue-800">
                <i className="fab fa-facebook-f"></i>
              </button>
            </a>
            <a href="">
              <button className="hover:text-blue-800">
                <i className="fab fa-twitter"></i>
              </button>
            </a>
            <a href="https://www.linkedin.com/company/teenytechtrek/">
              <button className="hover:text-blue-800">
                <i className="fab fa-linkedin-in"></i>
              </button>
            </a>
            <a href="https://www.instagram.com/teenytechtrek/">
              <button className="hover:text-blue-800 ">
                <AiFillInstagram  className="text-[25px]" />
              </button>
            </a>
          </div>
          <div className="text-gray-600">
            <span>7 views · 0 comments</span>
          </div>
          <button className="text-red-500 text-lg hover:text-red-700 transition-transform">
            ❤
          </button>
        </div>

        {/* Comments Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Comments</h3>
          <textarea
            onClick={handleCommentClick}
            className="w-full bg-gray-100 rounded-lg p-3 text-sm text-gray-700 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Write a comment..."
            rows="3"
            readOnly={!isLoggedIn} // Make textarea readonly if not logged in
          ></textarea>
        </div>
      </div>

      {/* Login Popup */}
      {showLoginPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Log In</h2>
            <p className="text-sm text-gray-500 mb-6">
              You need to log in to comment.
            </p>
            <button
              onClick={handleLoginRedirect} // Redirect to login
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Log In
            </button>
            <button
              onClick={closePopup}
              className="mt-4 w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HighlightBlog;
