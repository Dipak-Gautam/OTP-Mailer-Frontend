import React, { Component, ComponentProps } from "react";

interface WhiteButtonProp extends ComponentProps<"div"> {
  title: string;
}

const WhiteButton = ({ title, ...props }: WhiteButtonProp) => {
  return (
    <div
      className="bg-white w-fit p-2 px-4 font-sans font-semibold rounded-md text-gray-500 hover:text-gray-800 cursor-pointer"
      {...props}
    >
      {title}
    </div>
  );
};

export default WhiteButton;
