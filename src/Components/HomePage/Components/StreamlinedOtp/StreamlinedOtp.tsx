import React from "react";

const StreamlinedOtp = () => {
  return (
    <div className=" px-5 md:px-10 my-10 md:my-24">
      <div className="text-center space-y-4">
        <div className="text-black font-SpaceMono text-2xl md:text-4xl font-bold italic">
          Streamlined OTP Delivery
        </div>
        <div className=" text-sm md:text-base text-gray-400 font-medium">
          Effortlessly send one-time passwords to your users' Gmail accounts
          with our user-friendly platform
        </div>
      </div>
      <div className=" my-7 md:my-14 px-3 md:px-8 md:flex gap-8">
        <div className=" hidden lg:flex w-[35%]">
          <img src="assets/streamLine.jpg" className=" rounded-4xl" />
        </div>
        <div className=" flex flex-col flex-1 bg-[#f3e5dc] rounded-2xl md:rounded-4xl p-7  md:p-14 gap-5 md:gap-10">
          <div className="text-xl md:text-2xl font-bold text-black">
            Efficient OTP Delivery
          </div>
          <div className="text-sm md:text-xl font-medium text-gray-500">
            Our intuitive dashboard allows you to manage your OTP campaigns with
            ease. Track delivery status, monitor user interactions, and gain
            valuable insights to optimize your communication strategies
          </div>
          <div className="text-sm md:text-xl font-medium text-gray-500">
            Discover the full range of features and capabilities that OTP-Mailer
            offers, designed to streamline your one-time password delivery and
            enhance the user experience
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamlinedOtp;
