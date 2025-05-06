import { Outlet } from "react-router-dom";
import DashboardMainNav from "./Component/DashBoardNav/DashboardMainNav";

const DashboardMain = () => {
  return (
    <div className="md:flex flex-1 h-[100vh] w-full ">
      <DashboardMainNav />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardMain;
