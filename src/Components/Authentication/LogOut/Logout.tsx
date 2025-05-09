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
        className={`w-80 h-80 bg-white rounded-3xl transition-all duration-300 ${
          open ? "scale-90 opacity-100" : "scale-125 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      ></div>
    </div>
  );
};

export default Logout;
