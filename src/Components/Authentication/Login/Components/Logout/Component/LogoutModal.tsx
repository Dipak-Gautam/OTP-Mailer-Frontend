import { MdClose } from "react-icons/md";
import removeData from "../../../../../../CustomFunctions/removeData";
import { useNavigate } from "react-router-dom";
interface logoutModalProp {
  open: boolean;
  close: () => void;
}

const LogoutModal = ({ open, close }: logoutModalProp) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => close()}
      className={`fixed inset-0 flex justify-center items-center transition-colors bg-slate-200/50 ${
        open ? "visible " : "invisible "
      }`}
    >
      <div
        className={` bg-white/50 backdrop-blur-md px-4 rounded-2xl shadow transition-all duration-500 border-2 border-white overflow-hidden ${
          open ? "scale-100 opacity-90" : " scale-125 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="border absolute bg-slate-700 right-0 rounded-bl-xl p-2 hover:bg-slate-800 cursor-pointer"
          onClick={() => {
            close();
          }}
        >
          <MdClose className="text-white text-xl" />
        </div>
        <div className=" p-6 flex flex-col gap-5">
          <div className="text-text font-poppins text-2xl text-center font-semibold">
            Logout Account
          </div>
          <div className="max-w-[400px] text-center">
            Are you sure you want to logout? One you logout you need to login
            again. Are you OK?
          </div>

          <div className=" flex  w-full gap-4 justify-end mt-5">
            <div
              className="bg-slate-200 p-2 px-4 rounded-md text-lg text-text cursor-pointer"
              onClick={() => close()}
            >
              Cancel
            </div>
            <div
              className={`p-2 px-4 rounded-md text-lg  bg-[#232323] hover:bg-[#000000] 
                 text-slate-50 cursor-pointer`}
              onClick={() => {
                removeData(), navigate("/");
              }}
            >
              Logout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
