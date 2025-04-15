import React from "react";
import Navbar from "../NavBar/Navbar";
import TextPart from "./Component/TextPart";

const HeroImage = () => {
  return (
    <div className="font-SpaceMono bg-[#f3e5dc]  p-4">
      <Navbar />
      <div className="w-full flex justify-center my-10">
        <div className="text-7xl font-SpaceMono font-bold italic w-[50%] text-center">
          Introducing OTP-Mailer:
        </div>
      </div>
      <div className="flex justify-between px-10">
        <TextPart />
        <div className="w-[50%] flex justify-center">
          <img src="assets/Hero-Image.jpg" className="w-[35vw]" />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
