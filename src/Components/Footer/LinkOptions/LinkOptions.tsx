import { BiSend } from "react-icons/bi";

const LinkOptions = () => {
  return (
    <div className=" hidden sm:flex flex-col justify-center gap-3 md:gap-5">
      <div className=" text-xl md:text-2xl font-SpaceMono font-bold text-black italic">
        Links
      </div>
      <div className="flex flex-col gap-1 md:gap-2 text-gray-700 font-SpaceMono font-semibold text-sm md:text-base">
        <div className="flex gap-2 items-center cursor-pointer  hover:text-blue-400">
          <BiSend />
          Home
        </div>
        <div className="flex gap-2 items-center cursor-pointer  hover:text-blue-400">
          <BiSend />
          Docs
        </div>
        <div className="flex gap-2 items-center cursor-pointer  hover:text-blue-400">
          <BiSend />
          Products
        </div>
        <div className="flex gap-2 items-center cursor-pointer  hover:text-blue-400">
          <BiSend />
          Contact
        </div>
      </div>
    </div>
  );
};

export default LinkOptions;
