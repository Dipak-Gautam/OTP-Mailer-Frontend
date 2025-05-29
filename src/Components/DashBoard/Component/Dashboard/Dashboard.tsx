import { IUserInfo } from "../../../../Schema/userInfo.Schema";
import EmailConfiguration from "./EmailConfiguration/EmailConfiguration";
import { HashLoader, PulseLoader } from "react-spinners";

const Dashboard = () => {
  const localStorageUserInfo = localStorage.getItem("userInfo");
  if (!localStorageUserInfo)
    return (
      <div className="h-[100vh] bg-white flex items-center justify-center">
        <div className="space-y-6">
          <HashLoader color="#ff9800" />
          <div className="flex items-end gap-1 font-medium text-gray-400">
            loading <PulseLoader size={8} color="gray" />
          </div>
        </div>
      </div>
    );

  const userData: IUserInfo = JSON.parse(
    localStorage.getItem("userInfo") || "{}"
  );

  return (
    <div className="p-5 h-[100vh] overflow-y-auto">
      <div className=" ">
        <EmailConfiguration userData={userData} />
      </div>
    </div>
  );
};

export default Dashboard;
