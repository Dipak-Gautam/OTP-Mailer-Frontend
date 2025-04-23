import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IPassword } from "../../../../../Schema/setPassword.schema";
import {
  IChangePassword,
  IChangePasswordSchema,
} from "../../../../../Schema/changePassword.Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInputControllers from "../../../../Input/TextInputController";
import OrangeButton from "../../../../Buttons/OrangeButton/OrangeButton";

const ChangePasswordOld = () => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<IChangePassword>({
    resolver: zodResolver(IChangePasswordSchema),
  });

  const onSubmit: SubmitHandler<IChangePassword> = () => {
    console.log(" submit clicked");
  };

  return (
    <div>
      <TextInputControllers
        control={control}
        error={errors.oldPassword}
        label="Old Password"
        name="oldPassword"
        type="password"
      />

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
        label="Conform Password"
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
            <OrangeButton title="Update" onClick={handleSubmit(onSubmit)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChangePasswordOld;
