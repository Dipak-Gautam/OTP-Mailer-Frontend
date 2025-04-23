import React from "react";
import ApiKey from "./Component/ApiKey";

const AccountApi = () => {
  return (
    <div className="p-5">
      <div className="text-4xl font-SpaceMono italic font-bold ">
        Account Management
      </div>
      <div className="my-7">
        <ApiKey />
      </div>
    </div>
  );
};

export default AccountApi;
