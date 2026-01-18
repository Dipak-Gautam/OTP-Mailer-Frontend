import React, { useState } from "react";
import WelcomeTemplate from "./Component/WelcomeTemplate";

const WelcomeMail = () => {
  const [subject, setSubject] = useState("Welcome Mail");
  return (
    <div className="flex gap-2 h-full p-3">
      <div className="flex flex-col flex-1 px-5 gap-3">
        <div className="font-SpaceMono text-xl italic font-bold text-center mb-5">
          Configure the welcome email
        </div>
        <div>
          <div className="flex-1 relative">
            <span className="absolute top-0 text-[11px] text-gray-600 font-medium bg-white px-1 left-2 -translate-y-2">
              Subject
            </span>
            <input
              value={subject}
              onChange={(event) => {
                setSubject(event.target.value);
              }}
              className="border border-gray-400 rounded-md p-2 text-base px-3 w-full outline-none"
              placeholder="Subject"
            />
          </div>
        </div>

        <WelcomeTemplate />
      </div>
      <div className="flex border-l border-black flex-1 bg-slate-50"></div>
    </div>
  );
};

export default WelcomeMail;
