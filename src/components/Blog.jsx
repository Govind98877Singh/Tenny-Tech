import React from "react";

function Blog() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#B2C6E2] mx-20  mt-40 mb-20">
      <div className="max-w-[55rem]  w-full border overflow-hidden my-10 border-8 border-[#89c2d9]">
        {/* Video Section */}
        <div className="relative h- bg-black">
          <video
            className="w-full h-full object-cover"
            controls
            autoPlay 
            muted
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Post Details Section */}
        <div className="bg-[#3a6ea5] text-white p-4 flex  flex-col justify-center items-center h-56">
          {/* Top Row */}
          <div className="flex justify-between items-center mb-4 mt-[-5rem]">
            <p className="text-sm">
              <span>6 days ago</span> • <span>0 min read</span>
            </p>
            
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold">
            <a
              href="#"
              className="hover:underline text-white"
            >
              Highlights of AI in 2024!
            </a>
          </h2>
        </div>

        {/* Footer Section */}
        <div className="bg-[#3a6ea5] border-t border-white  text-white p-4 flex justify-between items-center ">
          <div className="flex space-x-4 ">
            <span className="text-sm">5 views</span>
            <span className="text-sm">0 comments</span>
          </div>
          <button className="text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M12 4.248c-3.148-5.402-12-3.735-12 2.944 0 4.418 5.581 7.934 12 13.808 6.418-5.874 12-9.39 12-13.808 0-6.679-8.852-8.346-12-2.944z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
