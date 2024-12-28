import React from "react";
import Navbar from "./components/Navbar";
// import OurSevices from "./components/OurServices";
import FooterCom from "./components/FooterCom";

import Video from "./components/Video";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StateSection";
import ParagraphWithImage from "./components/ParagraphWithImage";
function App() {
  return (
    <div className="flex flex-col">
      {/* Navbar Section */}
      <Navbar />


      {/* Video Section */}
      <Video />

      <HeroSection></HeroSection>
      <ParagraphWithImage/>
      <StatsSection/>
    
    </div>
  );

}
export default App;