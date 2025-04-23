import React from "react";
import ApiKey from "./Component/ApiKey";
import AccountSetting from "./Component/AccountSetting";

const AccountApi = () => {
  return (
    <div className="p-5">
      <div className="text-4xl font-SpaceMono italic font-bold ">
        Account Management
      </div>
      <div className="my-7 space-y-10">
        <ApiKey />
        <AccountSetting />
      </div>
    </div>
  );
};

export default AccountApi;
