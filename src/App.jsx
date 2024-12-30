import React from "react";
import Navbar from "./components/Navbar";
import Video from "./components/Video";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StateSection";
import ParagraphWithImage from "./components/ParagraphWithImage";
import FooterCom from "./components/FooterCom";
import AboutUs from "./components/AboutUs";
import BookAservice from "./components/BookAservice";
import ToBookService from "./components/ToBookService";
import ConfirmBooking from "./components/ConfirmBooking";

function App() {
  return (
    <div className="flex flex-col">
      {/* Navbar Section */}
      <Navbar />

      {/* Video Section */}
      {/* <Video />

      <HeroSection></HeroSection>
      <ParagraphWithImage />
      <StatsSection /> */}
      {/* <AboutUs /> */}
      {/* <BookAservice /> */}
       {/* <ToBookService /> */}
       <ConfirmBooking />
      <FooterCom />
    </div>
  );
}
export default App;
