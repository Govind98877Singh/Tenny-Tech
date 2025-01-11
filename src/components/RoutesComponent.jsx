import React from "react";
import { Routes, Route } from "react-router-dom";
// Update the file paths based on the folder structure
import AboutUs from "./AboutUs";
import SignUp from "./SignUp";
import Services from "./Services";
import BookAservice from "./BookAservice";
import ConfirmBooking from "./ConfirmBooking";
import ToBookService from "./ToBookService";
import SalesforceDescription from "./SalesforceDescription";
import Aidescription from "./Aidescription";
import DesignThinkingDescription from "./DesignThinkingDescription";
import TermsAndConditions from "./Termsandconditions";
import PrivacyPolicy from "./PrivacyPolicy";
import CancellationPolicy from "./CancellationPolicy";
import SignUpWithEmail from "./SignUpWithEmail";
import LogIn from "./Login";
import Blog from "./Blog";
import HighlightBlog from "./HighlightBlog";
import ContactForm from "./ContactForm";
import OurServices from "./OurServices";
import ITDevelopment from "./Itdevelopment";
import ServiceAI from "./ServiceAI";
import LoginWithEmail from "./LoginWithEmail";
import ForgotPassword from "./ForgotPassword";

// If LandingPage is not in components, adjust the path accordingly
import LandingPage from "./LandingPage";

function RoutesComponent() {
  return (
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
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/cancellation-policy" element={<CancellationPolicy />} />
      <Route path="/login" element={<LogIn />} />{" "}
      {/* Default route for LogIn */}
      <Route path="/signup/email" element={<SignUpWithEmail />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/Highlight-Blog" element={<HighlightBlog />} />
      <Route path="/ContactForm" element={<ContactForm />} />
      <Route path="/contactform" element={<ContactForm />} />
      <Route path="/aboutprivacy" element={<PrivacyPolicy />} />
      <Route path="/aboutterms" element={<TermsAndConditions />} />
      <Route path="/our-service" element={<OurServices />} />
      <Route path="/confirm-booking" element={<ConfirmBooking />} />
      <Route path="/to-book-service" element={<ToBookService />} />
      <Route path="/learn-moreAi" element={<Aidescription />} />
      <Route
        path="/learn-more-Design"
        element={<DesignThinkingDescription />}
      />
      <Route path="/learn-more-service" element={<SalesforceDescription />} />
      <Route path="/learn-more-it" element={<ITDevelopment />} />
      <Route path="/Itdeveloment" element={<ITDevelopment />} />
      <Route path="/meeting" element={<BookAservice />} />
      <Route path="/Login-email" element={<LoginWithEmail />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/to-book-a-service" element={<ToBookService />} />
      <Route path="/service-booking" element={<BookAservice />}>
        {" "}
      </Route>
    </Routes>
  );
}

export default RoutesComponent;
