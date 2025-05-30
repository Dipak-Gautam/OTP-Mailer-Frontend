import React from "react";
import ApiKey from "./Component/ApiKey";
import AccountSetting from "./Component/AccountSetting";
import DeleteAccount from "./Component/DeleteAccount";
import { HashLoader, PulseLoader } from "react-spinners";
import { IUserInfo } from "../../../../Schema/userInfo.Schema";

const AccountApi = () => {
  const localStorageUserInfo = localStorage.getItem("userInfo");
  if (!localStorageUserInfo)
    return (
      <div className="h-[100vh] bg-white flex items-center justify-center">
        <div className="space-y-6">
          <HashLoader color="#ff9800" />
          <div className="flex items-end gap-1 font-medium text-gray-400">
            loading <PulseLoader size={8} color="gray" />
          </div>
        </div>
      </div>
    );

  const userData: IUserInfo = JSON.parse(
    localStorage.getItem("userInfo") || "{}"
  );
  return (
    <div className=" relative   p-5 h-[100vh] overflow-auto">
      <div className=" text-2xl md:text-4xl font-SpaceMono italic font-bold ">
        Account Management
      </div>
      <div className=" flex-1 my-7 space-y-10 ">
        <ApiKey userData={userData} />
        <AccountSetting />
        <DeleteAccount />
      </div>
    </div>
  );
};

export default AccountApi;
