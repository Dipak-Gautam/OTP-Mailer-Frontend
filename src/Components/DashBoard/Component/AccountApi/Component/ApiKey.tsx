import React from "react";

const ApiKey = () => {
  return (
    <div className="p-4 border border-gray-300 shadow-xl shadow-gray-400/50 rounded-xl ">
      <div className="text-gray-900 font-medium text-xl mb-2 ">
        Api Key / SecretKey
      </div>
      <div className="md:flex gap-4 md:gap-8 ">
        <div className="flex-1 flex flex-col gap-4 justify-center">
          <div className=" text-gray-500 font-medium">
            Treat api key like a password—keep it safe and do not share it.
          </div>
          <div className="bg-[#f7f7f7] font-lg text-gray-600 font-medium p-4 rounded-lg">
            hello honey bunny
          </div>
        </div>
        <div className=" mt-4 md:mt-0 md:w-[40%] flex flex-col gap-4">
          <div className=" text-xl md:text-2xl text-gray-900 font-SpaceMono italic font-bold text-center">
            Api Key
          </div>
          <div className="text-gray-500 font-medium text-base md:text-lg">
            Treat your API key like a password—keep it private and never share
            it. Losing or exposing it can lead to unauthorized access and
            potential security risks. Store it securely.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiKey;
