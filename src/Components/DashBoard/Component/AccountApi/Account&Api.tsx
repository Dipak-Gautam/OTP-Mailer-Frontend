import React from "react";
import ApiKey from "./Component/ApiKey";
import AccountSetting from "./Component/AccountSetting";
import DeleteAccount from "./Component/DeleteAccount";

const AccountApi = () => {
  return (
    <div className="p-5 h-[100vh] overflow-auto">
      <div className="text-4xl font-SpaceMono italic font-bold ">
        Account Management
      </div>
      <div className=" flex-1 my-7 space-y-10 ">
        <ApiKey />
        <AccountSetting />
        <DeleteAccount />
      </div>
    </div>
  );
};

export default AccountApi;
