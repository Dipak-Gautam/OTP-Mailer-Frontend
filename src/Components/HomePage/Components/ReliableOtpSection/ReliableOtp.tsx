import React from "react";
import OrangeButton from "../../../Buttons/OrangeButton/OrangeButton";
import { loginModalProp } from "../../../HeroImage/HeroImage";

const ReliableOtp = ({ setShowModal }: loginModalProp) => {
  return (
    <div className="flex mx-5 md:mx-10 lg:mx-20 my-14 gap-8 lg:gap-16">
      <div className="flex flex-col justify-center gap-8 px-8">
        <div className="text-black  font-SpaceMono italic font-bold text-2xl md:text-4xl">
          Reliable OTP
        </div>
        <div className=" text-sm md:text-xl font-medium text-gray-400 xl:pr-28">
          Trust OTP-Mailer to deliver your one-time passwords with speed and
          accuracy. Our robust infrastructure and security protocols safeguard
          your user data
        </div>
        <div className="flex items-center gap-5">
          <OrangeButton title="Send Now" onClick={() => setShowModal(true)} />
          <div className="text-[#f8663f] hover:text-orange-400 font-semibold underline">
            Learn More
          </div>
        </div>
      </div>
      <div className=" hidden md:flex w-[70%] lg:w-[50%] ">
        <img src="assets/reliableOtp.png" className="w-full h-full bg-cover" />
      </div>
    </div>
  );
};

export default ReliableOtp;
