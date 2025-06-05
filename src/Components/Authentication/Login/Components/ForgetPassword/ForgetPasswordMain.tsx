import React, { useState } from "react";
import OtpVerification from "../RegisterComponent/OtpVerification";

interface ForgetPasswordProp {
  forgetPassword: string;
}

const ForgetPasswordMain = ({ forgetPassword }: ForgetPasswordProp) => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: forgetPassword,
    otp: "",
  });
  const [forgetStage, setForgetStage] = useState(1);

  return (
    <div>
      {forgetStage == 1 ? (
        <OtpVerification
          registerData={registerData}
          setRegisterStage={setForgetStage}
        />
      ) : (
        <div>hello</div>
      )}
    </div>
  );
};

export default ForgetPasswordMain;
