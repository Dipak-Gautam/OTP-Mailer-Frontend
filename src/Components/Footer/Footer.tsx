import React from "react";
import { TbNorthStar } from "react-icons/tb";
import LinkOptions from "./LinkOptions/LinkOptions";
import Connections from "./Connections/Connections";

const Footer = () => {
  return (
    <div className="bg-[#f3f6fe] px-5 md:px-10 lg:px-24 flex py-12 justify-between">
      <div className="flex flex-col items-center gap-8">
        <div className="w-fit">
          <div className="border border-gray-700  rounded-full p-2 bg-gray-700">
            <TbNorthStar className="text-white text-2xl md:text-4xl lg:text-6xl" />
          </div>
        </div>

        <div className="text-center text-[10px] md:text-base font-lexend font-medium ">
          © 2025 VirtualAssistance, Inc.
          <p> All rights reserved.</p>
          <p>Developed by Dipak Gautam</p>
        </div>
      </div>

      <LinkOptions />
      <Connections />
    </div>
  );
};

export default Footer;
