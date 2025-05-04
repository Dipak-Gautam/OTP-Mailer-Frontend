import React, { Dispatch, SetStateAction } from "react";
import Navbar from "../NavBar/Navbar";
import TextPart from "./Component/TextPart";

export interface loginModalProp {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const HeroImage = ({ setShowModal }: loginModalProp) => {
  return (
    <div className="font-SpaceMono bg-[#f3e5dc]  pt-4 rounded-bl-[150px] ">
      <Navbar setShowModal={setShowModal} />
      <div className="w-full flex justify-center my-6 md:my-10">
        <div className="text-3xl md:text-7xl font-SpaceMono font-bold italic w-[50%] text-center">
          Introducing OTP-Mailer:
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between px-10 ">
        <TextPart setShowModal={setShowModal} />
        <div className="md:w-[50%] flex justify-center order-1 md:order-2">
          <img src="assets/Hero-Image.jpg" className="md:w-[35vw]" />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
