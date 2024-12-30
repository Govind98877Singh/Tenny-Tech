import React from 'react'
import Navbar from './Navbar'
import Video from './Video'
import HeroSection from './HeroSection'
import ParagraphWithImage from './ParagraphWithImage'
import StatsSection from './StateSection'
import NewsletterForm from './NewsLetterForm'
import Services from './Services'
import ContactForm from './ContactForm'
import FooterCom from './FooterCom'
import MainCardSection from './MainCardSection'


const LandingPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Video/>
      <HeroSection/>
      <ParagraphWithImage/>
     <MainCardSection/>
      <StatsSection></StatsSection>
      <NewsletterForm></NewsletterForm>
      <Services></Services>
      <ContactForm></ContactForm>
      <FooterCom/>
    </div>
  )
}

export default LandingPage;