import { useState } from "react";
import OrangeButton from "../../../../Buttons/OrangeButton/OrangeButton";
import UpdateButton from "../../../../Buttons/UpdateButton/UpdateButton";
import TestModel from "./TestModel";
import { IEmailConfig } from "../../../../../Schema/emailConfig.Schema";

interface SaveAndTestProps {
  data: IEmailConfig;
}

const SaveAndTest = ({ data }: SaveAndTestProps) => {
  const [open, setClose] = useState(false);
  return (
    <div className="flex justify-center items-center gap-8">
      <OrangeButton title="Save" />
      <UpdateButton title="Send Test Mail" onClick={() => setClose(true)} />
      <TestModel open={open} onClose={() => setClose(false)} />
    </div>
  );
};

export default SaveAndTest;
