import React, { useState } from "react";
import RegisterPage from "./RegisterComponent/RegisterPage";
import OtpVerification from "./RegisterComponent/OtpVerification";
import SetPassword from "./RegisterComponent/SetPassword";
interface MainRegisterPageProp {
  setSelector: React.Dispatch<React.SetStateAction<"login" | "register">>;
  registerStage: number;
  setRegisterStage: React.Dispatch<React.SetStateAction<number>>;
}

export interface registerData {
  name: string;
  email: string;
  otp: string;
}

const MainRegister = ({
  setSelector,
  registerStage,
  setRegisterStage,
}: MainRegisterPageProp) => {
  const [registerData, setRegisterData] = useState<registerData>({
    name: "",
    email: "",
    otp: "",
  });

  return (
    <>
      {registerStage == 1 && (
        <RegisterPage
          setSelector={setSelector}
          setRegisterStage={setRegisterStage}
          setRegisterData={setRegisterData}
        />
      )}
      {registerStage == 2 && (
        <OtpVerification
          setRegisterStage={setRegisterStage}
          registerData={registerData}
        />
      )}
      {registerStage == 3 && <SetPassword registerData={registerData} />}
    </>
  );
};

export default MainRegister;
