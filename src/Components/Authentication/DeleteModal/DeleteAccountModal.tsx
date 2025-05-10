import React from "react";

interface DeleteAccountModalProps {
  open: boolean;
  onClose: () => void;
}

const DeleteAccountModal = ({ open, onClose }: DeleteAccountModalProps) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center z-10 bg-slate-100/50 transition-colors z-30 ${
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
        <div
          className="md:text-xl font-SpaceMono font-bold
        "
        >
          Are you sure you want to Delete the Account?
        </div>
        <div className="text-red-500 italic text-[10px]  md:text-sm mt-3">
          Warning! This action cannot be undone. This will permanently delete
          your account.
        </div>
        <div className="flex justify-end gap-5 mt-6">
          <div className="p-2 px-4 border  rounded-md bg-red-500 font-bold text-white hover:bg-red-600 cursor-pointer text-sm md:text-base">
            Confirm
          </div>
          <div
            className="p-2 px-4 border  rounded-md bg-gray-500 font-bold text-white hover:bg-gray-600 cursor-pointer text-sm md:text-base"
            onClick={() => onClose()}
          >
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccountModal;
