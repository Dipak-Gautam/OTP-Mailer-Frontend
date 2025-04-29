import React from "react";
import Template from "./Components/Template";
import TemplateSetting from "./Components/TemplateSetting";
import PreBuildTemplates from "../PreBuildTemplates/PreBuildTemplates";
import SaveAndTest from "../SaveAndTest/SaveAndTest";

const EmailConfiguration = () => {
  return (
    <div className="flex gap-10 h-full">
      <div className="w-[50%] space-y-8">
        <Template />
        <SaveAndTest />
      </div>

      <div className="h-full  flex-1 space-y-5">
        <TemplateSetting />
        <PreBuildTemplates />
      </div>
    </div>
  );
};

export default EmailConfiguration;
