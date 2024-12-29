import React from "react";
import Navbar from "./components/Navbar";
import Video from "./components/Video";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StateSection";
import ParagraphWithImage from "./components/ParagraphWithImage";
import FooterCom from "./components/FooterCom";
import NewsletterForm from "./components/NewsLetterForm";
import ContactForm from "./components/ContactForm";
import Services from "./components/Services";
function App() {
  return (
    <div className="flex flex-col">
      {/* Navbar Section */}
      <Navbar />

      {/* Video Section */}
      <Video />

      <HeroSection></HeroSection>
      <ParagraphWithImage />
      <StatsSection />
         <Services/>
      <NewsletterForm/>
      <ContactForm/>
      <FooterCom />
    </div>
  );
}
export default App;
