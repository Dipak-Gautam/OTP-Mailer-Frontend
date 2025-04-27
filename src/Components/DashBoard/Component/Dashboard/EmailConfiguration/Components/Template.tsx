import React, { useState } from "react";

const Template = () => {
  const [title, setTitle] = useState("Verify your Email");
  const [firstParagraph, setFirstParagraph] = useState(
    "Hello /n Thank you for signing up! Please confirm your email address by entering the code below:"
  );
  const [afterParagraph, setAfterParagraph] = useState(
    " If you did not create an account, no further action is required. If you have any questions, feel free to contact our support team."
  );

  return (
    <div className="w-[50%]">
      <div className="border rounded-lg overflow-hidden border-gray-300 ">
        <div className="bg-green-400 text-white font-bold text-3xl text-center p-3">
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="border-none outline-none bg-transparent w-full text-center"
          />
        </div>
        <div className="p-7 space-y-6 text-sm">
          <textarea
            value={firstParagraph}
            onChange={(event) => setFirstParagraph(event.target.value)}
            className="border-none outline-none bg-transparent w-full "
          />

          <div className="bg-[#e8f5e9] p-3 border border-dashed border-green-500 rounded-md">
            <div className="text-center text-2xl font-bold text-green-600">
              123456
            </div>
          </div>
          <div>
            <textarea
              value={afterParagraph}
              onChange={(event) => setAfterParagraph(event.target.value)}
              className="border-none outline-none bg-transparent w-full "
            />
          </div>
        </div>
        <div className="bg-[#f4f4f4] text-center p-3 text-xs text-gray-500 font-medium">
          © 2025 Dipak Gautam. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Template;
