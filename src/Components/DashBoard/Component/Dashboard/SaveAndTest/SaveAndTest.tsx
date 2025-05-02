import { useState } from "react";
import OrangeButton from "../../../../Buttons/OrangeButton/OrangeButton";
import UpdateButton from "../../../../Buttons/UpdateButton/UpdateButton";
import SaveModel from "./SaveModel";

const SaveAndTest = () => {
  const [open, setClose] = useState(false);
  return (
    <div className="flex justify-center items-center gap-8">
      <OrangeButton title="Save" />
      <UpdateButton title="Send Test Mail" onClick={() => setClose(true)} />
      <SaveModel open={open} onClose={() => setClose(false)} />
    </div>
  );
};

export default SaveAndTest;
