import React from "react";

const TemplateSetting = () => {
  const [titleColor, setTitleColor] = React.useState("#4caf50");
  const [titleBackgroundColor, setTitleBackgroundColor] =
    React.useState("#4caf50");
  const [optColor, setOptColor] = React.useState("#4caf50");
  const [optBackgroundColor, setOptBackgroundColor] = React.useState("#e8f5e9");
  const [otpBorderColor, setOtpBorderColor] = React.useState("#4caf50");

  const [bodyColor, setBodyColor] = React.useState("#000000");
  const [bodyBackgroundColor, setBodyBackgroundColor] =
    React.useState("#ffffff");

  const [footerColor, setFooterColor] = React.useState("#000000");
  const [footerBackgroundColor, setFooterBackgroundColor] =
    React.useState("#ffffff");

  return (
    <div className="flex-1">
      <div className="font-SpaceMono text-xl italic font-bold text-center mb-5">
        Configure the Color
      </div>
      <div className="border rounded-md border-gray-500 pb-3">
        <div className="flex justify-between mt-2 items-center px-5 pb-3 border-b border-gray-300">
          <div className="flex flex-col gap-2   ">
            <label htmlFor="titleColor">Title Color</label>
            <input
              className="rounded-md"
              type="color"
              id="titleColor"
              value={titleColor}
              onChange={(e) => setTitleColor(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 items-end">
            <label htmlFor="titleBackgroundColor">Title Background Color</label>
            <input
              className="rounded-md"
              type="color"
              id="titleBackgroundColor"
              value={titleBackgroundColor}
              onChange={(e) => setTitleBackgroundColor(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-4 mt-2 justify-between px-5 pb-4 border-b border-gray-300">
          <div className="flex flex-col gap-2 j">
            <label htmlFor="optColor">OTP Color</label>
            <input
              className="rounded-md"
              type="color"
              id="optColor"
              value={optColor}
              onChange={(e) => setOptColor(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <label htmlFor="optBackgroundColor">OTP Background Color</label>
            <input
              className="rounded-md"
              type="color"
              id="optBackgroundColor"
              value={optBackgroundColor}
              onChange={(e) => setOptBackgroundColor(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2  items-end">
            <label htmlFor="otpBorderColor">OTP Border Color</label>
            <input
              className="rounded-md"
              type="color"
              id="otpBorderColor"
              value={otpBorderColor}
              onChange={(e) => setOtpBorderColor(e.target.value)}
            />
          </div>
        </div>

        <div>
          <div className="flex gap-4 mt-2 justify-between px-5 pb-3 border-b border-gray-300">
            <div className="flex flex-col gap-2 ">
              <label htmlFor="bodyColor">Body Color</label>
              <input
                className="rounded-md"
                type="color"
                id="bodyColor"
                value={bodyColor}
                onChange={(e) => setBodyColor(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 justify-center items-end">
              <label htmlFor="bodyBackgroundColor">Body Background Color</label>
              <input
                className="rounded-md"
                type="color"
                id="bodyBackgroundColor"
                value={bodyBackgroundColor}
                onChange={(e) => setBodyBackgroundColor(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-4 mt-2 justify-between px-5  border-gray-300">
            <div className="flex flex-col gap-2 ">
              <label htmlFor="footerColor">Footer Color</label>
              <input
                className="rounded-md"
                type="color"
                id="footerColor"
                value={footerColor}
                onChange={(e) => setFooterColor(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 justify-center items-end">
              <label htmlFor="footerBackgroundColor">
                Footer Background Color
              </label>
              <input
                className="rounded-md"
                type="color"
                id="footerBackgroundColor"
                value={footerBackgroundColor}
                onChange={(e) => setFooterBackgroundColor(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateSetting;
