import React from "react";

const PreBuildTemplates = () => {
  return (
    <>
      <div className="font-SpaceMono text-xl italic font-bold text-center mb-3">
        Pre-Built Templates
      </div>
      <div className=" flex flex-col justify-center items-center relative py-3 rounded-md overflow-hidden">
        <div className="absolute w-full h-full bg-gray-200 opacity-70 justify-center items-center flex text-gray-800 font-bold text-2xl">
          Coming Soon..
        </div>

        <div className="border rounded-lg overflow-hidden border-gray-300 w-[70%]">
          <div className="text-center bg-red-500 p-3 font-medium text-white text-lg">
            Verify Your Email
          </div>
          <div className="text-xs space-y-2 p-3">
            <p>Hello,</p>
            <div>
              Hello Thank you for signing up! Please confirm your email address
              by entering the code below:
            </div>
            <div className="bg-[#e8f5e9] p-1 border border-dashed border-green-500 rounded-md">
              <div className="text-center text-lg font-bold text-green-600">
                123456
              </div>
            </div>
            <div>
              If you did not create an account, no further action is required.
              If you have any questions, feel free to contact our support team.
            </div>
          </div>
          <div className="bg-[#f4f4f4] text-center p-3 text-xs text-gray-500 font-medium">
            © 2025 Dipak Gautam. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default PreBuildTemplates;
