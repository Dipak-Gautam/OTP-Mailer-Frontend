import React from "react";
import FetchApiCodeBlock from "./FetchApiCodeBlock";
import AxiosApiCodeBlock from "./AxiosApiCodeBlock";

const UsageSection = () => {
  return (
    <div className="p-4 px-5 md:px-20">
      <div className="italic font-bold text-black font-SpaceMono text-2xl md:text-5xl mb-5 md:mb-10">
        Usage
      </div>
      <div className=" mb-5 md:mb-10">
        <div className="  text-gray-800 font-medium text-lg md:text-2xl ">
          Using Axios API:
        </div>
        <AxiosApiCodeBlock />
      </div>
      <div>
        <div className="  text-gray-800 font-medium text-lg md:text-2xl ">
          Using Fetch API:
        </div>
        <FetchApiCodeBlock />
      </div>
    </div>
  );
};

export default UsageSection;
