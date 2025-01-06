import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Aidescription = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(headerRef.current.querySelectorAll(".text-line"), {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
    });
  }, []);

  return (
    <div>
      <header
        ref={headerRef}
        className="container mx-auto flex flex-col items-center justify-center py-20 text-center text-4xl font-bold text-gray-800"
      >
        <h1 className="text-line">
          Empowering <span className="text-line">Your</span>
        </h1>
        <h1 className="text-line">
          Business <span className="text-line">with</span>{" "}
          <span className="text-line">Intelligent</span>
        </h1>
        <h1 className="text-line">Solutions.</h1>
      </header>

      <div className="flex justify-center mt-10">
        <img
          src="https://static.wixstatic.com/media/c837a6_4aab6aa50b194e4fb8f23f9cb0e52bb3~mv2.png/v1/fill/w_1000,h_648,al_c,q_90,enc_avif,quality_auto/Rectangle%2059.png"
          alt="Description of Image"
          className="w-full max-w-md h-auto rounded-lg"
        />
      </div>

      <div className="mt-10 flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden max-w-xl mx-auto">
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 flex items-center justify-center bg-gray-800 text-white rounded-full">
              <span className="text-xl font-bold">02</span>
            </div>
            <span className="text-2xl font-semibold text-gray-800">
              Expert Guidance and Implementation
            </span>
          </div>
          <div className="w-full h-0.5 bg-black"></div>
        </div>
        <p className="p-6 text-gray-600">
          Our team of experts provides comprehensive support throughout the AI
          implementation process, from selecting the right technologies to
          developing custom AI models and integrating them seamlessly into
          existing systems.
        </p>
      </div>

      <div className="mt-10 mx-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Data Strategy Development
        </h2>
        <p className="text-gray-600 leading-relaxed">
          We offer data strategy development as an AI service, which can
          significantly enhance business operations by leveraging data-driven
          insights. By implementing tailored data strategies, businesses can
          optimize their decision-making processes, improve operational
          efficiency, and identify new market opportunities. This service
          enables organizations to harness advanced analytics and AI tools to
          transform raw data into actionable intelligence, ultimately driving
          growth and enhancing customer satisfaction. With a focus on innovation
          and client success, Teeny Tech Trek partners with businesses to
          navigate their unique challenges and achieve digital transformation
          effectively.
        </p>
      </div>

      <div className="mt-10 mx-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Predictive Analytics
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Teeny Tech Trek's predictive analytics service utilizes advanced AI
          techniques to help businesses anticipate future trends and make
          informed decisions. By analyzing historical data and identifying
          patterns, companies can forecast outcomes such as customer behavior,
          market demands, and operational performance. This proactive approach
          enables organizations to optimize inventory management, enhance
          marketing strategies, and improve customer engagement, ultimately
          leading to increased efficiency and profitability. With predictive
          analytics, businesses can stay ahead of the competition by making
          data-driven decisions that align with their strategic goals.
        </p>
      </div>

      <div className="mt-10 mx-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Ethical AI Consulting
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Teeny Tech Trek's ethical AI consulting service helps businesses
          navigate the complexities of implementing artificial intelligence
          responsibly. By focusing on ethical considerations, such as fairness,
          transparency, and accountability, this service ensures that AI systems
          are designed and deployed in ways that align with societal values and
          regulatory requirements. Businesses benefit by mitigating risks
          associated with bias and discrimination in AI algorithms, enhancing
          their reputation, and fostering trust among customers and
          stakeholders. This proactive approach not only safeguards against
          potential legal issues but also promotes sustainable practices that
          can lead to long-term success in the digital landscape.
        </p>
      </div>

      <div className="mt-10 mx-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Business Analysis
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Business analysis service leverages AI to provide organizations with
          deep insights into their operations, market trends, and customer
          behaviors. By employing advanced analytical tools, businesses can
          identify inefficiencies, uncover growth opportunities, and make
          data-driven decisions that enhance overall performance. This service
          enables companies to align their strategies with market demands,
          optimize resource allocation, and improve customer satisfaction,
          ultimately driving profitability and competitive advantage in a
          rapidly evolving digital landscape.
        </p>
      </div>

      <div className="mt-10 mx-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          NLP - Natural Language Processing
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Teeny Tech Trek's Natural Language Processing (NLP) service empowers
          businesses by enabling them to analyze and interpret vast amounts of
          textual data effectively. Through NLP, organizations can enhance
          customer interactions by automating responses, extracting insights
          from customer feedback, and improving sentiment analysis. This leads
          to better understanding of customer needs and preferences, allowing
          for more personalized marketing strategies and improved service
          delivery. By integrating NLP into their operations, businesses can
          streamline communication, enhance decision-making processes, and
          ultimately drive growth in a competitive marketplace.
        </p>
      </div>

      <div className="mt-10 mx-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Custom AI Model Development
        </h2>
        <p className="text-gray-600 leading-relaxed">
          AI model development service enables businesses to create tailored AI
          solutions that address their specific needs and challenges. By
          leveraging advanced algorithms and machine learning techniques,
          organizations can develop models that enhance operational efficiency,
          improve decision-making, and drive innovation. This service allows
          businesses to automate processes, personalize customer experiences,
          and gain valuable insights from their data, ultimately leading to
          increased competitiveness and growth in their respective markets.
          Custom AI models ensure that businesses can adapt to changing demands
          and leverage technology effectively for their unique objectives.
        </p>
      </div>
    </div>
  );
};

export default Aidescription;
