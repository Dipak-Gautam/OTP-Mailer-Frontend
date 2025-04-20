import { useState } from "react";
import { RiLogoutCircleLine } from "react-icons/ri";
import LogoutModal from "./Component/LogoutModal";

const Logout = () => {
  const [modal, showModal] = useState(false);
  return (
    <>
      <div
        className="flex items-center p-2  rounded-md gap-2  text-gray-200 hover:bg-[#3a3a3a] "
        onClick={() => showModal(true)}
      >
        <RiLogoutCircleLine className=" text-2xl" />
        <p className="text-lg font-lexend font-medium ">log Out</p>
      </div>
      <LogoutModal open={modal} close={() => showModal(false)} />
    </>
  );
};

export default Logout;
