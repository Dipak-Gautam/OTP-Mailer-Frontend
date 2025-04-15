import React from "react";
import GetStarted from "../../Buttons/GetStarted/GetStarted";
import WhiteButton from "../../Buttons/WhiteButton/WhiteButton";

const TextPart = () => {
  return (
    <div className=" flex flex-col justify-center w-[50%] space-y-14 px-6 font-semibold text-gray-600 text-lg">
      <div className="font-SpaceMono text-4xl font-bold  px-5 whitespace-break-spaces leading-14 italic text-black">
        Empower Your Users with Secure and Convenient One-Time
      </div>

      <div className="">
        OTP-Mailer is a powerful tool that simplifies the process of sending
        one-time passwords to your users' Gmail accounts
      </div>

      <div>
        Customize your email templates, choose from our pre-designed options
      </div>

      <div className="flex gap-3">
        <GetStarted />
        <WhiteButton title="Learn More" />
      </div>
    </div>
  );
};

export default TextPart;
