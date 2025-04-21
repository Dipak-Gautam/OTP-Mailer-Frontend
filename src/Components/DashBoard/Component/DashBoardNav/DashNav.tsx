import { TbNorthStar } from "react-icons/tb";
import { MdDashboard } from "react-icons/md";
import { PiBookOpenTextLight } from "react-icons/pi";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { GiHouseKeys } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";

const DashNav = () => {
  return (
    <div className=" h-full w-[20%] p-5 bg-[#f3e5dc] flex flex-col cursor-default">
      <div className="flex justify-center items-center gap-4 px-5">
        <div className="border border-gray-700  rounded-full p-2 bg-gray-700 cursor-pointer w-fit">
          <TbNorthStar className="text-white text-4xl" />
        </div>
        <div className="text-2xl font-SpaceMono text-black italic font-bold">
          OTP-Mailer:
        </div>
      </div>

      <div className="flex-1">
        <div className="my-8  space-y-5">
          <div className="flex items-center gap-4 text-xl bg-[#f8d3bb] p-2 px-3 rounded-md hover:bg-[#f3d8c7] cursor-pointer">
            <MdDashboard className="text-2xl" />
            <div className="text-black font-medium">Dashboard</div>
          </div>

          <div className="flex items-center gap-4 text-xl  p-2 px-3 rounded-md hover:bg-[#f3d8c7] cursor-pointer">
            <MdOutlineDesignServices className="text-2xl" />
            <div className="text-black font-medium">Configuration</div>
          </div>
        </div>

        <div className=" border border-b border-gray-500" />

        <div className="my-8 space-y-5">
          <div className="flex items-center gap-4 text-xl  p-2 px-3 rounded-md hover:bg-[#f3d8c7] cursor-pointer">
            <PiBookOpenTextLight className="text-2xl" />
            <div className="text-black font-medium">Documentation</div>
          </div>

          <div className="flex items-center gap-4 text-xl  p-2 px-3 rounded-md hover:bg-[#f3d8c7] cursor-pointer">
            <TbDeviceLandlinePhone className="text-2xl" />
            <div className="text-black font-medium">Contact</div>
          </div>

          <div className="flex items-center gap-4 text-xl  p-2 px-3 rounded-md hover:bg-[#f3d8c7] cursor-pointer">
            <GiHouseKeys className="text-2xl" />
            <div className="text-black font-medium">Account & ApiKey</div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 text-xl  p-2 px-3 rounded-md hover:bg-[#f3d8c7] cursor-pointer w-fit">
        <RiLogoutCircleLine className="text-2xl" />
        <div className=" text-black font-medium">Logout</div>
      </div>
    </div>
  );
};

export default DashNav;
