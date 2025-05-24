import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerData } from "../MainRegister";
import { useNavigate } from "react-router-dom";
import registerApi from "../../../../../Api/AuthenticationApi/registerApi";
import TextInputControllers from "../../../../Input/TextInputController";
import {
  IPassword,
  IPasswordSchema,
} from "../../../../../Schema/setPassword.schema";
interface SetPasswordProp {
  registerData: registerData;
}

const SetPassword = ({ registerData }: SetPasswordProp) => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<IPassword>({
    resolver: zodResolver(IPasswordSchema),
  });
  const onSubmit: SubmitHandler<IPassword> = async (data) => {
    await registerApi(
      registerData.name,
      registerData.email,
      data.password,
      setError,
      navigate
    );
  };
  return (
    <div className="p-6">
      <div className="text-text font-poppins text-2xl text-center font-semibold">
        Welcome
      </div>
      <div className=" text-slate-600 text-sm my-1  font-lexend">
        Please set Password.
      </div>
      <div className="my-3">
        <TextInputControllers
          control={control}
          error={errors.password}
          label="Password"
          name="password"
          type="password"
        />
        <TextInputControllers
          control={control}
          name="confirmPassword"
          label="Confirm Password"
          error={errors.confirmPassword}
          type="password"
        />
      </div>
      <div className="text-xs text-red-500">
        {errors.root && `${errors.root.message}`}
      </div>
      <div
        onClick={handleSubmit(onSubmit)}
        className=" text-white font-lexend font-medium  text-center  mt-6 rounded-md hover:bg-slate-800 cursor-pointer"
      >
        {isSubmitting ? (
          <div className="p-2 flex-1 bg-orange-400 hover:bg-orange-500">
            {" "}
            Submitting
          </div>
        ) : (
          <div
            className="p-2 flex-1 bg-orange-400 hover:bg-orange-500"
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </div>
        )}
      </div>
    </div>
  );
};

export default SetPassword;
