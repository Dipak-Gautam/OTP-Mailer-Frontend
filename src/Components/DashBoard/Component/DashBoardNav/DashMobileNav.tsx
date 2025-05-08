import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbNorthStar } from "react-icons/tb";
import MobileDashNav from "./Components/MobileDashNav";
import { useNavigate } from "react-router-dom";

const DashMobileNav = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="md:hidden bg-[#f3e5dc] p-5 justify-between flex">
      <div
        className="flex justify-center items-center gap-2 "
        onClick={() => navigate("/dashboard")}
      >
        <div className="border border-gray-700  rounded-full p-2 bg-gray-700 cursor-pointer w-fit">
          <TbNorthStar className="text-white text-2xl" />
        </div>
        <div className="text-lg font-SpaceMono text-black italic font-bold cursor-pointer">
          OTP-Mailer:
        </div>
      </div>
      <div className="flex md:hidden items-center justify-center my-auto h-full">
        <GiHamburgerMenu
          className="text-2xl sm:text-4xl"
          onClick={() => setShow(true)}
        />
      </div>
      <MobileDashNav open={show} onClose={() => setShow(false)} />
    </div>
  );
};

export default DashMobileNav;
