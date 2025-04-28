import React from "react";
import Template from "./Components/Template";
import TemplateSetting from "./Components/TemplateSetting";
import PreBuildTemplates from "../PreBuildTemplates/PreBuildTemplates";

const EmailConfiguration = () => {
  return (
    <div className="flex gap-10 h-full">
      <Template />
      <div className="h-full  flex-1 space-y-5">
        <TemplateSetting />
        <PreBuildTemplates />
      </div>
    </div>
  );
};

export default EmailConfiguration;
