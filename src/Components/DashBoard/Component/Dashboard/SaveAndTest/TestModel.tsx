import React from "react";
import { IoClose } from "react-icons/io5";
import OrangeButton from "../../../../Buttons/OrangeButton/OrangeButton";
import testEmailApi from "../../../../../Api/EmailConfig/testEmailApi";

interface SaveModelProps {
  open: boolean;
  onClose: () => void;
}

const TestModel = ({ open, onClose }: SaveModelProps) => {
  const [email, setEmail] = React.useState<string>("");
  const [message, setMessage] = React.useState<number>(0);

  const isValidEmail = (email: string) => {
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})$/;
    return regex.test(email);
  };

  const handelSend = () => {
    if (isValidEmail(email)) {
      testEmailApi(email, setMessage);
    } else {
      setMessage(1);
    }
  };

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center bg-slate-300/50 transition-colors z-50  ${
        open ? "visible" : "invisible"
      }`}
      onClick={onClose}
    >
      <div
        className={` bg-white/50 border border-white rounded-xl p-4 px-8 backdrop-blur-xs w-96 flex flex-col gap-3 overflow-hidden shadow-xl shadow-slate-500/50 m-8 transition-all  duration-500 ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex justify-center items-center px-2 py-2 font-sans font-semibold absolute top-0.5 right-0.5 bg-orange-400 rounded-tr-xl rounded-bl-xl cursor-pointer hover:bg-orange-500 "
          onClick={onClose}
        >
          <IoClose className="text-xl text-white" />
        </div>
        <div className="text-center font-SpaceMono text-xl italic font-bold">
          Send Test Mail
        </div>
        <div className="text-xs  italic text-red-400">
          First save the configuration to send the updated test mail.
        </div>
        <div className="">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="border rounded-md p-2 w-full mt-2 mb-2"
          />
          <div className="h-3">
            {message === 1 && (
              <span className="text-xs text-red-500">
                Please enter a valid email address.
              </span>
            )}
            {message === 2 && (
              <span className="text-xs text-green-500">
                Test email sent successfully!
              </span>
            )}
          </div>
        </div>

        <div
          className="flex justify-center items-center bg-orange-400 hover:bg-orange-500 text-white rounded-md p-2 font-semibold  cursor-pointer "
          onClick={handelSend}
        >
          Send
        </div>
      </div>
    </div>
  );
};

export default TestModel;
