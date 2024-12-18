import React from "react";
import Hero from "../components/hero/Hero";
import AdvantagesSection from "../components/advantages/AdvantagesSection";
import ServicesSection from "../components/services/ServicesSection";
import ContactSection from "../components/contacts/ContactSection";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <AdvantagesSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
