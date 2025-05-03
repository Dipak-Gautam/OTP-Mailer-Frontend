import React, { SetStateAction, useState } from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import { IoMdArrowRoundBack } from "react-icons/io";

interface OtpVerificationProp {
  setRegisterStage: React.Dispatch<SetStateAction<number>>;
}

const OtpVerification = ({ setRegisterStage }: OtpVerificationProp) => {
  const [otp, setOtp] = React.useState("");

  const handleChange = (newValue: string) => {
    setOtp(newValue);
  };
  return (
    <div className="p-6">
      <div
        className="absolute top-3 left-3 "
        onClick={() => setRegisterStage(1)}
      >
        <IoMdArrowRoundBack className="text-slate-500 text-2xl cursor-pointer hover:text-text" />
      </div>
      <div className="text-text font-poppins text-2xl text-center font-semibold">
        Verify OTP
      </div>
      <div className="my-4">
        <div className="text-center text-slate-600 text-sm  my-5 font-lexend">
          We have sent you one time password on your email {"  "}
          <span className="text-text font-medium">
            anjangautam095@gmail.com
          </span>
        </div>
        <MuiOtpInput
          value={otp}
          onChange={handleChange}
          length={6}
          autoFocus
          className="text-black"
        />
        <div className="text-center font-lexend text-slate-500 text-sm mt-4">
          Did't receive the OTP?{" "}
          <span className="text-text  font-medium cursor-pointer hover:text-slate-900">
            Resend
          </span>
        </div>
      </div>
      <div
        onClick={() => setRegisterStage(3)}
        className="bg-orange-400 hover:bg-orange-500 text-white font-lexend font-medium p-2 text-center  my-6 rounded-md  cursor-pointer"
      >
        Verify
      </div>
    </div>
  );
};

export default OtpVerification;
