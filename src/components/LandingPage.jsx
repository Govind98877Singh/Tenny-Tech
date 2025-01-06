import React from 'react'
import Video from './Video'
import HeroSection from './HeroSection'
import ParagraphWithImage from './ParagraphWithImage'
import StatsSection from './StateSection'
import NewsletterForm from './NewsLetterForm'
import HomeServices from './HomeServices'
import ContactForm from './ContactForm'
import FooterCom from './FooterCom'
import MainCardSection from './MainCardSection'
import SalesforceDescription from './SalesforceDescription'
import Aidescription from './Aidescription'
import DesignThinkingDescription from './DesignThinkingDescription'
import { Routes, Route } from "react-router-dom";



const LandingPage = () => {
  return (
    <div>
      <Routes>
        
        {/* Default Landing Page Content */}
        <Route
          path="/"
          element={
            <>
              <Video />
              <HeroSection />
              <ParagraphWithImage />
              <StatsSection />
              <MainCardSection/>
              <HomeServices />
              <NewsletterForm />
              <ContactForm />
            </>
          }
        />

        {/* Service description pages */}
        <Route path="/salesforce-cloud" element={<SalesforceDescription />} />
        <Route path="/ai" element={<Aidescription />} />
        <Route path="/design-thinking" element={<DesignThinkingDescription />} />
      </Routes>
    </div>
  );
};

export default LandingPage;