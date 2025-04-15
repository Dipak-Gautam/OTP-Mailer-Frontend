import React from "react";

interface WhiteButtonProp {
  title: string;
}

const WhiteButton = ({ title }: WhiteButtonProp) => {
  return (
    <div className="bg-white w-fit p-2 px-4 font-sans font-semibold rounded-md text-gray-500 hover:text-gray-800">
      {title}
    </div>
  );
};

export default WhiteButton;
