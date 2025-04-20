import React, { ComponentProps } from "react";
import { loginModalProp } from "../../HeroImage/HeroImage";
interface LoginButtonProp extends ComponentProps<"div"> {}

const LoginButton = ({ ...props }: LoginButtonProp) => {
  return (
    <div
      className="bg-[#3a5355] p-2 px-3 rounded-md text-slate-100 font-SpaceMono font-semibold cursor-pointer hover:bg-[#314b4d] border border-[#3a5355] hover:border-[#668385]"
      {...props}
    >
      Sign Up
    </div>
  );
};

export default LoginButton;
