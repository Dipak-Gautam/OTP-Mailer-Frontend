import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { registerData } from "../MainRegister";
import {
  IRegisterPropFirst,
  RegisterSchemaFirst,
} from "../../../../../Schema/register.schema";
import TextInputControllers from "../../../../Input/TextInputController";

interface RegisterPageProp {
  setSelector: React.Dispatch<React.SetStateAction<"login" | "register">>;
  setRegisterStage: React.Dispatch<React.SetStateAction<number>>;
  setRegisterData: React.Dispatch<React.SetStateAction<registerData>>;
}

const RegisterPage = ({
  setSelector,
  setRegisterStage,
  setRegisterData,
}: RegisterPageProp) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterPropFirst>({
    resolver: zodResolver(RegisterSchemaFirst),
  });
  const onSubmit: SubmitHandler<IRegisterPropFirst> = async (data) => {
    setRegisterData({ name: data.name, email: data.email, otp: "" });
    setRegisterStage(2);
  };
  return (
    <div className="p-6">
      <div className="text-text font-poppins text-2xl text-center font-semibold">
        Register
      </div>
      <div className="my-3">
        <TextInputControllers
          label="Name"
          name="name"
          control={control}
          error={errors.name}
        />
        <TextInputControllers
          label="Email"
          name="email"
          control={control}
          error={errors.email}
        />
      </div>
      <div
        onClick={handleSubmit(onSubmit)}
        className="bg-orange-400 hover:bg-orange-500 text-white font-lexend font-medium p-2 text-center  mt-6 rounded-md cursor-pointer"
      >
        Register
      </div>
      <div className="font-lexend text-slate-600 text-center mt-6 text-sm">
        Already have an account?
        <span
          className="text-text font-medium cursor-pointer"
          onClick={() => setSelector("login")}
        >
          Login
        </span>
      </div>
    </div>
  );
};

export default RegisterPage;
