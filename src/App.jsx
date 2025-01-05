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
import NewsletterForm from "./components/NewsLetterForm";
import ContactForm from "./components/ContactForm";
import Services from "./components/Services";
import LandingPage from "./components/LandingPage";
import SalesforceDescription from "./components/SalesforceDescription";
import SalesforceFeatures from "./components/SalesforceFeautures";
import Aidescription from "./components/Aidescription";
import DesignThinkingDescription from "./components/DesignThinkingDescription";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";



function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Scroll reset on route change */}
      
      <div id="root" className="flex flex-col min-h-screen">
        <Navbar /> {/* Navbar will appear on all pages */}
        
        <div className="main-content flex-grow">
          <Routes>
            {/* Main landing page */}
            <Route path="*" element={<LandingPage />} />
            
            {/* Service description pages */}
            <Route path="/salesforce-cloud" element={<SalesforceDescription />} />
            <Route path="/ai" element={<Aidescription />} />
            <Route path="/design-thinking" element={<DesignThinkingDescription />} />
          </Routes>
        </div>

        <FooterCom /> {/* Footer will always be at the bottom */}
      </div>
    </Router>
  );
}

export default App;