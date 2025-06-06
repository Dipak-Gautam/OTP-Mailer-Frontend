import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInputControllers from "../../../../Input/TextInputController";
import OrangeButton from "../../../../Buttons/OrangeButton/OrangeButton";
import changePasswordApi from "../../../../../Api/AuthenticationApi/changePasswordApi";
import SuccessAlert from "../../../../Alert/SuccessAlert";
import {
  INewPassword,
  INewPasswordSchema,
} from "../../../../../Schema/newPassword.Schema";
import newPasswordApi from "../../../../../Api/AuthenticationApi/newPasswordApi";
import { registerData } from "../MainRegister";

interface NewPasswordProp {
  registerData: registerData;
}

const NewPassword = ({ registerData }: NewPasswordProp) => {
  const [showAlert, setShowAlert] = useState(false);

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<INewPassword>({
    resolver: zodResolver(INewPasswordSchema),
  });

  const onSubmit: SubmitHandler<INewPassword> = (data) => {
    newPasswordApi(registerData.email, data.newPassword, setShowAlert);
  };

  return (
    <div className="relative">
      <TextInputControllers
        control={control}
        error={errors.newPassword}
        label="New Password"
        name="newPassword"
        type="password"
      />

      <TextInputControllers
        control={control}
        error={errors.confirmPassword}
        label="Confirm Password"
        name="confirmPassword"
        type="password"
      />

      <div className="flex justify-end">
        <div className="text-xs text-red-500 flex-1 ">
          {errors.root && `${errors.root.message}`}
        </div>
        {isSubmitting ? (
          <div className="w-fit">
            <OrangeButton title="Submitting" />
          </div>
        ) : (
          <div className="w-fit">
            <OrangeButton title="Change" onClick={handleSubmit(onSubmit)} />
          </div>
        )}
      </div>
      {showAlert && (
        <div className=" absolute  bottom-1 p-2 rounded-2xl bg-green-600 font-medium text-center text-white text-sm mx-0   ">
          Password Changed Sucessfully
        </div>
      )}
    </div>
  );
};

export default NewPassword;
