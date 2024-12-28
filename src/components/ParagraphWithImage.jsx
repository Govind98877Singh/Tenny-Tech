import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ParagraphWithImage() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col md:flex-row items-center py-16 px-8 bg-gray-50" // Matches the light background
    >
      {/* Left Text Section */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">
          Empower Your Business with Innovation
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Teeny Tech Trek is dedicated to providing innovative technology
          solutions that empower businesses to thrive in the digital age. Our
          team of experts specializes in harnessing cutting-edge tools and
          strategies, including AI, custom software development, and data
          analytics, to optimize operations and drive growth. With a commitment
          to excellence and a focus on client success, we partner with
          organizations to navigate their unique challenges and achieve their
          goals. Join us on a journey of digital transformation and discover how
          we can elevate your business today!
        </p>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <div className="w-full h-64 bg-gray-200 rounded-lg shadow-md">
          {/* Placeholder for Image */}
          <p className="text-center text-gray-500 mt-28">Add your image here</p>
        </div>
      </div>
    </div>
  );
}

export default ParagraphWithImage;
