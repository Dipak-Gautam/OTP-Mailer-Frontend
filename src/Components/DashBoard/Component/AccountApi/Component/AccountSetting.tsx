import React from "react";
import ChangePasswordOld from "./ChangePasswordOld";

const AccountSetting = () => {
  return (
    <div className="p-4 border border-gray-300 shadow-xl shadow-gray-400/50 rounded-xl">
      <div className="text-gray-900 font-medium text-xl mb-5 ">
        Account Setting
      </div>

      <div className="md:flex gap-8">
        <div className="flex-1">
          <div className="text-gray-500 text-base font-medium">
            Provide a password to change the old one
          </div>
          <ChangePasswordOld />
        </div>
        <div className="md:w-[40%] space-y-4">
          <div className="font-bold text-xl md:text-2xl font-SpaceMono italic text-gray-900 text-center">
            Account Setting
          </div>
          <div className="text-gray-500 font-medium md:text-lg ">
            Use a strong, unique password and never share it. If you suspect any
            compromise, update your password immediately.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
