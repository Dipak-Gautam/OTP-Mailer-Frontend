import React from "react";
interface OrangeButtonProp {
  title: string;
}

const OrangeButton = ({ title }: OrangeButtonProp) => {
  return (
    <div className="bg-[#f8663f] w-fit p-2 px-4 font-sans font-semibold rounded-md text-gray-500 hover:text-gray-100">
      {title}
    </div>
  );
};

export default OrangeButton;
