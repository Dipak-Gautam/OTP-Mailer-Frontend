import React from "react";
import { TbNorthStar } from "react-icons/tb";
import LoginButton from "../Buttons/Login/LoginButton";

const Navbar = () => {
  return (
    <div className="text-black  p-1 flex justify-between md:mx-16">
      <div>
        <div className="border border-gray-700  rounded-full p-2 bg-gray-700">
          <TbNorthStar className="text-white text-3xl" />
        </div>
      </div>
      <div className="flex gap-6">
        <div className="flex items-center gap-6 text-gray-700 font-SpaceMono font-medium ">
          <div>Home</div>
          <div>About</div>
          <div>Products</div>
          <div>Contact</div>
        </div>
        <div className="flex justify-center items-center">
          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
