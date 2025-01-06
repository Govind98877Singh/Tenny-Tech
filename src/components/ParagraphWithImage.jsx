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
    <div ref={sectionRef} className="py-16 px-8 bg-gray-50">
      {/* Left Text Section (Paragraph) */}
      <div className="space-y-6 mb-8">
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

      {/* Blue Container with Text and Image (Parallel with Paragraph)
      <div className="bg-blue-600 text-white p-6 rounded-lg flex items-center justify-between mb-8">
        {/* Left side Text */}
        {/* <div className="text-lg font-semibold w-3/5">
          <p>Artificial Intelligence (AI)</p>
          <p>Salesforce Cloud</p>
          <p>Design Thinking</p>
          <p>Web Development</p>
          <p>IT Development</p>
        </div> */}

        {/* Right side Image */}
        {/* <div className="w-2/5 flex justify-center items-center">
          <img src="ai4.png" alt="AI" className="w-24 h-24 object-cover rounded-full" />
        </div>
      </div> */} 
    </div>
  );
}

export default ParagraphWithImage;



