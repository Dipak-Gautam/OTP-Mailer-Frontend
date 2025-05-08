import React from "react";

const DeleteAccount = () => {
  return (
    <div className="border p-4 rounded-xl border-gray-300 shadow-xl shadow-gray-400/50">
      <div className="text-xl font-medium text-gray-900">Delete Account</div>
      <div className="md:flex flex-1">
        <div className="flex flex-1 justify-center items-center min-h-28">
          <div className="p-2 px-3 bg-red-500 text-white font-semibold rounded-md cursor-pointer hover:bg-red-600 transition duration-200 ease-in-out">
            Delete Account
          </div>
        </div>
        <div className="md:w-[40%] space-y-4">
          <div className="font-SpaceMono font-bold text-xl md:text-2xl italic text-center">
            Delete Account
          </div>
          <div className="text-gray-500 font-medium md:text-lg">
            This will permanently remove your virtual assistance account. You
            will not be able to restore your account after you delete it.
          </div>
          <div className="text-red-500 italic  md:text-lg">
            <p>Note :</p>
            Warning! This action cannot be undone. This will permanently delete
            your account.
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
