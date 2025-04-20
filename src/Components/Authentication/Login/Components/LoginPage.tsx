import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useNavigate } from "react-router-dom";
import { ILoginProp, LoginSignupSchema } from "../../../../Schema/login.Schema";
import TextInputControllers from "../../../Input/TextInputController";
import loginApi from "../../../../Api/AuthenticationApi/LoginApi";

interface ILoginPageProp {
  setSelector: React.Dispatch<React.SetStateAction<"login" | "register">>;
}

const LoginPage = ({ setSelector }: ILoginPageProp) => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ILoginProp>({
    resolver: zodResolver(LoginSignupSchema),
  });
  const onSubmit: SubmitHandler<ILoginProp> = async (data) => {
    await loginApi(data, setError, navigate);
  };
  return (
    <div className="p-6">
      <div className="text-text font-poppins text-2xl text-center font-semibold">
        Login
      </div>
      <div className="my-3">
        <TextInputControllers
          label="Email"
          name="email"
          control={control}
          error={errors.email}
        />
        <TextInputControllers
          label="Password"
          name="password"
          control={control}
          error={errors.password}
          type="password"
        />
      </div>
      <div className="text-slate-700 font-lexend text-sm font-medium flex justify-between hover:text-blue-500 cursor-pointer">
        <div className="text-xs text-red-500">
          {errors.root && `${errors.root.message}`}
        </div>
        <p>Forget Password?</p>
      </div>

      <div className=" text-white font-lexend font-medium  text-center  mt-6 rounded-md hover:bg-slate-800 cursor-pointer overflow-hidden">
        {isSubmitting ? (
          <div className="flex-1 border p-2 bg-slate-500"> Submitting</div>
        ) : (
          <div
            className="flex-1 border p-2 bg-slate-600"
            onClick={handleSubmit(onSubmit)}
          >
            Login
          </div>
        )}
      </div>
      <div className="font-lexend text-slate-600 text-center mt-6 text-sm">
        Don't have an account?{" "}
        <span
          className="text-text font-medium cursor-pointer"
          onClick={() => setSelector("register")}
        >
          Register
        </span>{" "}
      </div>
    </div>
  );
};

export default LoginPage;
