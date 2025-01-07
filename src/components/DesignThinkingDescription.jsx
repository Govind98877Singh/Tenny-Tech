import React from "react";

const DesignThinkingDescription = () => {
  return (
    <div className="container mx-auto p-6 flex flex-col items-center min-h-screen space-y-12 mt-20">
      {/* Card 1: User Research */}
      <div className="bg-[#B2C6E2] rounded-lg p-10 w-full md:w-3/4 lg:w-2/3 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            User Research
          </h2>
          <p className="text-gray-700 mb-4">
            This service involves conducting comprehensive user research using
            various methods such as interviews, surveys, and observational
            studies. The goal is to gather qualitative and quantitative data
            about users' needs, behaviors, preferences, and pain points.
          </p>
          <p className="text-gray-700 font-semibold mb-2">Benefits:</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>Informed Decision-Making:</strong> By understanding user
              motivations and challenges, businesses can make informed decisions
              that align with actual user needs.
            </li>
            <li>
              <strong>Targeted Solutions:</strong> Insights from research help
              in crafting solutions that resonate with the target audience,
              leading to higher satisfaction and engagement.
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="bg-white rounded-lg p-4 shadow-md w-[600px] h-[450px]">
            <img
              src="Images\user.jpg"
              alt="User Research"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

{/* Card 2: Empathy Mapping */}
<div className="bg-[#B2C6E2] rounded-lg p-10 w-full md:w-3/4 lg:w-2/3 flex flex-col md:flex-row-reverse items-center space-y-6 md:space-y-0 md:space-x-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
  <div className="md:w-1/2 px-6"> {/* Added padding to give space between text and image */}
    <h2 className="text-3xl font-bold text-gray-800 mb-4">
      Empathy Mapping
    </h2>
    <p className="text-gray-700 mb-4">
      Empathy mapping is a collaborative visualization technique that helps teams understand users’ experiences and emotions. It typically includes sections for what users say, think, do, and feel.
    </p>
    <p className="text-gray-700 font-semibold mb-2">Benefits:</p>
    <ul className="list-disc list-inside text-gray-700">
      <li>
        <strong>Holistic View of Users:</strong> Empathy maps provide a comprehensive view of the user experience, allowing teams to see beyond just demographic data.
      </li>
      <li>
        <strong>Enhanced Collaboration:</strong> This tool fosters collaboration among team members by aligning everyone on the user’s perspective, leading to more focused ideation.
      </li>
    </ul>
  </div>
  <div className="md:w-1/2 flex justify-center">
    <div className="bg-white rounded-lg p-4 shadow-md w-[600px] h-[450px]">
      <img
        src="Images/empathy-map.jpg"
        alt="Empathy Mapping"
        className="rounded-lg w-full h-full object-contain border-4 border-white"
      />
    </div>
  </div>
</div>


      {/* Card 3: Ideation Sessions */}
      <div className="bg-[#B2C6E2] rounded-lg p-10 w-full md:w-3/4 lg:w-2/3 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ideation Sessions
          </h2>
          <p className="text-gray-700 mb-4">
            Facilitated brainstorming sessions where diverse teams come together
            to generate a wide range of ideas and innovative solutions based on
            insights gathered from user research.
          </p>
          <p className="text-gray-700 font-semibold mb-2">Benefits:</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>Creativity Boost:</strong> Structured ideation encourages
              creative thinking and allows for the exploration of unconventional
              ideas.
            </li>
            <li>
              <strong>Diversity of Thought:</strong> Involving team members from
              different backgrounds fosters a rich pool of ideas, leading to
              more innovative solutions.
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="bg-white rounded-lg p-4 shadow-md w-[600px] h-[450px]">
            <img
              src="Images\idea (1).avif"
              alt="Ideation Sessions"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Card 4: Journey Mapping */}
      <div className="bg-[#B2C6E2] rounded-lg p-10 w-full md:w-3/4 lg:w-2/3 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
        <div className="md:w-1/2 flex justify-center">
          <div className="bg-white rounded-lg p-4 shadow-md w-[600px] h-[450px]">
            <img
              src="Images\journey.png"
              alt="Journey Mapping"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Journey Mapping
          </h2>
          <p className="text-gray-700 mb-4">
            Creating customer journey maps that visualize the entire user
            experience across various touchpoints. This process identifies key
            interactions and moments that matter in the user journey.
          </p>
          <p className="text-gray-700 font-semibold mb-2">Benefits:</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>Insightful Visualization:</strong> Journey maps provide a
              clear visual representation of user experiences, making it easier
              to identify pain points and opportunities for enhancement.
            </li>
            <li>
              <strong>Strategic Focus on Touchpoints:</strong> By understanding
              critical touchpoints, businesses can prioritize improvements that
              significantly impact user satisfaction.
            </li>
          </ul>
        </div>
      </div>

      {/* Card 5: Prototyping */}
      <div className="bg-[#B2C6E2] rounded-lg p-10 w-full md:w-3/4 lg:w-2/3 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Prototyping</h2>
          <p className="text-gray-700 mb-4">
            This service focuses on developing low-fidelity prototypes—simple
            models or mock-ups of concepts that can be quickly created and
            modified based on feedback.
          </p>
          <p className="text-gray-700 font-semibold mb-2">Benefits:</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>Rapid Testing:</strong> Prototypes allow teams to test
              concepts early in the development process, saving time and
              resources.
            </li>
            <li>
              <strong>User Feedback Loop:</strong> Engaging users with
              prototypes provides valuable feedback that can refine ideas before
              full-scale implementation.
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="bg-white rounded-lg p-4 shadow-md w-[600px] h-[450px]">
            <img
              src="Images\prototype.jpg"
              alt="Prototyping"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Card 6: Innovation Frameworks */}
      <div className="bg-[#B2C6E2] rounded-lg p-10 w-full md:w-3/4 lg:w-2/3 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
        <div className="md:w-1/2 flex justify-center">
          <div className="bg-white rounded-lg p-4 shadow-md w-[600px] h-[450px]">
            <img
              src="Images\innovation.avif"
              alt="Innovation Frameworks"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Innovation Frameworks
          </h2>
          <p className="text-gray-700 mb-4">
            Establishing frameworks that empower teams to continuously innovate
            by adapting based on user feedback and market trends.
          </p>
          <p className="text-gray-700 font-semibold mb-2">Benefits:</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>Structured Innovation Process:</strong> Frameworks provide
              a structured approach to innovation, ensuring consistency in how
              new ideas are developed and evaluated.
            </li>
            <li>
              <strong>Adaptability to Change:</strong> Organizations become more
              agile and responsive to changing market dynamics, enhancing their
              competitive edge.
            </li>
          </ul>
        </div>
      </div>

      {/* Card 7: Implementation Support */}
      <div className="bg-[#B2C6E2] rounded-lg p-10 w-full md:w-3/4 lg:w-2/3 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Implementation Support
          </h2>
          <p className="text-gray-700 mb-4">
            Providing guidance on how to integrate design thinking practices
            into existing workflows and processes within the organization for
            sustainable innovation.
          </p>
          <p className="text-gray-700 font-semibold mb-2">Benefits:</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>Seamless Integration:</strong> Implementation support helps
              organizations adopt design thinking with minimal disruption to
              their existing systems and operations.
            </li>
            <li>
              <strong>Long-Term Impact:</strong> Ensuring that design thinking
              becomes ingrained in the company culture, fostering continuous
              improvement and innovation.
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="bg-white rounded-lg p-4 shadow-md w-[600px] h-[450px]">
            <img
              src="Images\support_.avif"
              alt="Implementation Support"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* Card 8: User Testing */}
