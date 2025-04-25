import React from "react";

const Template = () => {
  return (
    <div className="w-[50%]">
      <div className="border rounded-lg overflow-hidden border-gray-300 ">
        <div className="bg-green-400 text-white font-bold text-3xl text-center p-3">
          Verify your Email
        </div>
        <div className="p-7 space-y-6 text-sm">
          <div>Hello,</div>
          <div>
            Thank you for signing up! Please confirm your email address by
            entering the code below:
          </div>
          <div className="bg-[#e8f5e9] p-3 border border-dashed border-green-500 rounded-md">
            <div className="text-center text-2xl font-bold text-green-600">
              123456
            </div>
          </div>
          <p>
            If you did not create an account, no further action is required. If
            you have any questions, feel free to contact our support team.
          </p>
        </div>
        <div className="bg-[#f4f4f4] text-center p-3 text-xs text-gray-500 font-medium">
          © 2025 Dipak Gautam. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Template;
