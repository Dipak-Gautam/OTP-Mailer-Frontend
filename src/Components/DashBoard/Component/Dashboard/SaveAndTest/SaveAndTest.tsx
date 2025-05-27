import { Dispatch, SetStateAction, useState } from "react";

import UpdateButton from "../../../../Buttons/UpdateButton/UpdateButton";
import TestModel from "./TestModel";
import { IEmailConfig } from "../../../../../Schema/emailConfig.Schema";
import emailConfigApi from "../../../../../Api/EmailConfig/emailConfigApi";
import SaveButton from "../../../../Buttons/SaveButton";

interface SaveAndTestProps {
  data: IEmailConfig;
  isLoading: number;
  setIsLoading: Dispatch<SetStateAction<number>>;
}

const SaveAndTest = ({ data, isLoading, setIsLoading }: SaveAndTestProps) => {
  const [open, setClose] = useState(false);
  return (
    <div className="flex justify-center items-center gap-8">
      <SaveButton
        title="Save"
        onClick={() => {
          setIsLoading(2), emailConfigApi(data, setIsLoading);
        }}
        isLoading={isLoading}
        disabled={isLoading != 1}
      />
      <UpdateButton title="Send Test Mail" onClick={() => setClose(true)} />
      <TestModel open={open} onClose={() => setClose(false)} />
    </div>
  );
};

export default SaveAndTest;
