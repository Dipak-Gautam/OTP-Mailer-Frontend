import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdFacebook, MdOutlineMail } from "react-icons/md";

const Connections = () => {
  return (
    <div className="flex flex-col p-2 gap-5  justify-center md:justify-start">
      <div className="font-SpaceMono text-sm md:text-2xl font-semibold hidden md:flex italic">
        Connections
      </div>
      <div className="text-2xl flex flex-col gap-3 text-gray-700 ">
        <div className="flex  text-base font-medium  gap-2 hover:text-blue-400 cursor-pointer">
          <MdFacebook className=" text-lg md:text-2xl" />
          <div className="hidden md:flex">Boma Colo</div>
        </div>
        <div className="flex  text-base font-medium  gap-2 hover:text-blue-400 cursor-pointer">
          <FaLinkedin className="text-lg md:text-2xl" />
          <div className="hidden md:flex">Dipak Gautam</div>
        </div>
        <div className="flex  text-base font-medium  gap-2 hover:text-blue-400 cursor-pointer">
          <FaGithubSquare className="text-lg md:text-2xl" />
          <div className="hidden md:flex">Dipak-Gautam</div>
        </div>
        <div className="flex  text-base font-medium  gap-2 hover:text-blue-400 cursor-pointer">
          <MdOutlineMail className="text-lg md:text-2xl" />
          <div className="hidden md:flex">anjangautam095@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default Connections;
