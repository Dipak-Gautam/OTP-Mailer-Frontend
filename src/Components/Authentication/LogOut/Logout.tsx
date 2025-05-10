import React from "react";

interface LogoutProps {
  open: boolean;
  onClose: () => void;
}

const Logout = ({ open, onClose }: LogoutProps) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center z-10 bg-slate-100/50 transition-colors ${
        open ? "visible" : "invisible"
      } `}
      onClick={() => onClose()}
    >
      <div
        className={`  bg-white rounded-xl transition-all duration-300 p-6 border border-gray-300  shadow-2xl shadow-gray-600/50 ${
          open ? "scale-90 opacity-100" : "scale-125 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-xl font-SpaceMono font-bold">
          Are you sure you want to Logout ?
        </div>
        <div className="flex justify-end gap-5 mt-6">
          <div className="p-2 px-4 border  rounded-md bg-red-500 font-bold text-white hover:bg-red-600 cursor-pointer">
            Confirm
          </div>
          <div
            className="p-2 px-4 border  rounded-md bg-gray-500 font-bold text-white hover:bg-gray-600 cursor-pointer"
            onClick={() => onClose()}
          >
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
