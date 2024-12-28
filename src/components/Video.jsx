import React from "react";

function Video() {
  return (
    <div className="flex-grow bg-gray-100">
      <video
        className="rounded-lg shadow-lg w-full h-screen object-cover"
        playsInline
        controls={false}
        autoPlay
        muted
        loop
      >
        <source
          src="Images/MainPageVideo.mp4" // Adjust the path based on your folder structure
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;



