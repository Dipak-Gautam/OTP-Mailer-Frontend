import React, { useState, useRef, useEffect } from "react";

export interface TemplateProps {
  titleColor: string;
  titleBackgroundColor: string;
  optColor: string;
  optBackgroundColor: string;
  otpBorderColor: string;
  bodyColor: string;
  bodyBackgroundColor: string;
  footerColor: string;
  footerBackgroundColor: string;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  firstParagraph: string;
  setFirstParagraph: React.Dispatch<React.SetStateAction<string>>;
  afterParagraph: string;
  setAfterParagraph: React.Dispatch<React.SetStateAction<string>>;
  footer: string;
  setFooter: React.Dispatch<React.SetStateAction<string>>;
}

const Template = ({
  titleColor,
  titleBackgroundColor,
  otpBorderColor,
  optColor,
  bodyBackgroundColor,
  footerColor,
  footerBackgroundColor,
  optBackgroundColor,
  bodyColor,
  title,
  setTitle,
  firstParagraph,
  setFirstParagraph,
  afterParagraph,
  setAfterParagraph,
  footer,
  setFooter,
}: TemplateProps) => {
  const titleRef = useRef(null);
  const firstParagraphRef = useRef(null);
  const afterParagraphRef = useRef(null);

  // Auto resize function
  const autoResize = (ref: any) => {
    if (ref && ref.current) {
      ref.current.style.height = "auto"; // Reset height
      ref.current.style.height = ref.current.scrollHeight + "px"; // Set to scrollHeight
    }
  };

  useEffect(() => {
    autoResize(titleRef);
    autoResize(firstParagraphRef);
    autoResize(afterParagraphRef);
  }, []);

  return (
    <div className="">
      <div className="font-SpaceMono text-xl italic font-bold text-center mb-5">
        Configure the email
      </div>
      <div className="flex gap-2 my-5 items-center mx-3">
        <div className="text-lg font-medium ">Subject :</div>
        <div className="flex-1">
          <input className="border border-gray-400 rounded-md p-1 text-sm px-3 w-full" />
        </div>
      </div>
      <div className="border rounded-lg overflow-hidden border-gray-300">
        <div
          style={{
            backgroundColor: titleBackgroundColor,
            color: titleColor,
          }}
          className={` font-bold text-3xl text-center p-3`}
        >
          <input
            ref={titleRef}
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            className="border-none outline-none bg-transparent w-full text-center resize-none overflow-hidden"
          />
        </div>
        <div
          className="p-7 space-y-6 text-sm"
          style={{ background: bodyBackgroundColor, color: bodyColor }}
        >
          <textarea
            ref={firstParagraphRef}
            value={firstParagraph}
            onChange={(event) => {
              setFirstParagraph(event.target.value);
              autoResize(firstParagraphRef);
            }}
            className="border-none outline-none bg-transparent w-full resize-none overflow-hidden"
          />

          <div
            style={{
              backgroundColor: optBackgroundColor,
              borderColor: otpBorderColor,
            }}
            className=" p-3 border border-dashed rounded-md"
          >
            <div
              style={{
                color: optColor,
              }}
              className="text-center text-2xl font-bold text-green-600"
            >
              123456
            </div>
          </div>
          <div>
            <textarea
              ref={afterParagraphRef}
              value={afterParagraph}
              onChange={(event) => {
                setAfterParagraph(event.target.value);
                autoResize(afterParagraphRef);
              }}
              className="border-none outline-none bg-transparent w-full resize-none overflow-hidden"
            />
          </div>
        </div>
        <div
          style={{
            backgroundColor: footerBackgroundColor,
            color: footerColor,
          }}
          className=" text-center p-3 text-xs  font-medium"
        >
          © 2025 Dipak Gautam. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Template;
