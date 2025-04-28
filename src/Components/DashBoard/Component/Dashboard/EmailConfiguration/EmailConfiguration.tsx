import React from "react";
import Template from "./Components/Template";
import TemplateSetting from "./Components/TemplateSetting";

const EmailConfiguration = () => {
  return (
    <div className="flex gap-10 h-full">
      <Template />
      <div className="h-full  flex-1">
        <TemplateSetting />
      </div>
    </div>
  );
};

export default EmailConfiguration;
