import React, { useState, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

function Blog() {
  // Retrieve the like count from localStorage, defaulting to 0 if not found
  const storedLikes = parseInt(localStorage.getItem("likes"), 10) || 0;

  // State to track if the heart is clicked and like count
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(storedLikes);

  // Toggle like state when heart is clicked
  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    const newLikeCount = isLiked ? likeCount - 1 : likeCount + 1;
    setLikeCount(newLikeCount);
    localStorage.setItem("likes", newLikeCount); // Update the like count in localStorage
  };

  useEffect(() => {
    // Update localStorage with the latest like count whenever it changes
    localStorage.setItem("likes", likeCount);
  }, [likeCount]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#B2C6E2] mx-20 mt-40 mb-20">
      <div className="max-w-[55rem] w-full border overflow-hidden my-10 border-8 border-[#89c2d9]">
        {/* Video Section */}
        <div className="relative h-[60vh] bg-black">
          <video className="w-full h-full object-cover" controls autoPlay muted>
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Post Details Section */}
        <div className="bg-[#3a6ea5] text-white p-6 flex flex-col justify-center items-center h-56 rounded-b-lg shadow-lg">
          {/* Top Row */}
          <div className="flex justify-between items-center mb-4 mt-[-2rem] w-full">
            <p className="text-sm">
              <span>6 days ago</span> • <span>0 min read</span>
            </p>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold max-w-[80%] text-center">
            <a href="#" className="hover:underline text-white">
              Highlights of AI in 2024!
            </a>
          </h2>
        </div>

        {/* Footer Section */}
        <div className="bg-[#3a6ea5] border-t border-white text-white p-4 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="text-sm">{likeCount} views</span>
            <span className="text-sm">0 comments</span>
          </div>

          {/* Like Button */}
          <div onClick={handleLikeClick} className="flex items-center cursor-pointer">
            {isLiked ? (
              <FaHeart className="text-3xl text-red-500" />
            ) : (
              <CiHeart className="text-3xl text-red-500" />
            )}
            <span className="ml-2 text-xl">{likeCount}</span> {/* Display like count */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
