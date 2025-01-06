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
      className="bg-white py-16 px-8 flex flex-col items-center justify-center"
    >
      {/* Heading Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#B2C6E2]">
          Why Choose Us?
        </h2>
        <p className="text-lg md:text-xl text-[#B2C6E2]mt-4">
          Partner with us for cutting-edge solutions tailored for success.
        </p>
      </div>

      {/* Stats Section */}
      <div className="flex flex-wrap justify-center items-center space-x-8">
        {[
          { number: "5+", label: "Years of Experience" },
          { number: "80%", label: "Increase in Efficiency" },
          { number: "90%", label: "Client Satisfaction Rate" },
          { number: "120+", label: "Projects Completed" },
        ].map((stat, index) => (
          <div
            key={index}
            ref={(el) => (statsRef.current[index] = el)}
            className="flex flex-col items-center mb-8"
          >
            <h3 className="text-6xl font-bold  text-[#B2C6E2]">{stat.number}</h3>
            <p className="text-gray-700 mt-2 text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsSection;
