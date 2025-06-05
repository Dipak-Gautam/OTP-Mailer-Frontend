import { MdClose } from "react-icons/md";
import LoginPage from "./Components/LoginPage";
import { useState } from "react";
import MainRegister from "./Components/MainRegister";
import ForgetPasswordMain from "./Components/ForgetPassword/ForgetPasswordMain";

interface LoginProp {
  open: boolean;
  close: () => void;
}

const Login = ({ open, close }: LoginProp) => {
  const [selector, setSelector] = useState<"login" | "register">(
    localStorage.getItem("prevLogin") != null ? "login" : "register"
  );
  const [registerStage, setRegisterStage] = useState<number>(1);
  const [forgetPassword, setForgetPassword] = useState<null | string>(null);
  return (
    <div
      onClick={() => {
        close();
        setRegisterStage(1);
        setForgetPassword(null);
      }}
      className={`fixed inset-0 flex justify-center items-center transition-colors bg-slate-200/50 ${
        open ? "visible " : "invisible "
      }`}
    >
      <div
        className={` bg-white/50 backdrop-blur-lg  w-96 rounded-2xl shadow transition-all duration-500 border-2 border-white overflow-hidden ${
          open ? "scale-100 opacity-90" : " scale-125 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className=" absolute bg-orange-400 right-0 rounded-bl-xl p-2 hover:bg-orange-500 cursor-pointer"
          onClick={() => {
            close();
            setRegisterStage(1);
            setForgetPassword(null);
          }}
        >
          <MdClose className="text-white text-xl" />
        </div>
        <div>
          {forgetPassword != null ? (
            <ForgetPasswordMain forgetPassword={forgetPassword} />
          ) : (
            <div>
              {selector == "login" ? (
                <LoginPage
                  setSelector={setSelector}
                  setForgetPassword={setForgetPassword}
                />
              ) : (
                <MainRegister
                  setSelector={setSelector}
                  registerStage={registerStage}
                  setRegisterStage={setRegisterStage}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
