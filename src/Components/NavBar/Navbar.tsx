import React, { use, useState } from "react";
import { TbNorthStar } from "react-icons/tb";
import LoginButton from "../Buttons/Login/LoginButton";
import Options from "./Components/Options";
import { loginModalProp } from "../HeroImage/HeroImage";

import { useNavigate } from "react-router-dom";

const Navbar = ({ setShowModal }: loginModalProp) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-black  p-1 flex justify-between mx-3 md:mx-16">
        <div>
          <div
            className="border border-gray-700  rounded-full p-2 bg-gray-700 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <TbNorthStar className="text-white text-3xl" />
          </div>
        </div>

        <div className="flex gap-6">
          <Options />

          <div className="hidden md:flex justify-center items-center">
            <LoginButton onClick={() => setShowModal(true)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
