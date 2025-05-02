import React from "react";
import { IoClose } from "react-icons/io5";
import OrangeButton from "../../../../Buttons/OrangeButton/OrangeButton";

interface SaveModelProps {
  open: boolean;
  onClose: () => void;
}

const SaveModel = ({ open, onClose }: SaveModelProps) => {
  const [email, setEmail] = React.useState<string>("");
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center bg-slate-300/50 transition-colors z-50  ${
        open ? "visible" : "invisible"
      }`}
      onClick={onClose}
    >
      <div
        className=" bg-white/50 border border-white rounded-xl p-4 px-8 backdrop-blur-xs w-[30%] flex flex-col gap-4 overflow-hidden shadow-xl shadow-slate-500/50 m-8 "
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex justify-center items-center px-4 py-2 font-sans font-semibold absolute top-0.5 right-0.5 bg-orange-400 rounded-tr-xl rounded-bl-xl cursor-pointer hover:bg-orange-500 "
          onClick={onClose}
        >
          <IoClose size={23} color="white" />
        </div>
        <div className="text-center font-SpaceMono text-xl italic font-bold">
          Send Test Mail
        </div>
        <div className="">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="border rounded-md p-2 w-full mt-2"
          />
        </div>
        <div className="text-xs  italic text-red-400">
          First save the configuration to send updated the test mail.
        </div>

        <div className="flex justify-center items-center bg-orange-400 hover:bg-orange-500 text-white rounded-md p-2 font-semibold  cursor-pointer ">
          Send
        </div>
      </div>
    </div>
  );
};

export default SaveModel;
