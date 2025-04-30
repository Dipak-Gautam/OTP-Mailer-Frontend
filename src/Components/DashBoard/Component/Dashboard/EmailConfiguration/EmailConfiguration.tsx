import React from "react";
import Template from "./Components/Template";
import TemplateSetting from "./Components/TemplateSetting";
import PreBuildTemplates from "../PreBuildTemplates/PreBuildTemplates";
import SaveAndTest from "../SaveAndTest/SaveAndTest";

const EmailConfiguration = () => {
  const [titleColor, setTitleColor] = React.useState("#ffffff");
  const [titleBackgroundColor, setTitleBackgroundColor] =
    React.useState("#33e371");
  const [optColor, setOptColor] = React.useState("#00a63e");
  const [optBackgroundColor, setOptBackgroundColor] = React.useState("#e8f5e9");
  const [otpBorderColor, setOtpBorderColor] = React.useState("#00a63e");

  const [bodyColor, setBodyColor] = React.useState("#1d1d1d");
  const [bodyBackgroundColor, setBodyBackgroundColor] =
    React.useState("#ffffff");

  const [footerColor, setFooterColor] = React.useState("#6f7686");
  const [footerBackgroundColor, setFooterBackgroundColor] =
    React.useState("#f4f4f4");
  return (
    <div className="flex gap-10 h-full">
      <div className="w-[50%] space-y-8">
        <Template
          titleColor={titleColor}
          bodyBackgroundColor={bodyBackgroundColor}
          bodyColor={bodyColor}
          footerBackgroundColor={footerBackgroundColor}
          footerColor={footerColor}
          optBackgroundColor={optBackgroundColor}
          optColor={optColor}
          otpBorderColor={otpBorderColor}
          titleBackgroundColor={titleBackgroundColor}
        />
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
