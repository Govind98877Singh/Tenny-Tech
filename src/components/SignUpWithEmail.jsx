import React, { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, sendPasswordResetEmail } from "firebase/auth";

function SignUpWithEmail() {
  const [email, setEmail] = useState(""); // Track user email for forgot password

  const handleGoogleSignIn = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User signed in:", user);
      alert(`Welcome, ${user.displayName}!`);
    } catch (error) {
      console.error("Error during sign-in:", error);
      alert("Google sign-in failed. Please try again.");
    }
  };

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
    <div className="flex items-center justify-center min-h-screen bg-[#B2C6E2] ">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full mt-24">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Sign Up
        </h1>
        <p className="text-center text-gray-700 mb-6">
          Already a member?{" "}
          <a
            href="/login"
            className="text-blue-600 hover:underline hover:text-blue-800 transition duration-300"
          >
            Log In
          </a>
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

        {/* Password Input */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm hover:shadow-md transition-all duration-300"
          />
        </div>

        {/* Forgot Password */}
        <div className="mb-6 text-right">
          <button
            onClick={handleForgotPassword}
            className="text-blue-500 text-sm hover:underline hover:text-blue-700 transition duration-300"
          >
            Forgot Password?
          </button>
        </div>

        {/* Sign Up Button */}
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300 mb-6">
          Sign Up
        </button>

        {/* Divider */}
        <div className="flex items-center mb-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500">or sign up with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Sign-Up Button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center bg-white text-gray-700 border border-gray-300 py-2 px-4 rounded-lg shadow-md hover:bg-gray-50 hover:shadow-xl transition-all duration-300"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google"
            className="w-6 h-6 mr-3"
          />
          Sign up with Google
        </button>

        <p className="text-sm text-center text-gray-500 mt-6">
          Your profile will be set to public automatically when you sign up.
          You can change this later in your profile settings.
        </p>
      </div>
    </div>
  );
}

export default SignUpWithEmail;


