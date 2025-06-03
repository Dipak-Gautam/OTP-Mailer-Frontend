import React, { SetStateAction, useEffect, useRef, useState } from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import { IoMdArrowRoundBack } from "react-icons/io";
import testEmailApi from "../../../../../Api/EmailConfig/testEmailApi";
import { registerData } from "../MainRegister";
import CountDownButton from "../../../../Buttons/CountDownButton.tsx/CountDownButton";

interface OtpVerificationProp {
  setRegisterStage: React.Dispatch<SetStateAction<number>>;
  registerData: registerData;
}

const OtpVerification = ({
  setRegisterStage,
  registerData,
}: OtpVerificationProp) => {
  const [otp, setOtp] = React.useState("");
  const [message, setMessage] = useState<number>(0);
  const responseMessage = useRef<string>("");
  const [tryCount, setTryCount] = useState(0);

  const handleChange = (newValue: string) => {
    setOtp(newValue);
  };

  useEffect(() => {
    testEmailApi(registerData.email, setMessage, responseMessage);
  }, []);

  const handleVerify = () => {
    if (otp.length == 6) {
      setTryCount((prev) => prev + 1);
      if (responseMessage.current == "") return setMessage(4);
      if (otp === responseMessage.current.toString()) {
        setRegisterStage(3);
      } else {
        setMessage(3);
        return;
      }
    } else {
      setMessage(1);
    }
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
          <span className="text-text font-medium">{registerData.email}</span>
        </div>
        <MuiOtpInput
          value={otp}
          onChange={handleChange}
          length={6}
          autoFocus
          className="text-black"
        />
        <div className="text-xs h-4  my-1 text-center text-red-500 font-lexend">
          {message === 1 && "Please enter a valid OTP"}
          {message === 4 && "Internal server error, please try again later"}
          {message === 3 && "Invalid OTP, Please enter the correct OTP"}
        </div>
        <div className="text-center font-lexend text-slate-500 text-sm ">
          Did't receive the OTP?{" "}
          <CountDownButton
            onResend={() =>
              testEmailApi(registerData.email, setMessage, responseMessage)
            }
          />
        </div>
      </div>
      <div>
        {tryCount < 5 ? (
          <div
            onClick={() => handleVerify()}
            className="bg-orange-400 hover:bg-orange-500 text-white font-lexend font-medium p-2 text-center  my-6 rounded-md  cursor-pointer"
          >
            Verify
          </div>
        ) : (
          <div
            onClick={() => {
              testEmailApi(registerData.email, setMessage, responseMessage),
                setTryCount(0);
            }}
            className="bg-orange-400 hover:bg-orange-500 text-white font-lexend font-medium p-2 text-center  my-6 rounded-md  cursor-pointer"
          >
            Resend
          </div>
        )}
      </div>
    </div>
  );
};

export default OtpVerification;
