import React, { ComponentProps } from "react";

interface UpdateButtonProp extends ComponentProps<"div"> {
  title: string;
}

const UpdateButton = ({ title, ...props }: UpdateButtonProp) => {
  return (
    <div
      className="  sm:w-fit bg-[#232323] text-gray-300 font-semibold font-lexend text-[10px] sm:text-base lg:text-base p-2 px-3  lg:px-5 rounded-3xl flex items-center hover:text-gray-100 cursor-pointer hover:bg-gray-600 hover:shadow-sm hover:shadow-gray-500/50 text-center duration-500 "
      {...props}
    >
      {title}
    </div>
  );
};

export default UpdateButton;
