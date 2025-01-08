import React, { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

function LoginWithEmail() {
  const [email, setEmail] = useState(""); // Track user email for forgot password
  const [password, setPassword] = useState(""); // Track user password

  const handleGoogleSignIn = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User signed in:", user);
      alert(`Welcome back, ${user.displayName}!`);
    } catch (error) {
      console.error("Error during sign-in:", error);
      alert("Google sign-in failed. Please try again.");
    }
  };

  const handleLogin = async () => {
    const auth = getAuth();
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#B2C6E2] ">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full mt-24">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Log In
        </h1>
        <p className="text-center text-gray-700 mb-6">
          Not a member yet?{" "}
          <Link
            to="/signup"
            className="text-blue-600 hover:underline hover:text-blue-800 transition duration-300"
          >
            Sign Up
          </Link>
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm hover:shadow-md transition-all duration-300"
          />
        </div>

        {/* Forgot Password */}
        <div className="mb-6 text-right">
          <Link
            to="/forgot-password"
            className="text-blue-500 text-sm hover:underline hover:text-blue-700 transition duration-300"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Log In Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300 mb-6"
        >
          Log In
        </button>

        {/* Divider */}
        <div className="flex items-center mb-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500">or log in with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Log-In Button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center bg-white text-gray-700 border border-gray-300 py-2 px-4 rounded-lg shadow-md hover:bg-gray-50 hover:shadow-xl transition-all duration-300"
        >
          <img
            src="\Images\gogleicon.png"
            alt="Google"
            className="w-6 h-6 mr-3"
          />
          Log in with Google
        </button>

        <p className="text-sm text-center text-gray-500 mt-6">
          Your profile will be set to public automatically when you log in.
          You can change this later in your profile settings.
        </p>
      </div>
    </div>
  );
}

export default LoginWithEmail;
