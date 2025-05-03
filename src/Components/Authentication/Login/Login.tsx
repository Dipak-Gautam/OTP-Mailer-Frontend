import { MdClose } from "react-icons/md";
import LoginPage from "./Components/LoginPage";
import { useState } from "react";
import MainRegister from "./Components/MainRegister";

interface LoginProp {
  open: boolean;
  close: () => void;
}

const Login = ({ open, close }: LoginProp) => {
  const [selector, setSelector] = useState<"login" | "register">(
    localStorage.getItem("prevLogin") != null ? "login" : "register"
  );
  const [registerStage, setRegisterStage] = useState<number>(1);
  return (
    <div
      onClick={() => {
        close();
        setRegisterStage(1);
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
          }}
        >
          <MdClose className="text-white text-xl" />
        </div>
        <div>
          {selector == "login" ? (
            <LoginPage setSelector={setSelector} />
          ) : (
            <MainRegister
              setSelector={setSelector}
              registerStage={registerStage}
              setRegisterStage={setRegisterStage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
