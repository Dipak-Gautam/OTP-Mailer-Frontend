import React from "react";

const StreamlinedOtp = () => {
  return (
    <div className="px-14 py-20">
      <div className="text-center space-y-4">
        <div className="text-black font-SpaceMono text-4xl font-bold italic">
          Streamlined OTP Delivery
        </div>
        <div className="text-sm text-gray-500">
          Effortlessly send one-time passwords to your users' Gmail accounts
          with our user-friendly platform
        </div>
      </div>
      <div className="my-14 px-8 flex gap-8">
        <div className="w-[35%]">
          <img src="assets/streamLine.jpg" className=" rounded-4xl" />
        </div>
        <div className=" flex flex-col flex-1 bg-[#f3e5dc] rounded-4xl p-14  gap-10">
          <div className="text-2xl font-bold text-black">
            Efficient OTP Delivery
          </div>
          <div className="text-lg text-gray-600">
            Our intuitive dashboard allows you to manage your OTP campaigns with
            ease. Track delivery status, monitor user interactions, and gain
            valuable insights to optimize your communication strategies
          </div>
          <div className="text-lg text-gray-600">
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
