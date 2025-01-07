import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger Plugin
gsap.registerPlugin(ScrollTrigger);

function StatsSection() {
  const sectionRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    // GSAP animation for the section's overall appearance
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

    // GSAP staggered animation for each stat
    gsap.fromTo(
      statsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
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
      className="bg-white py-16 px-4 flex flex-col items-center justify-center"
    >
      {/* Heading Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937]">
          Why Choose Us?
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mt-4">
          Partner with us for cutting-edge solutions tailored for success.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
        {[
          {
            number: "5+",
            label: "Years of Experience",
            description: "A legacy of excellence in IT services.",
          },
          {
            number: "80%",
            label: "Increase in Efficiency",
            description: "Streamlined operations and improved workflow.",
          },
          {
            number: "90%",
            label: "Client Satisfaction Rate",
            description: "Trusted by businesses across all sectors for superior service.",
          },
          {
            number: "120+",
            label: "Projects Completed",
            description: "Delivering cutting-edge solutions for a seamless digital future.",
          },
        ].map((stat, index) => (
          <div
            key={index}
            ref={(el) => (statsRef.current[index] = el)}
            className="flex flex-col items-center justify-center bg-[#F3F4F6] py-8 px-4 rounded-lg shadow-md"
          >
            <h3 className="text-7xl font-bold text-[#1F2937]">{stat.number}</h3>
            <p className="text-gray-700 mt-2 text-xl text-center">
              {stat.label}
            </p>
            <p className="text-gray-600 mt-2 text-center text-sm md:text-base">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsSection;

