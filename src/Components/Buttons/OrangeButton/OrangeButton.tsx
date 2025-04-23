import React, { Component, ComponentProps } from "react";
interface OrangeButtonProp extends ComponentProps<"div"> {
  title: string;
}

const OrangeButton = ({ title, ...props }: OrangeButtonProp) => {
  return (
    <div
      className="bg-[#f8663f] w-fit p-2 px-4 font-sans font-bold rounded-md text-gray-200 hover:text-white hover:bg-orange-600 cursor-pointer "
      {...props}
    >
      {title}
    </div>
  );
};

export default OrangeButton;
