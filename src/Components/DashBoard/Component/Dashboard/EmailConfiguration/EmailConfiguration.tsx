import React from "react";
import Template from "./Components/Template";
import TemplateSetting from "./Components/TemplateSetting";

const EmailConfiguration = () => {
  return (
    <div className="flex gap-6">
      <Template />
      <TemplateSetting />
    </div>
  );
};

export default EmailConfiguration;
