import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ScrollTrigger Plugin Register
gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
  const textContainerRef = useRef(null);

  useEffect(() => {
    // GSAP animation for all text lines together (smooth & slow)
    gsap.fromTo(
      textContainerRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2, // Increased duration for slow animation
        ease: "power2.out", // Smooth easing effect
        scrollTrigger: {
          trigger: textContainerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-50 min-h-screen px-8">
      {/* Text Section */}
      <div
        className="text-left md:w-1/2 space-y-4"
        ref={textContainerRef}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-[#152338] leading-snug">
          Where
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold text-[#152338] leading-snug">
          Innovation
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold text text-[#152338] leading-snug">
          Meets
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold text-[#152338] leading-snug">
          Technology:
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold  text-blue-600 leading-snug">
          Pioneering
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold text-blue-600 leading-snug">
          Solutions for a Smarter Tomorrow!
        </h1>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="Images/hero.avif" // Replace with your image path
          alt="AI Illustration"
          className="w-[90%] md:w-[95%] rounded-lg shadow-lg" // Normal styling
        />
      </div>
    </div>
  );
}

export default HeroSection;





