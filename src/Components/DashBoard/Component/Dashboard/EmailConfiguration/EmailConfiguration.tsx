import React, { useState } from "react";
import Template from "./Components/Template";
import TemplateSetting from "./Components/TemplateSetting";
import PreBuildTemplates from "../PreBuildTemplates/PreBuildTemplates";
import SaveAndTest from "../SaveAndTest/SaveAndTest";

const EmailConfiguration = () => {
  // colors
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

  //data

  const [title, setTitle] = React.useState("Verify your Email");
  const [firstParagraph, setFirstParagraph] = React.useState(
    "Hello\nThank you for signing up! Please confirm your email address by entering the code below:"
  );
  const [afterParagraph, setAfterParagraph] = React.useState(
    "If you did not create an account, no further action is required. If you have any questions, feel free to contact our support team."
  );
  const [footer, setFooter] = useState(
    "© 2025 Dipak Gautam. All rights reserved."
  );

  return (
    <div className="flex flex-col md:flex-row gap-10 h-full">
      <div className="md:w-[50%] space-y-8">
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
          title={title}
          setTitle={setTitle}
          firstParagraph={firstParagraph}
          setFirstParagraph={setFirstParagraph}
          afterParagraph={afterParagraph}
          setAfterParagraph={setAfterParagraph}
          footer={footer}
          setFooter={setFooter}
        />
        <SaveAndTest />
      </div>

      <div className="h-full  flex-1 space-y-5">
        <TemplateSetting
          titleColor={titleColor}
          titleBackgroundColor={titleBackgroundColor}
          bodyBackgroundColor={bodyBackgroundColor}
          bodyColor={bodyColor}
          footerBackgroundColor={footerBackgroundColor}
          footerColor={footerColor}
          optBackgroundColor={optBackgroundColor}
          optColor={optColor}
          otpBorderColor={otpBorderColor}
          setBodyBackgroundColor={setBodyBackgroundColor}
          setBodyColor={setBodyColor}
          setFooterBackgroundColor={setFooterBackgroundColor}
          setFooterColor={setFooterColor}
          setOptBackgroundColor={setOptBackgroundColor}
          setOptColor={setOptColor}
          setOtpBorderColor={setOtpBorderColor}
          setTitleColor={setTitleColor}
          setTitleBackgroundColor={setTitleBackgroundColor}
        />
        <PreBuildTemplates />
      </div>
    </div>
  );
};

export default EmailConfiguration;
