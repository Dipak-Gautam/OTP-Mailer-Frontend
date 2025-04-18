import React from "react";
interface OrangeButtonProp {
  title: string;
}

const OrangeButton = ({ title }: OrangeButtonProp) => {
  return (
    <div className="bg-[#f8663f] w-fit p-2 px-4 font-sans font-bold rounded-md text-gray-200 hover:text-white hover:bg-orange-600 cursor-pointer ">
      {title}
    </div>
  );
};

export default OrangeButton;
