import React, { useEffect } from "react";

import { FiInfo } from "react-icons/fi";

interface ISuccessAlertProps {
  message: string;
  onClose: () => void;
  showAlert: boolean;
}

const SuccessAlert = ({ message, onClose, showAlert }: ISuccessAlertProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [showAlert]);

  return (
    <div
      className={`absolute top-0  transition-colors w-full -ml-10 sm:ml-0 flex justify-center items-center   lg:w-[60vw] ${
        showAlert ? "visible" : "invisible"
      }`}
    >
      <div
        className={`bg-[#E8F5E9] p-3 px-5 border border-green-500  shadow-lg shadow-green-500/50 rounded-md text-green-800 flex items-center justify-between mt-5 text-lg   md:text-2xl font-medium transition-all duration-300 ease-in-out w-fit gap-5 ${
          showAlert ? "scale-90 opacity-100" : "scale-125 opacity-10"
        }  `}
      >
        <span>
          <FiInfo className=" text-lg md:text-3xl lg:text-5xl text-green-500 " />
        </span>
        <span> {message}</span>
      </div>
    </div>
  );
};

export default SuccessAlert;
