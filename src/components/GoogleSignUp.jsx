// import React from "react";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// const GoogleSignUp = () => {
//   const auth = getAuth();
//   const provider = new GoogleAuthProvider();

//   const handleGoogleSignIn = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;
//       console.log("User signed in:", user);
//       alert(`Welcome, ${user.displayName}!`);
//     } catch (error) {
//       console.error("Error during sign-in:", error);
//       alert("Sign-in failed. Please try again.");
//     }
//   };

//   return (
//     <button
//       onClick={handleGoogleSignIn}
//       className="flex items-center justify-center w-full px-4 py-4 text-white bg-red-600 rounded-lg shadow-md transform transition-all duration-300 hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 hover:scale-105 hover:shadow-xl"
//     >
//       <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-3" viewBox="0 0 48 48">
//         <path fill="#EA4335" d="M24 9.5c3.18 0 6.02 1.1 8.29 2.93l6.17-6.17C34.22 3.25 29.37 1.5 24 1.5c-9.16 0-16.87 5.34-20.5 13.09l7.65 5.95C12.92 14.12 17.07 9.5 24 9.5z" />
//         <path fill="#34A853" d="M46.37 24c0-1.51-.13-2.97-.36-4.38H24v8.37h12.71c-.55 2.95-2.14 5.44-4.54 7.13v5.89h7.34C43.78 36.58 46.37 30.64 46.37 24z" />
//         <path fill="#4A90E2" d="M7.65 19.46l-7.65-5.95C1.92 20.44 1.5 22.19 1.5 24c0 1.85.37 3.66 1.02 5.39l7.52-5.93c-.26-.79-.44-1.64-.44-2.54 0-.79.13-1.57.36-2.3l-7.65-5.95z" />
//       </svg>
//       Continue with Google
//     </button>
//   );
// };

// export default GoogleSignUp;
