import React, { useState } from "react";
import Navbar from "../NavBar/Navbar";
import HeroSection from "./Components/HeroSection";
import UsageSection from "./Components/UsageSection";
import Footer from "../Footer/Footer";
import Login from "../Authentication/Login/Login";

const Documentation = () => {
  const [openModal, setShowModal] = useState(false);
  return (
    <div className="pt-4">
      <Navbar setShowModal={setShowModal} />
      <HeroSection setShowModal={setShowModal} />
      <UsageSection />
      <Footer />
      <Login open={openModal} close={() => setShowModal(false)} />
    </div>
  );
};

export default Documentation;
