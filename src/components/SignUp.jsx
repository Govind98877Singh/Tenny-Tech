import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Link } from "react-router-dom"; // Import Link from React Router

// Firebase configuration (Replace with your config)
const firebaseConfig = {
  apiKey: "AIzaSyCutzagh55LQuyyO3Or4W7GVHI3fJ-KSpM",
  authDomain: "tenny-tech.firebaseapp.com",
  projectId: "tenny-tech",
  storageBucket: "tenny-tech.firebasestorage.app",
  messagingSenderId: "616591734727",
  appId: "1:616591734727:web:6fedd3c6f5ed33d1c90be2",
  measurementId: "G-JC33VBTTWR"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Auth and Google Auth Provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const SignUp = () => {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User signed in:", user);
      alert(`Welcome, ${user.displayName}!`);
    } catch (error) {
      console.error("Error during sign-in:", error);
      alert("Sign-in failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#B2C6E2]">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 transition duration-300 ease-in-out transform hover:text-blue-600">
          Create Your Account
        </h1>

        <p className="mt-2 text-sm text-center text-gray-500">
          Already a member?{" "}
          <Link
            to="/login"
            className="text-blue-600 hover:underline font-medium transition duration-300 ease-in-out hover:text-blue-800"
          >
            Log In
          </Link>
        </p>

        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center w-full px-4 py-4 mt-8 text-white bg-red-600 rounded-lg shadow-md transform transition-all duration-300 hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 hover:scale-105 hover:shadow-xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-3" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.18 0 6.02 1.1 8.29 2.93l6.17-6.17C34.22 3.25 29.37 1.5 24 1.5c-9.16 0-16.87 5.34-20.5 13.09l7.65 5.95C12.92 14.12 17.07 9.5 24 9.5z" />
            <path fill="#34A853" d="M46.37 24c0-1.51-.13-2.97-.36-4.38H24v8.37h12.71c-.55 2.95-2.14 5.44-4.54 7.13v5.89h7.34C43.78 36.58 46.37 30.64 46.37 24z" />
            <path fill="#4A90E2" d="M7.65 19.46l-7.65-5.95C1.92 20.44 1.5 22.19 1.5 24c0 1.85.37 3.66 1.02 5.39l7.52-5.93c-.26-.79-.44-1.64-.44-2.54 0-.79.13-1.57.36-2.3l-7.65-5.95z" />
          </svg>
          Continue with Google
        </button>

       
        <div className="flex items-center justify-center my-6">
          <div className="w-1/4 h-px bg-gray-300"></div>
          <p className="mx-2 text-sm text-gray-400">or</p>
          <div className="w-1/4 h-px bg-gray-300"></div>
        </div>

        <Link
          to="/signup/email"
          className="flex items-center justify-center w-full px-4 py-3 text-blue-600 border border-blue-600 rounded-lg transform transition-all duration-300 hover:bg-blue-50 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring focus:ring-blue-300"
        >
          Sign up with Email
        </Link>

        <p className="mt-6 text-xs text-center text-gray-400">
          By signing up, you agree to our{" "}
          <Link
            to="/terms-and-conditions"
            className="text-blue-600 hover:underline transition duration-300 ease-in-out hover:text-blue-800"
          >
            Terms
          </Link>{" "}
          and{" "}
          <Link
            to="/privacy-policy"
            className="text-blue-600 hover:underline transition duration-300 ease-in-out hover:text-blue-800"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;






