import OrangeButton from "../../../../Buttons/OrangeButton/OrangeButton";
import UpdateButton from "../../../../Buttons/UpdateButton/UpdateButton";

const SaveAndTest = () => {
  return (
    <div className="flex justify-center items-center gap-8">
      <OrangeButton title="Save" />
      <UpdateButton title="Send Test Mail" />
    </div>
  );
};

export default SaveAndTest;
