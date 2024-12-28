import React from "react";
import Navbar from "./components/Navbar";
import Video from "./components/Video";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StateSection";
import ParagraphWithImage from "./components/ParagraphWithImage";
import FooterCom from "./components/FooterCom";
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
     <FooterCom />
    </div>
  );

}
export default App;