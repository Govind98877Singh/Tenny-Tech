import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function SignUpWithEmail() {
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

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-blue-200 rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-semibold text-center text-gray-900 mb-6">
          Sign Up
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Already a member?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Log In
          </a>
        </p>

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* reCAPTCHA */}
        <div className="mb-6">
          <div className="bg-gray-200 h-16 flex items-center justify-center rounded-lg border">
            <span className="text-sm text-gray-500">I'm not a robot</span>
          </div>
        </div>

        {/* Sign Up Button */}
        <button className="w-full bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-gray-500 transition duration-300 mb-6">
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
          className="w-full flex items-center justify-center bg-white text-gray-700 border border-gray-300 py-2 px-4 rounded-lg hover:shadow-md transition duration-300"
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