<div className="bg-[#B2C6E2] rounded-lg p-10 w-full md:w-3/4 lg:w-2/3 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
  <div className="md:w-1/2 flex justify-center">
    <div className="bg-white rounded-lg p-4 shadow-md w-[600px] h-[450px]">
      <img
        src="Images\test1 (1).avif"
        alt="User Testing"
        className="rounded-lg w-full h-full object-cover"
      />
    </div>
  </div>
  <div className="md:w-1/2 px-6"> {/* Added padding to give space between text and image */}
    <h2 className="text-3xl font-bold text-gray-800 mb-4">User Testing</h2>
    <p className="text-gray-700 mb-4">
      Conducting usability testing sessions with real users interacting
      with prototypes or products to gather feedback on functionality,
      design, and overall experience.
    </p>
    <p className="text-gray-700 font-semibold mb-2">Benefits:</p>
    <ul className="list-disc list-inside text-gray-700">
      <li>
        <strong>Identifying Issues Early:</strong> User testing helps
        identify usability issues before launch, reducing the risk of
        costly post-launch fixes.
      </li>
      <li>
        <strong>Iterative Improvement:</strong> Continuous feedback allows
        for iterative refinement of solutions, ensuring they meet user
        expectations effectively.
      </li>
    </ul>
  </div>
</div>

    </div>
  );
};

export default DesignThinkingDescription;



