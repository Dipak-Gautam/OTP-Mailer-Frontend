import React from "react";
import Navbar from "../NavBar/Navbar";
import HeroSection from "./Components/HeroSection";
import UsageSection from "./Components/UsageSection";
import Footer from "../Footer/Footer";

const Documentation = () => {
  return (
    <div className="pt-4">
      <Navbar />
      <HeroSection />
      <UsageSection />
      <Footer />
    </div>
  );
};

export default Documentation;
