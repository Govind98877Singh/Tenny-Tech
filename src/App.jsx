import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FooterCom from "./components/FooterCom";
import ScrollToTop from "./components/ScrollToTop";
import LandingPage from "./components/LandingPage";
import AboutUs from "./components/AboutUs";
import SignUp from "./components/SignUp";
import Services from "./components/Services";
import BookAservice from "./components/BookAservice";
import ConfirmBooking from "./components/ConfirmBooking";
import ToBookService from "./components/ToBookService";
import SalesforceDescription from "./components/SalesforceDescription";
import Aidescription from "./components/Aidescription";
import DesignThinkingDescription from "./components/DesignThinkingDescription";
import TermsAndConditions from "./components/Termsandconditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CancellationPolicy from "./components/CancellationPolicy";
import Blog from "./components/Blog";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Scrolls to the top on route change */}
      <div id="root" className="flex flex-col min-h-screen">
        <Navbar /> {/* Navbar appears on all pages */}
        <div className="main-content flex-grow">
          <Routes>
            {/* Main landing page */}
            <Route path="/" element={<LandingPage />} />

            {/* Service description pages */}
            <Route path="/salesforce-cloud" element={<SalesforceDescription />} />
            <Route path="/ai" element={<Aidescription />} />
            <Route path="/design-thinking" element={<DesignThinkingDescription />} />

            {/* Pages for user actions */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/book-a-service" element={<BookAservice />} />
            <Route path="/confirm-booking" element={<ConfirmBooking />} />
            <Route path="/book-service" element={<ToBookService />} />

            {/* Blog Page */}
            <Route path="/blog" element={<Blog />} />

            {/* Contact Page */}
            <Route path="/contact-form" element={<ContactForm />} />

            {/* Terms and Policies */}
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cancellation-policy" element={<CancellationPolicy />} />

            {/* Catch-all route for undefined paths */}
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </div>
        <FooterCom /> {/* Footer appears on all pages */}
      </div>
    </Router>
  );
}

export default App;
