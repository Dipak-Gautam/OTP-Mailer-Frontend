import React, { useState, useRef, useEffect } from "react";

interface TemplateProps {
  titleColor: string;
  titleBackgroundColor: string;
  optColor: string;
  optBackgroundColor: string;
  otpBorderColor: string;
  bodyColor: string;
  bodyBackgroundColor: string;
  footerColor: string;
  footerBackgroundColor: string;
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
}: TemplateProps) => {
  const [title, setTitle] = useState("Verify your Email");
  const [firstParagraph, setFirstParagraph] = useState(
    "Hello \nThank you for signing up! Please confirm your email address by entering the code below:"
  );
  const [afterParagraph, setAfterParagraph] = useState(
    "If you did not create an account, no further action is required. If you have any questions, feel free to contact our support team."
  );

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
  console.log("titleBackgroundColor", titleBackgroundColor);

  return (
    <div className="">
      <div className="font-SpaceMono text-xl italic font-bold text-center mb-5">
        Configure the email
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
        <div className="p-7 space-y-6 text-sm">
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
