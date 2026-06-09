import React from "react";
import Hero from "../components/Hero";
import PackagesSection from "../components/PackagesSection";
import ProgramsSection from "../components/ProgramsSection";
// import PaymentMethodsSection from "../components/PaymentMethodsSection";
import Transition from "../components/Transition";


const Home = ({ selectedCountry }) => {
  return (
    <Transition>
      <Hero />
      <PackagesSection selectedCountry={selectedCountry} />
      {/* <PaymentMethodsSection /> */}
      <ProgramsSection />
    </Transition>
  );
};

export default Home;
