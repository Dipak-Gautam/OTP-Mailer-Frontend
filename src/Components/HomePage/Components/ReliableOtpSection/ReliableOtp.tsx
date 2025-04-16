import React from "react";
import OrangeButton from "../../../Buttons/GetStarted/GetStarted";

const ReliableOtp = () => {
  return (
    <div className="flex mx-20 my-14 gap-16">
      <div className="flex flex-col justify-center gap-8 px-8">
        <div className="text-black  font-SpaceMono italic font-bold text-4xl">
          Reliable OTP
        </div>
        <div className="text-lg font-medium text-gray-600 pr-28">
          Trust OTP-Mailer to deliver your one-time passwords with speed and
          accuracy. Our robust infrastructure and security protocols safeguard
          your user data
        </div>
        <div>
          <OrangeButton title="Send Now" />
        </div>
      </div>
      <div>
        <img src="assets/reliableOtp.png" />
      </div>
    </div>
  );
};

export default ReliableOtp;
