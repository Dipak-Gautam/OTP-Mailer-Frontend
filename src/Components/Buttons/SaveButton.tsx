import React, { Component, ComponentProps } from "react";
interface OrangeButtonProp extends ComponentProps<"button"> {
  title: string;
  isLoading: number;
}

const SaveButton = ({ title, isLoading, ...props }: OrangeButtonProp) => {
  return (
    <button
      className={` ${
        isLoading == 1
          ? "bg-[#f8663f] hover:bg-orange-400 transition-all duration-500 hover:shadow-lg"
          : "bg-[#904c39] hover:bg-[hsl(25,31%,54%)]"
      }   w-fit p-2 px-4 font-sans font-bold rounded-md text-gray-200 hover:text-white cursor-pointer `}
      {...props}
    >
      {(isLoading == 1 || isLoading == 0) && <span>save</span>}
      {isLoading == 2 && <span>saving</span>}
      {isLoading == 3 && <span>Saved</span>}
      {isLoading == 4 && <span>Error</span>}
    </button>
  );
};

export default SaveButton;
