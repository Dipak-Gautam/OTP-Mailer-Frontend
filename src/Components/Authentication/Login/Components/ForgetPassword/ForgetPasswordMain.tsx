import { useState } from "react";
import OtpVerification from "../RegisterComponent/OtpVerification";
import NewPassword from "./NewPassword";

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
        <div className="p-5">
          <NewPassword registerData={registerData} />
        </div>
      )}
    </div>
  );
};

export default ForgetPasswordMain;
