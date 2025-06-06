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

const NewPassword = () => {
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
    // changePasswordApi(
    //   data.oldPassword,
    //   data.newPassword,
    //   setShowAlert,
    //   setError
    // );
  };

  return (
    <div>
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
      <SuccessAlert
        message="Password changed successfully"
        onClose={() => setShowAlert(false)}
        showAlert={showAlert}
      />
    </div>
  );
};

export default NewPassword;
