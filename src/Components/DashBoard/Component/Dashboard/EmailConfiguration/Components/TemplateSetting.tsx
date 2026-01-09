import React, { Dispatch, SetStateAction } from "react";

interface TemplateSettingProps {
  setTitleColor: Dispatch<SetStateAction<string>>;
  setTitleBackgroundColor: Dispatch<SetStateAction<string>>;
  setOptColor: Dispatch<SetStateAction<string>>;
  setBodyColor: Dispatch<SetStateAction<string>>;
  setBodyBackgroundColor: Dispatch<SetStateAction<string>>;
  setOtpBorderColor: Dispatch<SetStateAction<string>>;
  setFooterColor: Dispatch<SetStateAction<string>>;
  setFooterBackgroundColor: Dispatch<SetStateAction<string>>;
  setOptBackgroundColor: Dispatch<SetStateAction<string>>;
  titleBackgroundColor: string;
  titleColor: string;
  optBackgroundColor: string;
  optColor: string;
  otpBorderColor: string;
  bodyBackgroundColor: string;
  footerBackgroundColor: string;
  footerColor: string;
  bodyColor: string;
}

const TemplateSetting = ({
  setBodyBackgroundColor,
  setBodyColor,
  setFooterBackgroundColor,
  setFooterColor,
  setOptBackgroundColor,
  setOptColor,
  setOtpBorderColor,
  setTitleBackgroundColor,
  setTitleColor,
  titleBackgroundColor,
  titleColor,
  optBackgroundColor,
  optColor,
  otpBorderColor,
  bodyBackgroundColor,
  footerBackgroundColor,
  footerColor,
  bodyColor,
}: TemplateSettingProps) => {
  return (
    <div className="flex-1 ">
      <div className="font-SpaceMono text-base md:text-xl italic font-bold text-center mb-4">
        Configure the Color
      </div>
      <div className="border rounded-md border-gray-500 pb-3 bg-white text-sm sm:text-base text-center">
        <div className="flex justify-between mt-2 items-center px-5 pb-3 border-b border-gray-300">
          <div className="flex flex-col gap-1   ">
            <label htmlFor="titleColor">Title Color</label>
            <input
              className="rounded-md"
              type="color"
              id="titleColor"
              value={titleColor}
              onChange={(e) => setTitleColor(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1 items-end ">
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
          <div className="flex flex-col gap-1 j">
            <label htmlFor="optColor">OTP Color</label>
            <input
              className="rounded-md"
              type="color"
              id="optColor"
              value={optColor}
              onChange={(e) => setOptColor(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">
            <label htmlFor="optBackgroundColor">OTP Background Color</label>
            <input
              className="rounded-md"
              type="color"
              id="optBackgroundColor"
              value={optBackgroundColor}
              onChange={(e) => setOptBackgroundColor(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1  items-end">
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
            <div className="flex flex-col gap-1 ">
              <label htmlFor="bodyColor">Body Color</label>
              <input
                className="rounded-md"
                type="color"
                id="bodyColor"
                value={bodyColor}
                onChange={(e) => setBodyColor(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1 justify-center items-end">
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
            <div className="flex flex-col gap-1 ">
              <label htmlFor="footerColor">Footer Color</label>
              <input
                className="rounded-md"
                type="color"
                id="footerColor"
                value={footerColor}
                onChange={(e) => setFooterColor(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1 justify-center items-end">
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
