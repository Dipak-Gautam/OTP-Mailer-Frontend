import React from "react";
import Navbar from "../NavBar/Navbar";
import HeroSection from "./Components/HeroSection";
import UsageSection from "./Components/UsageSection";

const Documentation = () => {
  return (
    <div className="p-4">
      <Navbar />
      <HeroSection />
      <UsageSection />
    </div>
  );
};

export default Documentation;
