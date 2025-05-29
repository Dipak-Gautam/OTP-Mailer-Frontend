import React, { useEffect, useState } from "react";
import Template from "./Components/Template";
import TemplateSetting from "./Components/TemplateSetting";
import PreBuildTemplates from "../PreBuildTemplates/PreBuildTemplates";
import SaveAndTest from "../SaveAndTest/SaveAndTest";
import { IUserInfo } from "../../../../../Schema/userInfo.Schema";

interface EmailConfigurationProps {
  userData: IUserInfo;
}

const EmailConfiguration = ({ userData }: EmailConfigurationProps) => {
  // colors
  const [titleColor, setTitleColor] = React.useState(
    "#" + userData.emailConfig.titleColor
  );
  const [titleBackgroundColor, setTitleBackgroundColor] = React.useState(
    "#" + userData.emailConfig.titleBackgroundColor
  );
  const [optColor, setOptColor] = React.useState(
    "#" + userData.emailConfig.optColor
  );
  const [optBackgroundColor, setOptBackgroundColor] = React.useState(
    "#" + userData.emailConfig.optBackgroundColor
  );
  const [otpBorderColor, setOtpBorderColor] = React.useState(
    "#" + userData.emailConfig.otpBorderColor
  );
  const [bodyColor, setBodyColor] = React.useState(
    "#" + userData.emailConfig.bodyColor
  );
  const [bodyBackgroundColor, setBodyBackgroundColor] = React.useState(
    "#" + userData.emailConfig.bodyBackgroundColor
  );
  const [footerColor, setFooterColor] = React.useState(
    "#" + userData.emailConfig.footerColor
  );
  const [footerBackgroundColor, setFooterBackgroundColor] = React.useState(
    "#" + userData.emailConfig.footerBackgroundColor
  );
  //data
  const [title, setTitle] = React.useState(userData.emailConfig.title);
  const [firstParagraph, setFirstParagraph] = React.useState(
    userData.emailConfig.firstParagraph
  );
  const [afterParagraph, setAfterParagraph] = React.useState(
    userData.emailConfig.afterParagraph
  );
  const [footer, setFooter] = useState(userData.emailConfig.footer);
  const [subject, setSubject] = useState(userData.emailConfig.subject);
  const [isLoading, setIsLoading] = useState(0);
  const firstLoad = React.useRef(true);

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }
    setIsLoading(1);
  }, [
    titleColor,
    titleBackgroundColor,
    optColor,
    optBackgroundColor,
    otpBorderColor,
    bodyColor,
    bodyBackgroundColor,
    footerColor,
    footerBackgroundColor,
    title,
    firstParagraph,
    afterParagraph,
    footer,
  ]);

  return (
    <div className="flex flex-col md:flex-row gap-10 h-full">
      <div className="md:w-[50%] space-y-8 ">
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
          subject={subject}
          setSubject={setSubject}
        />
        <SaveAndTest
          data={{
            titleColor: titleColor,
            bodyBackgroundColor: bodyBackgroundColor,
            bodyColor: bodyColor,
            footerBackgroundColor: footerBackgroundColor,
            footerColor: footerColor,
            optBackgroundColor: optBackgroundColor,
            optColor: optColor,
            otpBorderColor: otpBorderColor,
            titleBackgroundColor: titleBackgroundColor,
            title: title,
            firstParagraph: firstParagraph,
            afterParagraph: afterParagraph,
            footer: footer,
            subject: subject,
          }}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </div>

      <div className="h-full  flex-1 space-y-5 border-l pl-5 bg-slate-50">
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
