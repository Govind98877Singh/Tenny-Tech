import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

function ForgotPassword() {
  const [email, setEmail] = useState(""); // Track user email for forgot password

  const handleForgotPassword = async () => {
    const auth = getAuth();

    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent. Please check your inbox.");
    } catch (error) {
      console.error("Error during password reset:", error);
      alert("Failed to send password reset email. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#B2C6E2]">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full mt-24">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Forgot Password
        </h1>
        <p className="text-center text-gray-700 mb-6">
          Enter your email to reset your password
        </p>

        {/* Email Input */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm hover:shadow-md transition-all duration-300"
          />
        </div>

        {/* Reset Password Button */}
        <button
          onClick={handleForgotPassword}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300 mb-6"
        >
          Reset Password
        </button>

        <p className="text-sm text-center text-gray-500 mt-6">
          A reset link will be sent to your email address. Please check your inbox.
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
