import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import WhatIsRemodeling from "../components/WhatIsRemodeling";
import CtaSection from "../components/CtaSection.jsx";
import FeaturesSection from "../components/FeaturesSection.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import StormDamageSection from "../components/StormDamageSection.jsx";
import TestimonialSection from "../components/TestimonialsSection.jsx";
import Contact from "../components/Contact.jsx";
// import Watermark from "../components/Watermark.jsx";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <WhatIsRemodeling />
      <CtaSection />
      <FeaturesSection />
      <HowItWorks />
      <ServicesSection />
      <StormDamageSection />
      <TestimonialSection />
      <Contact />
      {/* <Watermark /> */}
    </div>
  );
};

export default Home;
