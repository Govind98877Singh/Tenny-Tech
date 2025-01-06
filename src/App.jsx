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
import OurSevices from "./components/OurServices";
import TermsAndConditions from "./components/Termsandconditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CancellationPolicy from "./components/CancellationPolicy";
import SignUpWithEmail from "./components/SignUpWithEmail";
import LogIn from "./components/Login";

function App() {
  return (
    <Router>
      {/* <LogIn/> */}
      {/* <SignUpWithEmail /> */}
      {/* <SignUp /> */}
      <ScrollToTop /> {/* Scroll reset on route change */}
      <div id="root" className="flex flex-col min-h-screen">
        <Navbar /> {/* Navbar will appear on all pages */}
        <div className="main-content flex-grow">
          <Routes>
            {/* Main landing page */}
            <Route path="*" element={<LandingPage />} />

            {/* Service description pages */}
            <Route
              path="/salesforce-cloud"
              element={<SalesforceDescription />}
            />
            <Route path="/ai" element={<Aidescription />} />
            <Route
              path="/design-thinking"
              element={<DesignThinkingDescription />}
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/Home-page" element={<LandingPage />} />
            <Route path="/book-a-service" element={<BookAservice />} />
            <Route path="/ai" element={<Aidescription />} />
            <Route path="/signup" element={<SignUp />} />    {/* Route for SignUp page */}
            <Route
              path="/salesforce-cloud"
              element={<SalesforceDescription />}
            />
            <Route
              path="/design-thinking"
              element={<DesignThinkingDescription />}
            />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="/cancellation-policy"
              element={<CancellationPolicy />}
            />
            <Route path="/login" element={<LogIn />} />  {/* Default route for LogIn */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signup/email" element={<SignUpWithEmail />} /> 
             {/* Route for SignUp
     
            {/* <Route path="/signup" element={<SignUpWithEmail />} /> */}
          </Routes>
        </div>
        <FooterCom /> {/* Footer will always be at the bottom */}
      </div>
    </Router>
  );
}

export default App;
